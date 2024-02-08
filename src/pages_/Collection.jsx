import React from "react";
import Item from "../components/Collection-component/Item";

const Collection = () => {
  return (
    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap w-auto h-screen pt-[60px] ml-2 mr-2">
      <Item />
    </div>
  );
};

export default Collection;
