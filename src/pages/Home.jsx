import React from "react";
import CarouselHome from "../components/Home-component/Carousel";
import logo1 from "../assets/logo/logo-tulisan-gelap-03.png";
import logo2 from "../assets/logo/logo-tulisan-terang-03.png";

const Home = () => {
  return (
    <>
      <div className="bgCustom flex flex-wrap h-auto w-auto justify-center  sm:px-20 gap-2 sm:mx-12 mx-2 sm:pt-16 pt-20">
        <CarouselHome/>
        <div className="grid sm:grid-cols-2 sm:gap-10  gap-3 h-60 w-full mt-2">
          <div className="flex w-full h-48 bg-cr-2 rounded-2xl items-center">
            <div className="flex h-36 w-36 sm:ml-8">
              <img className="h-full w-full" src={logo1}/>
            </div>
            <div className="grid grid-cols-1 h-36 w-auto ml-5">
              <h2 className="text-2xl sm:text-3xl font-myFont font-semibold text-cr-6">Khaizel at Store</h2>
              <span className="font-semibold text-7xl sm:text-8xl text-cr-6">20%</span>
            </div>
          </div>
          <div className="flex w-full h-48 bg-cr-5 rounded-2xl items-center">
          <div className="flex h-36 w-36 sm:ml-8">
              <img className="h-full w-full" src={logo2}/>
            </div>
            <div className="grid grid-cols-1 h-36 w-auto ml-5">
              <h2 className="text-2xl sm:text-3xl font-myFont font-semibold text-cr-1">Khaizel at Store</h2>
              <span className="font-semibold text-7xl sm:text-8xl text-cr-1">10%</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
