import React from "react";
import { Typography, Button } from "@material-tailwind/react";

function AboutHero() {
  return (
    <>
      <div className="relative ">
        <img
          alt="basketball"
          className="w-full brightness-50"
          src="./campPic2.jpg"
        />

        <div className="absolute inset-0 grid h-full w-5/6 place-items-center text-center  ">
          <div className="w-full   ml-20 ">
            <Typography
              variant="lead"
              color="white"
              className=" md:text-5xl font-bold text-3xl "
            >
              ABOUT US
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutHero;
