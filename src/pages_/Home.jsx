"use client";
import React from "react";
import CarouselHome from "../components/Home-component/Carousel";
import logo1 from "../assets/logo/logo-tulisan-gelap-03.png";
import logo2 from "../assets/logo/logo-tulisan-terang-03.png";
import gambar1 from "../assets/image/khaizel.jpg";
import Footer from "../components/Footer";
import Preview from "../components/Home-component/Preview";

const Home = () => {
  return (
    <>
      <div className="bgCustom flex flex-wrap h-auto w-auto justify-center  sm:px-28 gap-2 sm:mx-12 mx-2 sm:pt-16 pt-20">
        <CarouselHome />

        <div className="grid grid-cols-2 sm:gap-10  gap-3 sm:h-60 w-full mt-2">
          <div className="flex w-full h-24 sm:h-48 bg-cr-2 rounded-2xl items-center">
            <div className="flex sm:h-36 sm:w-36 h-16 w-16 sm:ml-8">
              <img className="h-full w-full" src={logo1} />
            </div>
            <div className="grid grid-cols-1 sm:h-36 w-auto h-[70px] sm:ml-5">
              <h2 className="text-[10px] sm:text-3xl font-myFont font-semibold text-cr-6">Khaizel at Store</h2>
              <span className="font-semibold text-4xl sm:text-8xl text-cr-6">20%</span>
            </div>
          </div>
          <div className="flex w-full h-24 sm:h-48 bg-cr-5 rounded-2xl items-center">
            <div className="flex sm:h-36 sm:w-36 h-16 w-16 sm:ml-8">
              <img className="h-full w-full" src={logo2} />
            </div>
            <div className="grid grid-cols-1 sm:h-36 w-auto h-[70px] sm:ml-5">
              <h2 className="text-[10px] sm:text-3xl font-myFont font-semibold text-cr-1">Khaizel at Shopee</h2>
              <span className="font-semibold text-4xl sm:text-8xl text-cr-1">10%</span>
            </div>
          </div>
        </div>

        <div className="flex h-40 sm:h-80  w-full sm:mb-6 justify-center items-center">
          <div className="flex flex-row-reverse h-full sm:h-72 w-full ">
            <div className="flex w-1/3 h-full justify-center items-center">
              <div className="h-28 w-28 sm:h-72 sm:w-72">
                <img className="w-full h-full rounded-xl" src={gambar1} />
              </div>
            </div>
            <div className="flex w-2/3 h-full justify-center items-center">
              <div className="flex flex-wrap h-28 w-56 sm:h-full sm:w-11/12">
                <p className="text-cr-6 text-[10px] sm:text-2xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat libero eius autem harum quis dolore officia dolor ipsum possimus ducimus laborum eveniet, voluptate, sunt consequuntur suscipit ab exercitationem blanditiis
                  assumenda illo omnis? Commodi voluptatem tempora laudantium maiores molestiae magni repellendus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Preview />
        <Footer />
      </div>
    </>
  );
};

export default Home;
