import React, { useState } from "react";
import CategoryRecomm from "../CategoryBasedRecomm/CategoryRecomm";


const ParticularProduct = () => {
  const [picUrl, setPicUrl] = useState("/images/background2.png");
  return (
    <>
      <section>
        <div className="main flex md:flex-row flex-col justify-center items-center gap-10 mt-6 ">
          <div className="left">
            <div className="topPic">
              <figure className=" border-black border-[3px]">
                <img
                  src={picUrl}
                  alt="poster "
                  className="w-[250px] h-[250px]"
                />
              </figure>
            </div>
            <div className="bottomPic flex justify-between items-center mt-4">
              <figure
                className=" border-black border-[2px] "
                onClick={() => {
                  setPicUrl("/images/f2.png");
                }}
              >
                <img
                  src="/images/f2.png"
                  alt="poster"
                  className="w-[50px] h-[50px]"
                />
              </figure>
              <figure
                className=" border-black border-[2px]"
                onClick={() => {
                  setPicUrl("/images/background2.png");
                }}
              >
                <img
                  src="/images/background2.png"
                  alt="poster"
                  className="w-[50px] h-[50px]"
                />
              </figure>
              <figure
                className=" border-black border-[2px]"
                onClick={() => {
                  setPicUrl("/images/2.png");
                }}
              >
                <img
                  src="/images/2.png"
                  alt="poster"
                  className="w-[50px] h-[50px]"
                />
              </figure>
              <figure
                className=" border-black border-[2px]"
                onClick={() => {
                  setPicUrl("/images/3.png");
                }}
              >
                <img
                  src="/images/3.png"
                  alt="poster"
                  className="w-[50px] h-[50px]"
                />
              </figure>
            </div>
          </div>
          <div className="right md:w-[50%] w-[60%] flex flex-col justify-center items-start gap-3">
            <div className="font-bold">Home/Category_Name</div>
            <div>Product name</div>
            <div className="font-bold">₹ 12000</div>
            <button className="px-2 py-2 bg-green-500 text-white rounded-md active:bg-red-500">Buy Now</button>
            <div>
              <div className="font-bold">Products Details</div>
              <div>
                In this example, we have three routes defined using the Route
                component. The first route matches the root path of the
                application (/), and renders the Home component. The second
                route matches any path that begins with /users/ followed by a
                dynamic userId segment, and renders the UserProfile component
                with the userId param passed in as a prop. The third route
                matches the /about path and renders the About component.
              </div>
            </div>
            <div className="rating_review">
            <div className="flex justify-start gap-3 items-center">
              <figure className="flex justify-center  items-center">
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
            </div>
          </div>
        </div>
      </section>
     <div>
        <CategoryRecomm/>
     </div>
      
    </>
  );
};

export default ParticularProduct;
