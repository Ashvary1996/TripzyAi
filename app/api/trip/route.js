import connectToDb from "../../../lib/dbConfig";
import { currentUser } from "@clerk/nextjs/server";
import Trip from "../../../models/TripModel";
import User from "../../../models/UserModel";

export async function POST(req) {
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

    const body = await req.json();

    const newTrip = await Trip.create({
      userId: clerkUser.id, // link trip to Clerk user
      trip_plan: body.trip_plan,
    });

    return new Response(
      JSON.stringify({
        message: "Trip saved successfully",
        user: existingUser,
        trip: newTrip,
      }),
      { status: 201 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

export async function GET() {
  try {
    await connectToDb();
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
      });
    }

    const trips = await Trip.find({ userId: clerkUser.id });

    return new Response(JSON.stringify(trips), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
