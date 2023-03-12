import React from "react";

const Praise = () => {
  return (
    <>
      <section className="mt-6 container mx-auto ">
        <h1 className="text-center font-bold text-[36px]">Why US</h1>
        <div className="flex md:flex-row flex-col gap-4 justify-between mx-4 items-center mt-4">
          <div className="py-2 px-2 flex flex-col justify-center items-center gap-4 border-[2px] border-solid border-black">
            <figure >
              <img
                src="/images/Background2.png"
                alt="Best Quality Portrait "
                className="md:w-[200px] w-[60vw]  h-[200px]"
              />
            </figure>
            <p className="text-center font-bold font-['Poppins'] tracking-wider ">Best Quality</p>
          </div>
          <div className="py-2 px-2 flex flex-col justify-center items-center gap-4 border-[2px] border-solid border-black">
            <figure className="">
              <img
               src="/images/Background2.png"
                alt="Best Quality Portrait "
                className="md:w-[200px] w-[60vw]  h-[200px]"
              />
            </figure>
            <p className="text-center font-bold font-['Poppins'] tracking-wider">Fastest Delivey</p>
          </div>
          <div className="py-2 px-2 flex flex-col justify-center items-center gap-4 border-[2px] border-solid border-black">
            <figure className="">
              <img
                src="/images/Background2.png"
                alt="Best Quality Portrait "
                className="md:w-[200px] w-[60vw]  h-[200px]"
              />
            </figure>
            <p className="text-center font-bold font-['Poppins'] tracking-wider">Customer Satisfaction</p>
          </div>
          <div className="py-2 px-2 flex flex-col justify-center items-center gap-4 border-[2px] border-solid border-black">
            <figure className="">
              <img
                src="/images/Background2.png"
                alt="Best Quality Portrait "
                className="md:w-[200px] w-[60vw] h-[200px]"
              />
            </figure>
            <p className="text-center font-bold font-['Poppins'] tracking-wider">24/7 Support</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Praise;
