import React from "react";

const TextItem = ({ item }) => {
  return (
    <div className="flex  p-2 mb-4 item-center w-full mx-auto rounded-lg">
      <button className="hover:text-rose-600">x</button>
      <label className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
        {item.label} :
      </label>
      <input
        type="text"
        name="date"
        className="pl-3 rounded-md border border-sky-500"
      />
    </div>
  );
};

export default TextItem;
