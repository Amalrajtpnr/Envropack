import React from "react";
import styles from "../styles/Home.module.css";

export default function Quality() {
  return (
    <div
      className={`${styles.quality} w-full lg:h-[60%] flex lg:flex-row sm300:flex-col sm500:flex-row items-center lg:justify-between sm300:justify-between lg:mt-8 sm500:mt-10 sm300:mt-8   `}
    >
      <div className="lg:w-[15%] sm300:w-[30%] sm500:w-[20%] h-full flex flex-col items-center justify-start ">
        <img
          className={`${styles.commitmentImage} lg:w-[60%] min-h-[80px] min-w-[120px] lg:min-h-[110px] lg:min-w-[110px] object-fill`}
          src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/list.jpg?alt=media&token=9ad4eaac-32a9-4dbc-8813-b3f7acf40e53&_gl=1*1gsdeuw*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5OTAyODY5Ni41LjEuMTY5OTAyODgzMC4xMy4wLjA."
          alt=""
        />
        <h1
          className={`${styles.sub} lg:text-[1.2vw] sm300:text-[12px] sm500:text-[18px] text-[#004E2B] text-center font-normal lg:leading-6  sm500:leading-6 sm300:leading-4  lg:mt-6 sm300:mt-2  `}
        >
          Commitment to Quality
        </h1>
      </div>
      <div className="lg:w-[15%] sm300:w-[30%] sm500:w-[20%] h-full flex flex-col items-center justify-start sm300:mt-6 lg:mt-0">
        <img
          className={`${styles.image} lg:w-[60%] min-h-[80px] min-w-[120px] lg:min-h-[110px] lg:min-w-[110px] object-fill`}
          src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/hygiene.jpg?alt=media&token=26a8a56d-1dcd-4549-973c-bad82c95a2ea&_gl=1*1y8laom*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5OTAyODY5Ni41LjEuMTY5OTAyODkwMS41NC4wLjA."
          alt=""
        />
        <h1
          className={`${styles.sub} lg:text-[1.2vw] sm300:text-[12px] sm500:text-[18px] text-[#004E2B] text-center font-normal lg:leading-6 sm500:leading-6 sm300:leading-4  lg:mt-6 sm300:mt-2  `}
        >
          Uncompromising Hygiene
        </h1>
      </div>{" "}
      <div className="lg:w-[15%] sm300:w-[30%] sm500:w-[20%] h-full flex flex-col items-center lg:justify-start sm500:justify-start  sm300:mt-6  lg:mt-0">
        <img
          className={`${styles.image} lg:w-[60%] min-h-[80px] min-w-[120px] lg:min-h-[110px] lg:min-w-[110px] object-fill`}
          src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/earth.jpg?alt=media&token=14755934-8317-430f-83a6-f46c00f1337a&_gl=1*cawd69*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5OTAyODY5Ni41LjEuMTY5OTAyODkyOC4yNy4wLjA."
          alt=""
        />
        <h1
          className={`${styles.sub} lg:text-[1.2vw] sm300:text-[12px] sm500:text-[18px] text-[#004E2B] text-center font-normal lg:leading-6 sm500:leading-6 sm300:leading-4  lg:max-w-[100%] lg:mt-6 sm300:mt-2 sm500: `}
        >
          Safe and Environmentally Friendly
        </h1>
      </div>{" "}
      <div className="lg:w-[15%] sm300:w-[30%] sm500:w-[20%] h-full flex flex-col items-center justify-start  sm300:mt-6 lg:mt-0">
        <img
          className={`${styles.image} lg:w-[60%] min-h-[120px] min-w-[120px] lg:min-h-[110px] lg:min-w-[110px] object-fill`}
          src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/review.jpg?alt=media&token=a651ca6a-4da6-43e4-a105-e23bfc57c663&_gl=1*13g85v8*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5OTAyODY5Ni41LjEuMTY5OTAyODk1Ni42MC4wLjA."
          alt=""
        />
        <h1
          className={`${styles.sub} lg:text-[1.2vw] sm300:text-[12px] sm500:text-[18px] text-[#004E2B] text-center font-normal lg:leading-6 sm500:leading-6 sm300:leading-4 lg:max-w-[80%] lg:mt-6 sm300:mt-2     `}
        >
          Customer Delight
        </h1>
      </div>{" "}
    </div>
  );
}
