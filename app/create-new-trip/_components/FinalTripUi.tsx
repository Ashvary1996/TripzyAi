"use client";

import React from "react";
import { Globe2, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

function FinalTripUi({ viewTrip, disable }: any) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 border rounded-2xl max-w-md mx-auto text-center">
      <Globe2 className="w-6 h-6 text-blue-500 animate-bounce duration-75" />
      <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-600">
        <Plane className="w-5 h-5 text-teal-600" />
        Planning your dream trip
      </h2>
      <p className="text-sm text-gray-600">
        Gathering best destinations, activities, and travel details for you.
      </p>
      <Button
        disabled={disable}
        onClick={viewTrip}
        className="w-full rounded-xl cursor-pointer"
      >
        View Trip
      </Button>
    </div>
  );
}

export default FinalTripUi;
