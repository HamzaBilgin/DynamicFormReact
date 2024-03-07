import React from "react";

const TextAreaItem = ({ item }) => {
  return (
    <div className="flex  p-2 mb-4 item-center w-full mx-auto rounded-lg">
      <button className="hover:text-rose-600">x</button>
      <label className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
        {item.label} :
      </label>
      <textarea
        rows={item.rows}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 sm:max-w-xs sm:text-sm sm:leading-6 pl-3 resize-none"
      ></textarea>
    </div>
  );
};

export default TextAreaItem;
