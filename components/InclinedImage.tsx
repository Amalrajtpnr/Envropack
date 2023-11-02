import React from 'react'
import styles from "../styles/Home.module.css";


export default function InclinedImage() {
  return (
    <div className="lg:w-[35%] sm300:w-[80%] lg:h-full sm300:h-[50%] lg:flex  flex-col items-center justify-center relative sm500:mb-10 sm300:mb-0 lg:mb-0">
    <img
      src="/images/I1.jpg"
      alt=""
      className={` absolute lg:top-[10%] sm300:top-[8%] sm500:top-0  lg:w-[65%] sm300:w-[65%] sm500:w-[70%] sm500:h-[70%] lg:h-[65%] sm300:h-[50%] lg:right-0 sm300:right-[5%] rounded-2xl z-[100]`}
    />
    <img
      src="/images/delivery.jpg"
      alt=""
      className={` w-[65%] lg:h-[65%] sm300:h-[50%]  absolute lg:bottom-[6%] sm500:w-[70%] sm500:h-[70%] sm500:bottom-0  sm300:bottom-[8%] lg:right-[20%] sm300:right-[27%] rounded-2xl   `}
    />
  </div>
  )
}
