import React from "react";

const Item = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap w-auto h-screen pt-[60px] ml-2 mr-2">
      <div className="flex bgCustom2 w-44 h-60 rounded-[16px]">
        <div className="absolute flex w-20 h-8 bg-cr-2 ml-3 mt-3 rounded-lg items-center justify-center">
          <label className="font-semibold">ON SALE</label>
        </div>
        <div className="flex w-44 h-60 rounded-[16px] items-end">
          <div className="flex grid-cols-1 bg-cr-3 w-44 h-16 rounded-b-[16px] justify-center text-center">
            <a className="mt-1" href="" id="test">
              <p className="font-light text-white">NAMA PRODUK</p>
              <span className="text-lg font-bold text-white">Rp.75.000,00</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex bgCustom2 w-44 h-60 rounded-[16px]">
        <div className="absolute flex w-20 h-8 bg-cr-2 ml-3 mt-3 rounded-lg items-center justify-center">
          <label className="font-semibold">ON SALE</label>
        </div>
        <div className="flex w-44 h-60 rounded-[16px] items-end">
          <div className="flex grid-cols-1 bg-cr-3 w-44 h-16 rounded-b-[16px] justify-center text-center">
            <a className="mt-1" href="" id="test">
              <p className="font-light text-white">NAMA PRODUK</p>
              <span className="text-lg font-bold text-white">Rp.75.000,00</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex bgCustom2 w-44 h-60 rounded-[16px]">
        <div className="absolute flex w-20 h-8 bg-cr-2 ml-3 mt-3 rounded-lg items-center justify-center">
          <label className="font-semibold">ON SALE</label>
        </div>
        <div className="flex w-44 h-60 rounded-[16px] items-end">
          <div className="flex grid-cols-1 bg-cr-3 w-44 h-16 rounded-b-[16px] justify-center text-center">
            <a className="mt-1" href="" id="test">
              <p className="font-light text-white">NAMA PRODUK</p>
              <span className="text-lg font-bold text-white">Rp.75.000,00</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex bgCustom2 w-44 h-60 rounded-[16px]">
        <div className="absolute flex w-20 h-8 bg-cr-2 ml-3 mt-3 rounded-lg items-center justify-center">
          <label className="font-semibold">ON SALE</label>
        </div>
        <div className="flex w-44 h-60 rounded-[16px] items-end">
          <div className="flex grid-cols-1 bg-cr-3 w-44 h-16 rounded-b-[16px] justify-center text-center">
            <a className="mt-1" href="" id="test">
              <p className="font-light text-white">NAMA PRODUK</p>
              <span className="text-lg font-bold text-white">Rp.75.000,00</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
