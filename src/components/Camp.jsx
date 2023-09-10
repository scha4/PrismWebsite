import React from "react";
import { Typography, Button } from "@material-tailwind/react";

function Camp() {
  return (
    <>
      <div className="border-b border-gray-500 my-4"></div>
      <div className="lg:py-20 py-8 bg-slate-100">
        <div className="md:grid grid-cols-2 h-auto">
          <div className="mx-auto max-w-screen-xl col-span-1 flex flex-col md:items-left justify-center space-y-7  mt-6">
            <h1 className="text-2xl font-bold lg:ml-5 text-center ">
              OCTOBER CAMP
            </h1>

            <video className="h-full w-full rounded-lg  md:hidden" controls>
              <source src="./prismTrainingVideo.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div>
              <ul className="list-disc list-inside text-lg lg:ml-5 mx-2">
                <li>
                  Our program is a 4-week course system (classes once a week)
                  with 3~6 participants.
                </li>
                <li>
                  Coach Wonjun will be the main trainer for every class and 2 of
                  the weeks you will be trained by both Coach Eric and Coach
                  Wonjun.
                </li>
                <li>
                  Sessions are going to be intense and exciting 90 minutes of
                  hard work and will cover from basic fundamentals of basketball
                  all the way up to advanced in-game skills that you can apply
                  to your game.
                </li>
                <li>
                  Our sessions are offered in packages where you will get
                  discounts if you purchase more classes (see below for exact
                  prices).
                </li>
              </ul>
            </div>
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf0A8X908KeOUAY0NFFnbjpN1d_fxO9aAUuAj4XQJhKc2Tzww/viewform"
            >
              <div className="flex items-center justify-center ">
                <Button className=" bg-black lg:w-1/3   ">Sign up Now</Button>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center justify-center pt-10 pb-10">
            <video className="lg:w-3/4 max-w-96 rounded-lg" controls>
              <source src="./prismTrainingVideo.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Camp;
