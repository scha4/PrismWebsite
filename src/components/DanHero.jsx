import React from "react";

function DanHero() {
  return (
    <>
      <div className="lg:grid grid-cols-2 flex-col py-10 gap-3  ">
        <div className=" lg:col-start-1 lg:flex item-center justify-center mb-10 flex py-4 ">
          <img src="/danPic3.jpg" className="lg:w-full px-4  " />
        </div>{" "}
        <div className="col-start-2 flex flex-col gap-5 items-center justify-center ">
          <h1 className="text-3xl font-semibold text-blue-700">COACH DAN</h1>
          <h1 className="lg:text-lg  text-center w-3/4 text-lg">
            <h4 className="font-bold">PRO CAREER</h4>
            <div className="text-lg">
              <h4>PRO CAREER</h4>
              <p>11 PRO PLAYER (EUROPE & ASIA)</p>
              <p>7X KBL ALL-STAR</p>
              <h4>NATIONAL TEAM</h4>
              <p>2X KOREA MENS 5v5 NAT'L TEAM</p>
              <p>FIBA 3X3 KOREA RANKING #1[2019-2021]</p>
              <p>FIBA 3X3 NAT'l TEAM</p>
              <p>2X FIBA 3x3 WORLD CUP</p>
              <p>2020 TOKYO OLYMPIC QUALIFIERS</p>
            </div>
            <h4 className="font-bold mt-3">COACHING</h4>
            <div className="text-lg ">
              <p>BOTHEL HIGH SCHOOL VARSITY</p>
            </div>
          </h1>
        </div>
      </div>
    </>
  );
}

export default DanHero;
