import PropTypes from "prop-types";
const UserListItem = ({ item, userList, setUserList }) => {
  const itemProperties = Object.entries(item);
  function handleDeleteItem() {
    setUserList(
      userList.filter((selectedItem) => selectedItem._id !== item._id)
    );
  }
  return (
    <tr className="h-[40px] text-center border-b-2 border-black-500">
      <td className="max-w-[500px] truncate">{item.firstName}</td>
      <td className="max-w-[500px] truncate">{item.lastName}</td>
      <td className="max-w-[500px] truncate">{item.email}</td>
      <td className="max-w-[500px] truncate text-left">
        {itemProperties.map((item2, index) => {
          if (index > 3) {
            return (
              <div>
                {item2[0]} : {item2[1]}{" "}
              </div>
            );
          }
        })}
      </td>

      <td className="flex item-center h-[40px]">
        <button className="m-1 px-2 bg-red-600" onClick={handleDeleteItem}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserListItem;
UserListItem.propTypes = {
  item: PropTypes.object,
  userList: PropTypes.array,
  setUserList: PropTypes.func,
};
