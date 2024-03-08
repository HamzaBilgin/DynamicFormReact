import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ErrorModal from "../../UI/ErrorModal";
import AddFormItemRequestInfoModal from "../../UI/AddFormItemRequestInfoModal";
const AddCustomizedFormItem = ({ formStructureList, setFormStructureList }) => {
  const textRef = useRef();
  const radioRef = useRef();
  const dropdownRef = useRef();
  const textareaRef = useRef();
  const [newItemRequest, setNewItemRequest] = useState({});
  const [isShowError, setIsShowError] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  let overLimitMessage =
    "Limit of input you can add to the form: 6 There is an excess at the limit";

  const newDefaultItemRequest = {
    _id: uuidv4(),
  };

  function handleClick(ref) {
    if (formStructureList.length === 3) {
      setIsShowError(true);
      return;
    }
    switch (ref.current.id) {
      case "Text":
        setNewItemRequest({
          ...newDefaultItemRequest,
          type: "text",
          options: ["label"],
        });
        setIsShowModal(true);
        break;
      case "Radio":
        setNewItemRequest({
          ...newDefaultItemRequest,
          type: "radio",
          options: [
            "label",
            "option1",
            "option2",
            "option3",
            "option4",
            "option5",
            "option6",
          ],
        });
        setIsShowModal(true);
        break;
      case "Dropdown":
        setNewItemRequest({
          ...newDefaultItemRequest,
          type: "dropdown",
          options: [
            "label",
            "option1",
            "option2",
            "option3",
            "option4",
            "option5",
            "option6",
          ],
        });
        setIsShowModal(true);
        break;
      case "Textarea":
        setNewItemRequest({
          ...newDefaultItemRequest,
          type: "textarea",
          options: ["label", "rows"],
        });
        setIsShowModal(true);
        break;
    }
  }
  return (
    <div className=" h-[200px] p-5 grid grid-rows-3 grid-flow-col gap-4">
      <h1 className="text-center mb-4 col-span-2">
        Please select the type you want to add
      </h1>
      <button
        className="border-2 hover:bg-red-400 hover:text-white rounded-lg"
        onClick={() => handleClick(textRef)}
        id="Text"
        defaultValue={"Text"}
        ref={textRef}
      >
        Text1
      </button>
      <button
        className="border-2 hover:bg-red-400 hover:text-white rounded-lg"
        onClick={() => handleClick(radioRef)}
        id="Radio"
        defaultValue={"Radio"}
        ref={radioRef}
      >
        Radio
      </button>
      <button
        className="border-2 hover:bg-red-400 hover:text-white rounded-lg"
        onClick={() => handleClick(dropdownRef)}
        id="Dropdown"
        defaultValue={"Dropdown"}
        ref={dropdownRef}
      >
        Dropdown
      </button>
      <button
        className="border-2 hover:bg-red-400 hover:text-white rounded-lg"
        onClick={() => handleClick(textareaRef)}
        id="Textarea"
        defaultValue={"TextArea"}
        ref={textareaRef}
      >
        TextArea
      </button>

      <AddFormItemRequestInfoModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        newItemRequest={newItemRequest}
        formStructureList={formStructureList}
        setFormStructureList={setFormStructureList}
        setIsShowError={setIsShowError}
      />
      <ErrorModal
        isShowError={isShowError}
        setIsShowError={setIsShowError}
        message={overLimitMessage}
      />
    </div>
  );
};

export default AddCustomizedFormItem;
AddCustomizedFormItem.propTypes = {
  formStructureList: PropTypes.array,
  setFormStructureList: PropTypes.func,
};
