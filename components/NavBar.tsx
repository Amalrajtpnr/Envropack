import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import styles from "../styles/Home.module.css";

export default function NavBar() {
  const [popUp, setPopUp] = useState(false);

  return (
    <div
      className={`${styles.navBar} w-full lg:h-[20%] sm500:h-[20%] sm300:h-[30%] bg-transparent flex  flex-row items-center lg:justify-between sm300:justify-start  lg:absolute sm500:absolute font-Encode  `}
    >
      <div className="lg:w-[40%]  sm300:w-[90%] h-full flex flex-row items-center lg:justify-start   lg:ml-[5.5vw] sm500:ml-8 sm300:ml-3 ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/logo1.svg?alt=media&token=a5ec18b6-e581-4026-b253-8a3b1b7c813a&_gl=1*1tq8pep*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5OTAyODY5Ni41LjEuMTY5OTAyODcyNC4zMi4wLjA."
          alt=""
          className={`${styles.logo} lg:w-[12%] sm300:w-[15%] sm500:w-[12%]  h-full`}
        />
        <h1
          className={`${styles.title} lg:text-[35px] sm300:text-[22px] sm500:text-[40px] font-bold text-[#004E2B]  lg:ml-4 sm300:ml-2 sm500:ml-6`}
        >
          ENVROPACK
        </h1>
      </div>
      <div className="w-[20%] h-full lg:hidden  sm300:flex sm500:hidden flex-col items-center justify-center ">
        <FaBars
          onClick={() => {
            setPopUp(!popUp);
          }}
          size={30}
        />
      </div>
      <div className="lg:w-[30%] sm500:w-[45%] h-full lg:flex sm300:hidden   sm500:flex  flex-row items-center justify-center ">
        <div className="w-full h-[50%] flex flex-row items-center justify-around rounded-l-2xl bg-transparent   backdrop-blur-[100px]   ">
          <a
            className={`text-white  sm500:text-[13px] sm300:text-[16px] lg:text-[14px] font-semibold cursor-pointer ${styles.title1}`}
            href="#home"
          >
            Home
          </a>
          <a
            className={`text-white sm500:text-[13px] sm300:text-[16px]  lg:text-[14px] font-semibold cursor-pointer ${styles.title1}`}
            href="#about"
          >
            About Us
          </a>
          <a
            className={`text-white sm500:text-[13px] sm300:text-[16px] lg:text-[14px] font-semibold cursor-pointer" ${styles.title1}`}
            href="#services"
          >
            Services
          </a>
          <a
            className={`text-white sm500:text-[13px] sm300:text-[16px] lg:text-[14px] font-semibold cursor-pointer" ${styles.title1}`}
            href="#footer"
          >
            Contact Us{" "}
          </a>
        </div>{" "}
      </div>
      {popUp && (
        <div className="w-full h-[40%] bg-transparent  backdrop-blur-[15px] sm300:flex lg:hidden flex-col items-center justify-start top-0   sm300:absolute p-5 box-border">
          <div className="w-full h-[10%] flex flex-col items-end justify-center ">
            <MdOutlineClose
              onClick={() => {
                setPopUp(false);
              }}
              size={30}
              color="black"
            />
          </div>{" "}
          <div className="w-full h-[80%] flex flex-col items-center justify-around ">
            <a
              className="text-black text-[14px] font-semibold cursor-pointer"
              onClick={() => {
                setPopUp(false);
              }}
              href="#home"
            >
              Home
            </a>
            <a
              className="text-black text-[14px] font-semibold cursor-pointer"
              onClick={() => {
                setPopUp(false);
              }}
              href="#about"
            >
              About Us
            </a>
            <a
              className="text-black text-[14px] font-semibold cursor-pointer"
              onClick={() => {
                setPopUp(false);
              }}
              href="#services"
            >
              Services
            </a>
            <a
              className="text-black text-[14px] font-semibold cursor-pointer"
              onClick={() => {
                setPopUp(false);
              }}
              href="#footer"
            >
              Contact Us{" "}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
