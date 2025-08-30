import { Webhook } from "svix";
import { headers } from "next/headers";
import User from "../../../../models/UserModel";
import connectToDb from "../../../../lib/dbCongif";

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error("Missing CLERK_WEBHOOK_SECRET env variable");
  }

  // Read request body
  const payload = await req.text();
  const headerPayload = headers();

  // Verify webhook signature
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  const wh = new Webhook(WEBHOOK_SECRET);
  let evt;

  try {
    evt = wh.verify(payload, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    });
  } catch (err) {
    console.error("Webhook verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  // Event data
  const { type, data } = evt;

  await connectToDb();

  try {
    if (type === "user.created" || type === "user.updated") {
      await User.findOneAndUpdate(
        { clerkId: data.id },
        {
          clerkId: data.id,
          name: data.full_name,
          email: data.email_addresses[0]?.email_address,
          imageUrl: data.image_url,
        },
        { upsert: true, new: true }
      );
      console.log(`✅ User synced: ${data.id}`);
    }

    if (type === "user.deleted") {
      await User.findOneAndDelete({ clerkId: data.id });
      console.log(`❌ User deleted: ${data.id}`);
    }

    return new Response("Webhook processed", { status: 200 });
  } catch (err) {
    console.error("Error syncing user:", err);
    return new Response("Error", { status: 500 });
  }
}
