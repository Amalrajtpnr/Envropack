import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function LandingSection() {
  return (
    <div
      id="home"
      className={`${styles.landing}  lg:w-full sm500:w-full sm300:w-full lg:h-[100vh] sm300:h-[110vh] sm500:h-[35vh]    flex lg:flex-row sm500:flex-row sm300:flex-col lg:items-start sm500:items-start sm300:items-center lg:justify-end sm500:justify-end sm300:justify-between lg:relative sm500:relative sm300:relative `}
    >
      <NavBar />
      <div
        className={`${styles.section} lg:w-[60%] sm300:w-full sm500:w-[55%] lg:h-full sm500:h-full sm300:min-h-[50%] flex flex-col items-center justify-center  pt-0 lg:pt-[8%]`}
      >
        <div className="lg:w-[80%]  sm500:w-[90%] sm300:w-[85%]  lg:h-[90%] sm300:h-full flex flex-col lg:items-start sm300:items-center sm500:items-start lg:justify-start sm300:justify-center sm500:justify-end  pt-0 lg:pt-[2vh] ">
          <h1
            className={`${styles.head}   lg:text-[2.7vw] lg:leading-[8vh] sm300:text-[18px] sm500:text-[25px] text-[#062701]  lg:text-left sm300:text-center sm500:text-left font-bold font-Encode lg:tracking-wider`}
          >
            We take immense pride in being your trusted partner for all your
            packaging needs
          </h1>
          <h1
            className={`${styles.sub} lg:text-[1.2vw] text-[#004E2B] sm300:text-[13px] sm500:text-[18px]  lg:text-left sm300:text-center sm500:text-left  font-light  lg:mt-6 lg:mb-3 sm300:mt-2 sm500:mt-4 font-Encode `}
          >
            Environmentally friendly disposable packages use sustainable
            materials, biodegradability, and reduced waste to minimize
            environmental impact. They promote eco-conscious consumer choices
            and support a cleaner, greener planet.
          </h1>
          <a
            href="https://wa.me/+971545994729"
            className="lg:w-[22%] sm300:w-[40%]   lg:mt-[2%]  sm500:w-[30%] sm500:h-[7%] lg:h-[45px] sm300:h-[10%] bg-[#004E2B]  flex flex-row items-center justify-center rounded-full mt-4 cursor-pointer"
          >
            <button
              className={`h-full lg:h-[45px] lg:text-[15px] sm300:text-[10px] sm500:text-[13px] text-white focus:outline-none font-Encode ${styles.sub1} `}
            >
              Chat with us
            </button>
            <BsWhatsapp size={20} color="white" className="ml-2" />
          </a>
          <div className="w-[80%] h-[20%] flex flex-row items-start justify-between font-Encode mt-0 lg:mt-[5%]">
            <div className="w-[25%] h-full flex flex-col items-start justify-center ">
              <h1
                className={`lg:text-[35px] sm300:text-[18px]  sm500:text-[25px]   text-left font-bold text-[#062701] ${styles.head} `}
              >
                10+
              </h1>
              <h1
                className={`lg:text-[19px] sm300:text-[13px] sm500:text-[20px] text-left  font-light text-[#004E2B] ${styles.sub}`}
              >
                Countries
              </h1>
            </div>
            <div className="w-[25%] h-full flex flex-col items-start justify-center ">
              <h1
                className={`lg:text-[35px] sm300:text-[9] sm500:text-[25px]   text-left font-bold text-[#062701] ${styles.head}`}
              >
                10K+
              </h1>
              <h1
                className={`lg:text-[19px] sm300:text-[13px] sm500:text-[20px] text-left font-light text-[#004E2B]  ${styles.sub}`}
              >
                Clients
              </h1>
            </div>{" "}
            <div className="w-[25%] h-full flex flex-col items-start justify-center ">
              <h1
                className={`lg:text-[35px] sm300:text-[18px] sm500:text-[25px]   text-left font-bold text-[#062701] ${styles.head}`}
              >
                1000+
              </h1>
              <h1
                className={`lg:text-[19px] sm300:text-[13px] sm500:text-[20px] text-left font-light text-[#004E2B] ${styles.sub}`}
              >
                Products
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] sm500:w-[43%] sm300:w-[100%] lg:h-full sm500:h-full sm300:h-[50%] flex flex-col items-center justify-start ">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/shipping.jpg?alt=media&token=898be929-f7be-4081-94db-9df8730e976d&_gl=1*1msly5c*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5ODkzNTk1Ny4zLjEuMTY5ODkzNjA1Ni41NC4wLjA."
          className="w-full h-full lg:flex sm300:hidden sm500:flex"
          alt=""
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/shippingmb.jpg?alt=media&token=4d129f45-ddef-4899-b70a-7dcb66de8a95&_gl=1*au6qdc*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5ODkzNTk1Ny4zLjEuMTY5ODkzNjMyMS41OS4wLjA."
          className="w-full h-full sm300:flex lg:hidden sm500:hidden"
          alt=""
        />
      </div>
    </div>
  );
}
