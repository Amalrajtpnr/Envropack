import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import NavBar from "../components/NavBar";

export default function LandingSection() {
  return (
    <div id="home" className="lg:w-full sm300:w-full lg:h-[100vh] sm300:h-[110vh] sm500:h-[95vh] sm550:h-[150vh] flex lg:flex-row sm300:flex-col lg:items-start sm300:items-center lg:justify-end sm300:justify-between lg:relative sm300:relative ">
      <NavBar/>
      <div className="lg:w-[58%] sm300:w-full lg:h-full sm300:min-h-[50%] flex flex-col items-center justify-center  ">
        <div className="lg:w-[85%] sm300:w-[85%]  lg:h-full sm300:h-full flex flex-col lg:items-start sm300:items-center lg:justify-end sm300:justify-center   ">
          <h1 className="lg:text-[45px] sm300:text-[20px] sm500:text-[45px] lg:text-left sm300:text-center font-bold lg:font-Encode ">
            We take immense pride in being your trusted partner for all your
            packaging needs
          </h1>
          <h1 className="lg:text-[25px] sm300:text-[15px] sm500:text-[25px] lg:text-left sm300:text-center font-light ">
            Environmentally friendly disposable packages use sustainable
            materials, biodegradability, and reduced waste to minimize
            environmental impact. They promote eco-conscious consumer choices
            and support a cleaner, greener planet.
          </h1>
          <a href="https://wa.me/+971526465157" className="lg:w-[22%] sm300:w-[40%] sm500:w-[28%] sm500:h-[8%] lg:h-[6%] sm300:h-[10%] bg-[#004E2B]  flex flex-row items-center justify-center rounded-full mt-4 cursor-pointer">
            <button className="lg:text-[15px] sm300:text-[12px] sm500:text-[20px] text-white focus:outline-none">
              Chat with us
            </button>
            <BsWhatsapp size={20} color="white" className="ml-2" />
          </a>
          <div className="w-[80%] h-[20%] flex flex-row items-start justify-between ">
            <div className="w-[25%] h-full flex flex-col items-start justify-center ">
              <h1 className="lg:text-[38px] sm300:text-[18px]  sm500:text-[45px] text-left font-bold">10K+</h1>
              <h1 className="lg:text-[20px] sm300:text-[13px] sm500:text-[30px] text-left  font-light ">Countries</h1>
            </div>
            <div className="w-[25%] h-full flex flex-col items-start justify-center ">
              <h1 className="lg:text-[38px] sm300:text-[18px] sm500:text-[45px]  text-left font-bold">10K+</h1>
              <h1 className="lg:text-[20px] sm300:text-[13px] sm500:text-[30px] text-left font-light ">Clients</h1>
            </div>{" "}
            <div className="w-[25%] h-full flex flex-col items-start justify-center ">
              <h1 className="lg:text-[38px] sm300:text-[18px] sm500:text-[45px]  text-left font-bold">1000+</h1>
              <h1 className="lg:text-[20px] sm300:text-[13px] sm500:text-[30px] text-left font-light ">Products</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] sm300:w-[100%] lg:h-full sm300:h-[50%] flex flex-col items-center justify-start ">
        <img src="/images/shipping.jpg" className="w-full h-full lg:flex sm300:hidden" alt="" />
        <img src="/images/shippingmb.jpg" className="w-full h-full sm300:flex lg:hidden" alt="" />


      </div>
    </div>
  );
}
