import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ErrorModal from "../../UI/ErrorModal";
const AvailableFormItem = ({ formStructureList, setFormStructureList }) => {
  const birthDateRef = useRef();
  const phoneNumberRef = useRef();
  const countryRef = useRef();
  const addressRef = useRef();

  const [isShowError, setIsShowError] = useState(false);
  let overLimitMessage =
    "Limit of input you can add to the form: 6 There is an excess at the limit";
  const newDefaultItemRequest = {
    _id: uuidv4(),
  };
  let newItemRequest = {};
  function handleClick(ref) {
    if (formStructureList.length === 3) {
      setIsShowError(true);
      return;
    }
    switch (ref.current.id) {
      case "BirthDate":
        newItemRequest = {
          ...newDefaultItemRequest,
          type: "text",
          label: "Birth Date",
        };
        break;
      case "PhoneNumber":
        newItemRequest = {
          ...newDefaultItemRequest,
          type: "text",
          label: "Phone Number",
        };
        break;
      case "Country":
        newItemRequest = {
          ...newDefaultItemRequest,
          type: "dropdown",
          label: "Country",
          options: ["UnitedStates", "Canada", "Mexico"],
        };
        break;
      case "Address":
        newItemRequest = {
          ...newDefaultItemRequest,
          type: "textarea",
          label: "Address",
          rows: 3,
        };
        break;
    }

    setFormStructureList([...formStructureList, newItemRequest]);
    newItemRequest = {};
  }
  return (
    <div className=" h-[200px] p-5 grid grid-rows-3 grid-flow-col gap-4">
      <h1 className="text-center mb-4 col-span-2">
        You can choose from the previously prepared fields below
      </h1>
      <button
        className="border-2 hover:bg-red-400 hover:text-white rounded-lg"
        ref={birthDateRef}
        onClick={() => handleClick(birthDateRef)}
        id="BirthDate"
      >
        Birth Date
      </button>
      <button
        className="border-2 hover:bg-red-400 hover:text-white rounded-lg"
        ref={phoneNumberRef}
        onClick={() => handleClick(phoneNumberRef)}
        id="PhoneNumber"
      >
        Phone Number
      </button>
      <button
        className="border-2 hover:bg-red-400 hover:text-white rounded-lg"
        ref={countryRef}
        onClick={() => handleClick(countryRef)}
        id="Country"
      >
        Country
      </button>
      <button
        className="border-2 hover:bg-red-400 hover:text-white rounded-lg"
        ref={addressRef}
        onClick={() => handleClick(addressRef)}
        id="Address"
      >
        Address
      </button>
      <ErrorModal
        isShowError={isShowError}
        setIsShowError={setIsShowError}
        message={overLimitMessage}
      />
    </div>
  );
};

export default AvailableFormItem;
AvailableFormItem.propTypes = {
  formStructureList: PropTypes.array,
  setFormStructureList: PropTypes.func,
};
