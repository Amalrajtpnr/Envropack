import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import {FiMail} from "react-icons/fi"
import {FaPhone} from "react-icons/fa"

export default function Footer() {
  return (
    <div className="w-full lg:h-[40vh] sm300:h-[50vh] sm500:h-[15vh] bg-[#E6F0EC]   flex flex-col items-center justify-between  lg:p-6 sm300:p-6 sm500:p-5 box-border  font-Encode ">
      <div className="lg:w-[93%] sm500:w-[95%] sm300:w-[80%]  lg:h-[80%] sm300:h-[100%] bg-[#E6F0EC] flex lg:flex-row sm500:flex-row sm300:flex-col lg:items-start sm300:items-center sm500:items-start justify-between  ">
        <div className="lg:w-[30%] sm500:w-[100%]  sm300:w-[90%] lg:h-full sm500:h-[50%] sm300:h-[80%]  flex lg:flex-row sm500:flex-row sm300:flex-col items-center justify-start">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/logo1.svg?alt=media&token=a5ec18b6-e581-4026-b253-8a3b1b7c813a&_gl=1*1tq8pep*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5OTAyODY5Ni41LjEuMTY5OTAyODcyNC4zMi4wLjA."
            alt=""
            className="lg:w-[20%] sm500:w-[20%] sm300:w-[30%] sm300:h-[50%] lg:h-[100%]"
          />
          <h1 className="lg:text-[45px] sm300:text-[25px] font-bold text-[#004E2B] ml-4">
            ENVROPACK
          </h1>
        </div>
        <div className="lg:w-[15%]  sm300:w-[90%] sm500:w-[50%] sm500:h-[70%] lg:h-[70%] sm300:h-[90%]  flex   flex-col  lg:items-start sm300:items-center justify-around  lg:mt-8 sm300:mt-0 sm500:mt-0  ">
          <h1 className="lg:text-[15px] sm300:text-[14px] sm500:text-[20px] lg:font-bold sm300:font-bold text-[#004E2B]">
            ENVROPACK
          </h1>
          <h1 className="lg:text-[15px] sm300:text-[13px] sm500:text-[18px] font-medium text-[#004E2B]">
            Mussafah 39
          </h1>
          <h1 className="lg:text-[15px] sm300:text-[13px] sm500:text-[18px] font-medium text-[#004E2B] ">
            Abudhabi, UAE
          </h1>
          <h1 className="lg:text-[15px] sm300:text-[13px] sm500:text-[18px] font-medium text-[#004E2B]">
            envropack@gmail.com
          </h1>

          <h1 className="lg:text-[15px] sm300:text-[13px] sm500:text-[18px] font-medium text-[#004E2B]">
            +971545994729
          </h1>
        </div>{" "}
      
      </div>
    </div>
  );
}
