import PropTypes from "prop-types";
const TextItem = ({ item, setFormStructureList, formStructureList, getir }) => {
  function handleDeleteItem() {
    setFormStructureList(
      formStructureList.filter((selectedItem) => selectedItem._id !== item._id)
    );
  }
  return (
    <div className="flex  p-2 mb-4 item-center w-full mx-auto rounded-lg">
      <button
        className="hover:text-rose-600"
        type="button"
        onClick={handleDeleteItem}
      >
        x
      </button>
      <label className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
        {item.label} :
      </label>
      <input
        name={item.label}
        type="text"
        className="pl-3 rounded-md border border-sky-500"
        ref={getir}
      />
    </div>
  );
};

export default TextItem;
TextItem.propTypes = {
  item: PropTypes.object,
  formStructureList: PropTypes.array,
  setFormStructureList: PropTypes.func,
  getir: PropTypes.object,
};
