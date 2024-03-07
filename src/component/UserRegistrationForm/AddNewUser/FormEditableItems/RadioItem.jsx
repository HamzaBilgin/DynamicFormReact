import React from "react";

const RadioItem = ({ item }) => {
  return (
    <div className="flex  p-2 mb-4 item-center w-full mx-auto rounded-lg ">
      <button className="hover:text-rose-600">x</button>
      <div className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
        {item.label} :
      </div>
      <div className="flex w-3/4">
        {item.options.map((item, index) => (
          <div className="w-1/6" key={index}>
            <input type="radio" name="gender" value={item} />
            <label className="pl-1">{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioItem;
