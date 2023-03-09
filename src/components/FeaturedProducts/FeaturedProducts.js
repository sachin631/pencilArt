import React from "react";
// import { CiStar } from "react-icons/ci";

const FeaturedProducts = () => {
  return (
    <>
      <section className="mt-6 container mx-auto pb-4 ">
        <h1 className="text-center font-bold text-[36px]">Featured Products</h1>
        <h1 className="text-center font-bold text-[36px] text-blue-500">
          Some Sketches People Love Most
        </h1>
        <div className="flex justify-between mx-4 items-center mt-4">
          <div className="py-2 px-2 flex flex-col justify-center items-center gap-2 border-[2px] border-solid border-black">
            <figure className="border-[2px] border-solid border-black">
              <img
                src="/images/Background2.png"
                alt="Best Quality Portrait "
                className="w-[200px]  h-[200px]"
              />
            </figure>
            <div className="flex justify-center items-center">
              <figure className="flex justify-center items-center">
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
              </figure>
              <span>(5 review)</span>
            </div>
            <div className="">Sketch Name</div>
            <div className="flex justify-between items-center w-full">
              <div>₹20000</div>
              <button className="bg-green-500 px-3 py-1 text-center text-white  rounded-md active:bg-red-500">
                Cart
              </button>
            </div>
          </div>
          <div className="py-2 px-2 flex flex-col justify-center items-center gap-2 border-[2px] border-solid border-black">
            <figure className="border-[2px] border-solid border-black">
              <img
                src="/images/Background2.png"
                alt="Best Quality Portrait "
                className="w-[200px]  h-[200px]"
              />
            </figure>
            <div className="flex justify-center items-center">
              <figure className="flex justify-center items-center">
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
              </figure>
              <span>(5 review)</span>
            </div>
            <div className="">Sketch Name</div>
            <div className="flex justify-between items-center w-full">
              <div>₹20000</div>
              <button className="bg-green-500 px-3 py-1 text-center text-white  rounded-md active:bg-red-500">
                Cart
              </button>
            </div>
          </div>
          <div className="py-2 px-2 flex flex-col justify-center items-center gap-2 border-[2px] border-solid border-black">
            <figure className="border-[2px] border-solid border-black">
              <img
                src="/images/Background2.png"
                alt="Best Quality Portrait "
                className="w-[200px]  h-[200px]"
              />
            </figure>
            <div className="flex justify-center items-center">
              <figure className="flex justify-center items-center">
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
              </figure>
              <span>(5 review)</span>
            </div>
            <div className="">Sketch Name</div>
            <div className="flex justify-between items-center w-full">
              <div>₹20000</div>
              <button className="bg-green-500 px-3 py-1 text-center text-white  rounded-md active:bg-red-500">
                Cart
              </button>
            </div>
          </div>
          <div className="py-2 px-2 flex flex-col justify-center items-center gap-2 border-[2px] border-solid border-black">
            <figure className="border-[2px] border-solid border-black">
              <img
                src="/images/Background2.png"
                alt="Best Quality Portrait "
                className="w-[200px]  h-[200px]"
              />
            </figure>
            <div className="flex justify-center items-center">
              <figure className="flex justify-center items-center">
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/images/star.png"
                  alt="star"
                  className="w-[20px] h-[20px]"
                />
              </figure>
              <span>(5 review)</span>
            </div>
            <div className="">Sketch Name</div>
            <div className="flex justify-between items-center w-full">
              <div>₹20000</div>
              <button className="bg-green-500 px-3 py-1 text-center text-white  rounded-md active:bg-red-500">
                Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedProducts;
