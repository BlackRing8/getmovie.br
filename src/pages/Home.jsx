import React from "react";
import CarouselHome from "../components/Home-component/Carousel";

const Home = () => {
  return (
    <>
      <div className="flex flex-wrap h-96 w-auto justify-center gap-2 mx-3 pt-20">
        <CarouselHome/>
      </div>
    </>
  );
};

export default Home;
