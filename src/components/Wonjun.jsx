import React from "react";

function Wonjun() {
  return (
    <>
      <div className="lg:grid grid-cols-2 flex-col py-10 gap-3  ">
        {" "}
        <div className="col-start-1 flex flex-col gap-5 items-center justify-center ">
          <h1 className="text-3xl font-semibold text-blue-700">
            COACH WONJUN{" "}
          </h1>
          <h1 className="hidden lg:flex lg:flex-col text-lg text-center ">
            <h4 className="font-bold">PRO CAREER</h4>
            <div className="text-lg">
              <p>FIBA 3X3 PRO PLAYER</p>

              <p>KOREA 3X3 LEAGUE CHAMPION [2021]</p>
              <p>JAPAN EXE LEAGUE PLAYER [2019]</p>
            </div>
            <h4 className="font-bold mt-3">COACHING</h4>
            <div className="text-lg ">
              <p>LAKE WASHINGTON HS VARSITY BOYS[2014]</p>
              <p>SFS HS VARSITY BOYS[2018]</p>
              <p>PEC SPORTS ACADEMY SUWON</p>
              <p>PRISM ACADEMY</p>
            </div>
          </h1>
        </div>
        <div className=" lg:col-start-2 lg:flex item-center justify-center mb-10 flex py-4 ">
          <img src="/prismWord.png" className="lg:w-full px-4  " />
        </div>
        <div className="lg:hidden flex flex-col items-center justify-center text-lg  ">
          <h4 className="font-bold">PRO CAREER</h4>
          <p>FIBA 3X3 PRO PLAYER</p>
          <p>KOREA 3X3 LEAGUE CHAMPION [2021]</p>
          <p>JAPAN EXE LEAGUE PLAYER [2019]</p>
          <h4 className="font-bold mt-3">COACHING</h4>
          <div className="text-lg text-center">
            <p>LAKE WASHINGTON HS VARSITY BOYS[2014]</p>
            <p>SFS HS VARSITY BOYS[2018]</p>
            <p>PEC SPORTS ACADEMY SUWON</p>
            <p>PRISM ACADEMY</p>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default Wonjun;
