import React from "react";
import { useState } from "react";
import { defaultFormStructureDatas } from "../../../data/DefaultFormStructureDatas.js";
import NewUserFormItem from "./NewUserFormItem.jsx";
import RadioItem from "./FormEditableItems/RadioItem.jsx";
import TestItem from "./FormEditableItems/TextItem.jsx";
import DropdownItem from "./FormEditableItems/DropdownItem.jsx";
import TextAreaItem from "./FormEditableItems/TextAreaItem.jsx";
import ErrorModal from "../../UI/ErrorModal";
const NewUserForm = ({ formStructureList }) => {
  const [isShowError, setIsShowError] = useState(false);
  return (
    <form className="newUserForm col-span-2 bg-emerald-400 ">
      {defaultFormStructureDatas.map((data, index) => (
        <NewUserFormItem data={data} key={index} />
      ))}
      {formStructureList.map((item, index) => {
        switch (item.type) {
          case "text":
            return <TestItem key={item._id} item={item} />; // Added return statement
          case "dropdown":
            return <DropdownItem key={item._id} item={item} />; // Added return statement
          case "radio":
            return <RadioItem key={item._id} item={item} />; // Added return statement
          case "textarea":
            return <TextAreaItem key={item._id} item={item} />;
          default:
            return null;
        }
      })}
      <div className="flex justify-end">
        <button
          type="submit"
          className="group-hover:bg-emerald-400 border-2 hover:bg-red-400 hover:text-white px-6 py-2 rounded-lg mb-4 mr-4"
        >
          Save
        </button>
      </div>
      <ErrorModal
        isShowError={isShowError}
        setIsShowError={setIsShowError}
        message="Tüm alanlar dolu ve boş karakter içermemelidir."
      />
    </form>
  );
};

export default NewUserForm;
