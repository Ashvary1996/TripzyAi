"use client";
import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowDown, Earth, Globe2, Landmark, Plane, Send } from "lucide-react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function Hero() {
  const suggestions = [
    {
      title: "Create New Trip",
      icon: <Globe2 className="text-blue-400 h-5 w-5 " />,
    },
    {
      title: "Inspire me where to go",
      icon: <Plane className="text-orange-400 h-5 w-5" />,
    },
    {
      title: "Discover hidden gems",
      icon: <Landmark className="text-teal-400 h-5 w-5" />,
    },
    {
      title: "Adventure Destination",
      icon: <Earth className="text-green-400 h-5 w-5" />,
    },
  ];

  const { user } = useUser();
  const router = useRouter();

  const onSend = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
    router.push("/create-new-trip");
    
  };
  return (
    <div className="mt-2 flex justify-center w-full">
      {/* Content */}
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-xl md:text-5xl font-bold">
         {` Hey , I'm Your personal`}
          <span className="text-primary text-4xl p-1">Trip Planner</span>
        </h1>
        <p className="text-lg">
          {`Tell me what you want , and I'll handle the rest: Flights, Hotels,
          Trip Planning everthing all in a seconds.`}
        </p>
        {/* Input Box */}
        <div>
          <div className="border rounded-2xl p-4 relative">
            <Textarea
              placeholder="Create a trip from Paris to New York"
              className="w-full h-20 border-none focus-visible:ring-0 shadow-none resize-none"
            />
            <Button
              size={"icon"}
              onClick={() => onSend()}
              className="bottom-3 right-3 absolute cursor-pointer"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
        {/* Suggestions */}
        <div className="flex gap-5">
          {suggestions.map((suggestion, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-2 border rounded-full p-2 cursor-pointer hover:bg-primary"
              >
                {suggestion.icon}
                <h2 className="text-sm">{suggestion.title}</h2>
              </div>
            );
          })}
        </div>
        {/* Vdo Section */}

        <div className="flex justify-center-center flex-col items-center  ">
          <h2 className="flex gap-2 my-7 mt-14">
            Not Sure where to start? <strong>See how it works </strong>
            {<ArrowDown />}
          </h2>

          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            thumbnailSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
            thumbnailAlt="The first Blender Open Movie from 2006"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
