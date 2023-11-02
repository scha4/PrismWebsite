import React from "react";

function CurrentEvent() {
  return (
    <>
      <div className="flex flex-col items-center my-20 ">
        <div className="lg:text-5xl mt-4 font-bold mb-2 text-3xl">EVENTS</div>
        <div className="grid grid-cols-2 lg:mx-5 lg:gap-3 gap-2 mx-2 ">
          <div className="flex flex-col mt-3 ">
            <a href="/byAnyMeans">
              <img src="prismcamp2023-min.JPG" className="max-w-full" />
            </a>
            <div className="mt-2 lg:text-2xl text-xs font-bold">
              BY ANY MEANS X PRISM CAMP
            </div>
            <div className="lg:text-2xl text-xs">OCTOBER 6-8, 2023</div>
          </div>
          <div className="flex flex-col mt-3">
            <img src="LEVELUPCAMP-min.JPG" className="max-w-full font-bold" />
            <div className="mt-2 lg:text-2xl text-xs font-bold">
              LEVEL UP CAMP X DREAM TEAM
            </div>
            <div className="lg:text-2xl text-xs">JANUARY 28-29, 2023</div>
          </div>
        </div>
        {/* Picture collage */}
        <div className="grid grid-cols-2 lg:gap-3 gap-2 lg:mx-5 mx-2">
          <div className="grid-rows-2  ">
            <div className="row-start-1 ">
              <img src="CHOSUNCAMP2-min.JPG" className="max-w-full " />
              <div className="mt-2 lg:text-2xl text-xs font-bold">
                CHOSUN UNIVERSITY TEAM TRAINING
              </div>
              <div className="lg:text-2xl text-xs">DECEMBER 9, 2022</div>
            </div>
            <div className=" row-start-2">
              <img src="PECCAMP-min.JPG" className="max-w-full  " />
              <div className="mt-2 lg:text-2xl text-xs font-bold">
                PEC X PRISM
              </div>
              <div className="lg:text-2xl text-xs">DECEMBER 3, 2022</div>
            </div>
          </div>
          <div className=" col-start-2 col-span-1  ">
            <img src="CHUNGJOOTOURNAMENT-min.JPG" className=" max-w-full" />
            <div className="mt-2 lg:text-2xl text-xs font-bold">
              CHUNGJOO YOUTH BASKETBALL TOURNAMENT
            </div>
            <div className="lg:text-2xl text-xs">JULY 23-31, 2022</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentEvent;
