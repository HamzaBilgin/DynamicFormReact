import PropTypes from "prop-types";
import { useEffect, useState } from "react";
const RadioItem = ({
  item,
  setFormStructureList,
  formStructureList,
  getir,
}) => {
  function handleDeleteItem() {
    setFormStructureList(
      formStructureList.filter((selectedItem) => selectedItem._id !== item._id)
    );
  }
  const [selectedOption, setSelectedOption] = useState();
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    getir.current.value = selectedOption;
  }, [selectedOption, getir]);
  return (
    <div className="flex  p-2 mb-4 item-center w-full mx-auto rounded-lg ">
      <button
        className="hover:text-rose-600"
        type="button"
        onClick={handleDeleteItem}
      >
        x
      </button>
      <div className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
        {item.label} :
      </div>
      <div className="flex w-3/4">
        {item.options.map((item, index) => (
          <div className="w-1/6" key={index}>
            <input
              type="radio"
              name={item.label}
              value={item}
              ref={getir}
              onChange={handleOptionChange}
            />
            <label className="pl-1">{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioItem;
RadioItem.propTypes = {
  item: PropTypes.object,
  formStructureList: PropTypes.array,
  setFormStructureList: PropTypes.func,
  getir: PropTypes.object,
};
