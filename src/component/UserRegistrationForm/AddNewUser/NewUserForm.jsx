import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { defaultFormStructureDatas } from "../../../data/DefaultFormStructureDatas.js";
import NewUserFormItem from "./NewUserFormItem.jsx";
import RadioItem from "./FormEditableItems/RadioItem.jsx";
import TestItem from "./FormEditableItems/TextItem.jsx";
import DropdownItem from "./FormEditableItems/DropdownItem.jsx";
import TextAreaItem from "./FormEditableItems/TextAreaItem.jsx";
import ErrorModal from "../../UI/ErrorModal";
const NewUserForm = ({
  formStructureList,
  setFormStructureList,
  userList,
  setUserList,
}) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const aRef = useRef();
  const bRef = useRef();
  const cRef = useRef();
  let userListItemRequest2 = { _id: uuidv4() };
  const [isShowError, setIsShowError] = useState(false);
  const [inputDefaultRefs, setInputDefaultRefs] = useState([
    firstNameRef,
    lastNameRef,
    emailRef,
  ]);
  const [inputNewRefs, setInputNewRefs] = useState([aRef, bRef, cRef]);
  function handleSubmit(e) {
    e.preventDefault();

    inputDefaultRefs.map((item, index) => {
      userListItemRequest2 = {
        ...userListItemRequest2,
        [item.current.name]: item.current.value,
      };
    });
    inputNewRefs.map((item, index) => {
      if (index < formStructureList.length) {
        userListItemRequest2 = {
          ...userListItemRequest2,
          [item.current.name]: item.current.value,
        };
      }
    });

    const isFormValid = Object.values(userListItemRequest2).every(
      (value) => value.trim() !== ""
    );
    if (!isFormValid) {
      setIsShowError(true);
      return;
    }
    setUserList([userListItemRequest2, ...userList]);
    inputDefaultRefs.map((item, index) => {
      item.current.value = "";
      return item;
    });
    inputNewRefs.map((item, index) => {
      item.current.value = "";
      return item;
    });
  }
  return (
    <form className="newUserForm col-span-2  " onSubmit={handleSubmit}>
      {defaultFormStructureDatas.map((data, index) => (
        <NewUserFormItem
          data={data}
          key={index}
          getir={inputDefaultRefs[index]}
        />
      ))}
      {formStructureList.map((item, index) => {
        switch (item.type) {
          case "text":
            return (
              <TestItem
                key={item._id}
                item={item}
                formStructureList={formStructureList}
                setFormStructureList={setFormStructureList}
                getir={inputNewRefs[index]}
              />
            );
          case "dropdown":
            return (
              <DropdownItem
                key={item._id}
                item={item}
                formStructureList={formStructureList}
                setFormStructureList={setFormStructureList}
                getir={inputNewRefs[index]}
              />
            );
          case "radio":
            return (
              <RadioItem
                key={item._id}
                item={item}
                formStructureList={formStructureList}
                setFormStructureList={setFormStructureList}
                getir={inputNewRefs[index]}
              />
            );
          case "textarea":
            return (
              <TextAreaItem
                key={item._id}
                item={item}
                formStructureList={formStructureList}
                setFormStructureList={setFormStructureList}
                getir={inputNewRefs[index]}
              />
            );
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
        message="All fields must be filled and free of blank characters."
      />
    </form>
  );
};

export default NewUserForm;

NewUserForm.propTypes = {
  formStructureList: PropTypes.array,
  setFormStructureList: PropTypes.func,
  userList: PropTypes.array,
  setUserList: PropTypes.func,
};
