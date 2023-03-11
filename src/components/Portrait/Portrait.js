import React from "react";

const Portrait = () => {
  return (
    <>
      <section className="mt-6 container mx-auto bg-blue-500 text-white p-3">
        <h1 className="font-bold text-center text-[30px] tracking-wide">Custom Sketch</h1>
        <div className="flex md:flex-row flex-col justify-center items-start gap-[20%] mt-4">
          <div className="md:order-1 order-2 flex justify-center items-center flex-col mx-auto">
            <div className="flex flex-col justify-center items-center">
              <span className="font-bold md:text-[66px] text-[50px] text-black">Order Your </span>
              <span className="font-bold text-[46px] text-black">Portrait</span>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-green-500 px-4 py-4 rounded-lg active:text-red-500 text-white mt-4">Order Now</button>
            </div>
          </div>
          <div className="pb-3 mx-auto md:order-2 order-1">
            <figure className=" border-[4px] border-solid border-black rounded-md">
                <img src="/images/Background2.png" alt="custom portrait" className="md:w-[300px] w-[70vw]  "/>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portrait;
