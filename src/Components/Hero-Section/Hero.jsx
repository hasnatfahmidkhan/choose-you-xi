import React from "react";
import bgShadowImg from "../../assets/bg-shadow.png";
import bannerImg from "../../assets/banner-main.png";
const Hero = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgShadowImg})` }}
      className="bg-[#131313] bg-no-repeat bg-cover bg-center rounded-xl h-[400px] lg:h-[580px] px-4 text-center flex flex-col items-center justify-center gap-6 text-white mt-3 lg:mt-0"
    >
      <div>
        <img className="w-40 md:w-0" src={bannerImg} alt="" />
      </div>
      <h1 className="lg:text-5xl font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <h4 className="lg:text-3xl text-gray-500">
        Beyond Boundaries Beyond Limits
      </h4>
      <div className="p-2 border border-[#E7FE29] rounded-xl">
        <button className="btn bg-[#E7FE29] font-semibold">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Hero;
