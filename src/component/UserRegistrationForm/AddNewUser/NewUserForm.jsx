import React from "react";
import { defaultFormStructureDatas } from "../../../data/DefaultFormStructureDatas.js";
import NewUserFormItem from "./NewUserFormItem.jsx";
const NewUserForm = () => {
  return (
    <form className="newUserForm col-span-2 bg-emerald-400">
      {defaultFormStructureDatas.map((data, index) => (
        <NewUserFormItem data={data} key={index} />
      ))}
      <div className="aa bg-red-400 flex  p-2 mb-4 item-center w-full mx-auto rounded-lg ">
        <div className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
          Gender :
        </div>
        <div className="flex w-3/4">
          <div className="w-1/6">
            <input type="radio" name="gender" value="Erkek" />
            <label className="pl-1">Erkek</label>
          </div>
          <div className="w-1/6">
            <input type="radio" name="gender" value="Kadın" />
            <label className="pl-1">Kadın</label>
          </div>
        </div>
      </div>
      {/* <div className="aa bg-red-400 flex  p-2 mb-4 item-center w-full mx-auto rounded-lg ">
        <div className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
          Gender :
        </div>
        <div className="flex w-3/4">
          <div className="w-1/6">
            <input type="checkbox" name="city1" value="Erkek" />
            <label className="pl-1">İstanbul</label>
          </div>
          <div className="w-1/6">
            <input type="checkbox" name="city2" value="Kadın" />
            <label className="pl-1">Ankara</label>
          </div>
        </div>
      </div> */}
      <div className="bg-red-400 flex  p-2 mb-4 item-center w-full mx-auto rounded-lg">
        <label className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
          Doğum Tarihi :
        </label>
        <input type="text" name="date" value="" className="pl-3 rounded-md" />
      </div>
      <div className="bg-red-400 flex  p-2 mb-4 item-center w-full mx-auto rounded-lg">
        <label className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
          Phone Number :
        </label>
        <input type="text" name="tel" className="pl-3 rounded-md" />
      </div>

      <div>
        <div className="bg-red-400 flex  p-2 mb-4 item-center w-full mx-auto rounded-lg">
          <label className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
            Country :
          </label>

          <select
            id="country"
            name="country"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 sm:max-w-xs sm:text-sm sm:leading-6 pl-3"
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
        <div className="bg-red-400 flex  p-2 mb-4 item-center w-full mx-auto rounded-lg">
          <label
            for="about"
            className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4"
          >
            Adress :
          </label>

          <textarea
            id="about"
            name="about"
            rows="3"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 sm:max-w-xs sm:text-sm sm:leading-6 pl-3"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="group-hover:bg-emerald-400 px-6 py-2 rounded-lg mb-4"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default NewUserForm;
