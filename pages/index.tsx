import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import LandingSection from "../containers/LandingSection";
import AboutSection from "../containers/AboutSection";
import ThirdSection from "../containers/ThirdSection";
import ContactSection from "../containers/ContactSection";
import Footer from "../components/Footer";
import { LoaderContext } from "../contexts/LoadingContexts";
import { useContext, useEffect } from "react";
import { images } from "../constants/constants";
import Seo from "../components/Seo";

export default function Home() {
  const { loading, setLoading } = useContext(LoaderContext);

  const cacheImages = async () => {
    setLoading(true);
    const promises = images.map((src) => {
      return new Promise<void>(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });
    await Promise.all(promises).then(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    cacheImages();
  }, []);

  const Logo = () => {
    return (
      <svg
        width="100"
        height="100"
        viewBox="0 0 1145 1161"
        fill="none"
        className="animate-pulse scale-[0.5] lg:scale-[1.3]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1094.41 283.519C803.058 26.7437 442.804 285.237 442.804 285.237C442.804 285.237 162.002 285.237 0 563.482C0 333.043 143.651 149.502 351.554 56.3717C474.055 1.50506 584.056 -0.737353 617.406 0.121428C646.607 0.88479 846.809 8.90014 997.21 154.702C1034.41 190.771 1054.41 221.687 1094.41 283.519Z"
          fill="#124A88"
        />
        <path
          d="M142.203 944.782C119.352 922.597 86.902 885.764 63.0018 833.14C50.8016 806.327 1.60104 698.073 49.1515 576.841C104.702 435.19 248.454 387.623 268.204 381.421C268.204 381.421 477.006 276.649 772.209 381.421C1067.41 486.192 1107.01 345.352 1108.81 312.718C1108.86 311.812 1109.06 310.333 1109.66 310.237C1114.11 309.474 1150.61 384.427 1143.01 462.146C1132.01 574.504 1033.96 638.626 1027.81 642.491C978.761 673.502 932.111 678.369 864.01 685.43C763.709 695.878 655.208 681.995 655.208 681.995C655.208 681.995 381.605 632.185 378.005 798.789C374.405 965.393 583.807 987.721 583.807 987.721C583.807 987.721 790.209 1034.1 945.011 855.469L1080.01 986.003C1080.01 986.003 934.211 1195.55 547.207 1156.04C500.306 1151.27 396.855 1133.57 304.454 1057.85C241.053 1005.95 199.203 939.2 187.103 887.911C178.253 850.363 180.003 821.117 180.003 821.117C180.003 821.117 180.603 811.146 189.003 759.285C221.003 677.987 270.754 632.328 297.004 611.574C382.505 544.017 479.206 535.095 543.607 529.131C613.107 522.69 670.958 529.274 709.208 536.002C671.008 517.824 607.407 493.444 526.007 489.246C478.356 486.813 310.454 478.177 201.103 597.166C117.602 688.006 97.0521 821.785 142.203 944.782Z"
          fill="#007148"
        />
      </svg>
    );
  };

  return (
    <div className={`min-h-screen h-auto w-full  flex flex-col items-center justify-start ${styles.main}`}>
      <Seo
        title="Home"
        description="Environmentally friendly disposable packages use sustainable
      materials, biodegradability, and reduced waste to minimize
      environmental impact. They promote eco-conscious consumer choices
      and support a cleaner, greener planet."
        image="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/logo1.svg?alt=media&token=a5ec18b6-e581-4026-b253-8a3b1b7c813a&_gl=1*1tq8pep*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5OTAyODY5Ni41LjEuMTY5OTAyODcyNC4zMi4wLjA."
      />
      {loading ? (
        <div className="fixed top-0 z-[100] w-full h-full bg-white flex flex-col items-center justify-center ">
          {/* <img
            src="https://firebasestorage.googleapis.com/v0/b/envropack-14c71.appspot.com/o/logo1.svg?alt=media&token=a5ec18b6-e581-4026-b253-8a3b1b7c813a&_gl=1*1tq8pep*_ga*MTg4NzMzNTA0LjE2OTg5MjkzMjM.*_ga_CW55HF8NVT*MTY5OTAyODY5Ni41LjEuMTY5OTAyODcyNC4zMi4wLjA."
            alt=""
            className="w-[160px] sm:w-[200px] animate-pulse h-[100px] "
          /> */}
          {/* <h1 className="text-white text-[1rem] sm:text-[1.2rem] animate-pulse text-center mt-1">
            Getting Everything Ready
            <br /> Please wait..
          </h1> */}
          <Logo />
        </div>
      ) : (
        <>
          <LandingSection />
          <AboutSection />
          <ThirdSection />
          <ContactSection />
          <Footer />
        </>
      )}
      {/* <LandingSection />
    <AboutSection />
    <ThirdSection />
    <ContactSection />
    <Footer /> */}
    </div>
  );
}
