import PropTypes from "prop-types";
import { useState, useRef } from "react";
import ReactDom from "react-dom";
import CloseTimer from "../UI/CloseTimer";
import ErrorModal from "./ErrorModal";

const AddFormItemRequestInfoModal = ({
  isShowModal,
  setIsShowModal,
  newItemRequest,
  formStructureList,
  setFormStructureList,
}) => {
  if (!isShowModal) {
    return;
  }
  let errorMessage = "All fields must be filled and free of blank characters.";
  ("Limit of input you can add to the form: 6 There is an excess at the limit");
  const [isShowError, setIsShowError] = useState(false);
  let newItemRequestRevize = { type: newItemRequest.type };
  const inputRefs = newItemRequest.options.map(() => useRef());
  const closeMessage =
    "After 35 seconds, your transactions will be closed without being recorded.Remaining Time:";
  function aa() {
    inputRefs.map((item) => {
      let name2 = item.current.name;
      if (name2 === "label") {
        newItemRequestRevize = {
          ...newItemRequestRevize,
          [name2]: item.current.value,
          options: [],
        };
      } else {
        newItemRequestRevize = {
          ...newItemRequestRevize,
          options: [...newItemRequestRevize.options, item.current.value],
        };
      }
    });
    const isFormValid = Object.values(newItemRequestRevize.options).every(
      (value) => value.trim() !== ""
    );
    if (!isFormValid) {
      setIsShowError(true);
      return;
    }
    setFormStructureList([...formStructureList, newItemRequestRevize]);
    newItemRequestRevize = {};
    setIsShowModal(false);
  }

  return ReactDom.createPortal(
    <div className="error-modal">
      <div className="flex justify-center items-center h-screen absolute">
        <div>
          <div className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
            <div
              className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              onClick={() => setIsShowModal(false)}
            ></div>
            <div className="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50">
              <div className="bg-indigo-500 text-white px-4 py-2 flex justify-between">
                <h2 className="text-lg font-semibold">Item Add Modal</h2>
              </div>
              <form action="">
                {newItemRequest.options.map((item, index) => (
                  <div
                    key={index}
                    className="flex  p-2 mb-4 item-center w-full mx-auto rounded-lg"
                  >
                    <label className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
                      {item} :
                    </label>
                    <input
                      type="text"
                      name={item}
                      className="pl-3 rounded-md border border-sky-500"
                      ref={inputRefs[index]}
                    />
                  </div>
                ))}
              </form>
              <CloseTimer
                closeTime={35}
                isShow={setIsShowModal}
                closeMessage={closeMessage}
              />
              <div className="border-t px-4 py-2 flex justify-end">
                <button
                  className="px-3 py-1 bg-indigo-500 text-white  rounded-md w-full sm:w-auto mr-4"
                  onClick={aa}
                >
                  save{" "}
                </button>
                <button
                  className="px-3 py-1 bg-indigo-500 text-white  rounded-md w-full sm:w-auto"
                  onClick={() => setIsShowModal(false)}
                >
                  Kapat{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ErrorModal
        isShowError={isShowError}
        setIsShowError={setIsShowError}
        message={errorMessage}
      />
    </div>,
    document.getElementById("modal")
  );
};

export default AddFormItemRequestInfoModal;

AddFormItemRequestInfoModal.propTypes = {
  isShowModal: PropTypes.bool,
  setIsShowModal: PropTypes.func,
  message: PropTypes.string,
  formStructureList: PropTypes.array,
  setFormStructureList: PropTypes.func,
};
