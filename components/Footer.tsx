import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { HiOutlinePhone } from "react-icons/hi";
import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
    <div className="w-full lg:h-[50vh] sm300:h-[50vh] sm500:h-[18vh] bg-[#E6F0EC]   flex flex-col items-center justify-between  lg:p-6 sm300:p-6 sm500:p-5 box-border  font-Encode ">
      <div className="lg:w-[53%] sm500:w-[95%] sm300:w-[80%] lg:h-[100%] sm300:h-[100%] bg-[#E6F0EC] flex lg:flex-col sm500:flex-col sm300:flex-col lg:items-center sm300:items-center sm500:items-center justify-around  ">
        <div className="lg:w-[100%] sm500:w-[100%]   sm300:w-[100%] lg:h-[50%] sm500:h-[50%] sm300:h-[50%]  flex lg:flex-col sm500:flex-col sm300:flex-col items-center justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/logo1.svg?alt=media&token=a5ec18b6-e581-4026-b253-8a3b1b7c813a&_gl=1*1tq8pep*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5OTAyODY5Ni41LjEuMTY5OTAyODcyNC4zMi4wLjA."
            alt=""
            className="lg:w-[10%] sm500:w-[20%] sm300:w-[30%] sm300:h-[50%] lg:h-[100%]"
          />
          <h1 className="lg:text-[35px] sm300:text-[22px] font-bold text-[#004E2B] lg:mt-1 sm300:mt-2 sm500:mt-2">
            ENVROPACK
          </h1>
        </div>
        <div className="lg:w-[100%]   sm300:w-[100%] sm500:w-[50%] sm500:h-[40%] lg:h-[35%] sm300:h-[40%]  flex   flex-col  lg:items-start sm300:items-center justify-around  lg:mt-0 sm300:mt-0 sm500:mt-0  ">
          {/* <h1 className="lg:text-[15px] sm300:text-[14px] sm500:text-[20px] lg:font-bold sm300:font-bold text-[#004E2B]">
            ENVROPACK
          </h1> */}
          <div className="w-full h-[25%] flex flex-row items-center justify-center  ">
            <IoLocationOutline size={20} color="#004E2B" />

            <h1 className="lg:text-[15px] sm300:text-[13px] sm500:text-[18px] font-medium ml-2 text-[#004E2B]">
              Mussafah 39 , Abudhabi, UAE
            </h1>
          </div>
          <div className="w-full h-[25%] flex flex-row items-center justify-center  ">
            <FiMail size={20} color="#004E2B" />

            <h1 className="lg:text-[15px] sm300:text-[13px] sm500:text-[18px] font-medium ml-2 text-[#004E2B]">
              envropack@gmail.com
            </h1>
          </div>
          <div className="w-full h-[25%] flex flex-row items-center justify-center  ">
            <HiOutlinePhone size={20} color="#004E2B" />

            <h1 className="lg:text-[15px] sm300:text-[13px] sm500:text-[18px] font-medium ml-2 text-[#004E2B]">
              +971545994729
            </h1>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
