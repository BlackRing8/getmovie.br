import React from "react";
import CarouselHome from "../components/Home-component/Carousel";

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap h-auto w-auto justify-center dark:bg-black gap-2 mx-3 sm:pt-20 pt-14">
        <CarouselHome/>
      </div>
    </>
  );
};

export default Home;
