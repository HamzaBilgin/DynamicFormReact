import React from "react";
import { useRef } from "react";
import PropTypes from "prop-types";
import ReactDom from "react-dom";
import TextItem from "../UserRegistrationForm/AddNewUser/FormEditableItems/TextItem";

const AddFormItemRequestInfoModal = ({
  isShowModal,
  setIsShowModal,
  newItemRequest,
}) => {
  if (!isShowModal) {
    return;
  }
  const inputRefs = newItemRequest.options.map(() => useRef());

  newItemRequest.options.map((item) => {
    console.log(item);
    return item;
  });
  function aa() {
    inputRefs.map((item) => console.log(item));
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
              {/* <TextItem /> */}
              {/* <div className="p-4 text-black flex  justify-start p-2 mb-4 item-center w-full mx-auto rounded-lg ">
                <label className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
                  Araba :
                </label>
                <input
                  type="text"
                  placeholder="deneme"
                  className="w-3/4 pl-3 rounded-md sm:max-w-xs  border border-sky-500"
                  name="deneme"
                />
                
              </div> */}

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
    </div>,
    document.getElementById("modal")
  );
};

export default AddFormItemRequestInfoModal;

AddFormItemRequestInfoModal.propTypes = {
  isShowError: PropTypes.bool,
  setIsShowError: PropTypes.func,
  message: PropTypes.string,
};
