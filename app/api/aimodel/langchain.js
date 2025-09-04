import express from "express";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { RunnableWithMessageHistory } from "@langchain/core/runnables";
import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
// --
const route = express.Router();
const messageHistories = new Map();
// --
// Create Gemini Chat model
const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  apiKey: "",
  temperature: 0,
});

// --- Prompt template (system + history + new input)
const prompt = ChatPromptTemplate.fromMessages([
  [
    "system",
    "You are a helpful chatbot. You must remember the user's past conversations within their session.",
  ],
  ["placeholder", "{history}"], // ✅ matches historyMessagesKey
  ["human", "{input}"],
]);
// Chain with model + prompt
const chain = prompt.pipe(llm);

// Wrap chain with memory
const chainWithHistory = new RunnableWithMessageHistory({
  runnable: chain,
  getMessageHistory: async (sessionId) => {
    if (!messageHistories.has(sessionId)) {
      messageHistories.set(sessionId, new InMemoryChatMessageHistory());
    }
    return messageHistories.get(sessionId);
  },
  inputMessagesKey: "input",
  historyMessagesKey: "history", //✅ matches prompt placeholder
});

////////////////////////-------------------

route.post("/", async (req, res) => {
  const { message, sessionId } = req.body;
  if (!message || !sessionId) {
    return res
      .status(400)
      .json({ error: "message and sessionId are required" });
  }
  console.log(sessionId, message);

  try {
    const response = await chainWithHistory.invoke(
      { input: message },
      { configurable: { sessionId } }
    );
    // console.log("response", response);
    console.log("messageHistories", messageHistories);
    res.json({ reply: response.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});
console.log("messageHistories", messageHistories);

export default route;
