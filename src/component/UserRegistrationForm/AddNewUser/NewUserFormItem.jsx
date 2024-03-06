import PropTypes from "prop-types";
const NewUserFormItem = ({ data }) => {
  const { name, placeholder, label, type } = data;
  return (
    <div className="shoppingFormItem flex  justify-start p-2 mb-4 item-center w-full mx-auto rounded-lg ">
      <label className="block w-1/4 text-sm font-medium leading-6 text-gray-900 text-end pr-4">
        {label} :
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-3/4 pl-3 hover:bg-sky-700 group-hover:bg-slate-300 focus:bg-red-300 rounded-md sm:max-w-xs"
        name={name}
      />
    </div>
  );
};

export default NewUserFormItem;

NewUserFormItem.propTypes = {
  data: PropTypes.object,
};
