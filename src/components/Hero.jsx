import React from "react";

import { Typography, Button } from "@material-tailwind/react";
function Hero() {
  return (
    <>
      <div className="relative ">
        <img
          alt="basketball"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full"
          src="/testPic2.JPG"
        />

        <div className="absolute inset-0 grid h-full w-5/6 place-items-center ">
          <div className="w-full py-2  ml-20 ">
            <Typography
              variant="lead"
              color="white"
              className=" md:text-4xl font-bold text-2xl "
            >
              Elite Training
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className=" md:text-3xl font-bold text-lg mt-5"
            >
              Get basketball training from the best
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className=" md:text-2xl font-bold text-lg mt-5"
            >
              Private or Group Lessons
            </Typography>
            <a href="/signup">
              <Button className="mt-10 bg-black ">Learn More</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
