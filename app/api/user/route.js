import User from "@/models/UserModel";
import connectToDb from "../../../lib/dbConfig";
import { currentUser } from "@clerk/nextjs/server";

export async function POST(request) {
  try {
    await connectToDb();
    const clerkUser = await currentUser();
    if (!clerkUser) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
      });
    }
    let existingUser = await User.findOne({ clerkId: clerkUser.id });
    if (!existingUser) {
      existingUser = await User.create({
        clerkId: clerkUser.id,
        name: clerkUser.fullName,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        imageUrl: clerkUser.imageUrl,
      });
    }
    // const { name, email, imageUrl, subscriptIcon } = await request.json();

    // const newUser = await UserModel.create({
    //   name,
    //   email,
    //   imageUrl,
    //   subscriptIcon,
    // });

    return new Response(
      JSON.stringify({
        message: "User created successfully",
        user: newUser,
      }),
      { status: 201 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

// GET → fetch all users
export async function GET() {
  try {
    await connectToDb();
    const users = await User.find({});
    return new Response(JSON.stringify(users), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
