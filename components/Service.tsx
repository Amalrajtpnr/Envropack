import React from "react";

export default function Service() {
  return (
    <div className="w-full lg:h-[80%] sm300:h-[100%] flex lg:flex-row sm300:flex-col  items-center justify-around lg:mt-0 sm300:mt-4">
      <div className="lg:w-[15%] sm300:w-[45%] sm500:w-[35%] lg:h-full sm500:h-[20%] flex flex-col items-center justify-start   ">
        <img src="/images/cup1.jpg" alt="" />
        <h1 className="lg:text-[20px]  sm300:text-[13px] sm500:text-[20px] text-[#004E2B] text-center font-normal leading-6 lg:mt-6 sm300:mt-2 ">
          Eco-friendly disposable packages
        </h1>
      </div>
      <div className="lg:w-[15%] sm300:w-[45%] sm500:w-[35%]  sm500:h-[20%] lg:h-full flex flex-col items-center justify-start lg:mt-0 sm300:mt-4 ">
        <img src="/images/detergent1.jpg" alt="" />
        <h1 className="lg:text-[20px]  sm300:text-[13px] sm500:text-[20px] text-[#004E2B] text-center font-normal leading-6 lg:mt-6 sm300:mt-2 ">
          Branded cleaning Chemicals
        </h1>
      </div>{" "}
      <div className="lg:w-[15%] sm300:w-[45%] sm500:w-[35%]  sm500:h-[20%] lg:h-full flex flex-col items-center justify-start lg:mt-0 sm300:mt-4 ">
        <img src="/images/brrom1.jpg" alt="" />
        <h1 className="lg:text-[20px]  sm300:text-[13px] sm500:text-[20px] text-[#004E2B] text-center font-normal leading-6 lg:mt-6 sm300:mt-2 ">
          Best Cleaning Materials
        </h1>
      </div>{" "}
      <div className="lg:w-[15%] sm300:w-[45%] sm500:w-[35%]  sm500:h-[20%] lg:h-full flex flex-col items-center justify-start lg:mt-0 sm300:mt-4">
        <img src="/images/bag1.jpg" alt="" />
        <h1 className="lg:text-[20px]  sm300:text-[13px] sm500:text-[20px] text-[#004E2B] text-center font-normal leading-6 lg:mt-6 sm300:mt-2    ">
          High quality Paper bags
        </h1>
      </div>{" "}
    </div>
  );
}
