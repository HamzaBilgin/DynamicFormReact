import PropTypes from "prop-types";
import UserListItem from "./UserListItem";
const UserLists = ({ userList, setUserList }) => {
  console.log(userList);
  return (
    <>
      {" "}
      {userList.length === 0 ? (
        <p className="bg-red-300 text-center text-2xl ">No User In List</p>
      ) : (
        <table className="formStructureList  mt-[40px]">
          <thead>
            <tr className="border-b-2 border-red-500">
              <th className="w-[100px] overflow-hidden max-w-[100px] truncate">
                First Name
              </th>
              <th className="w-[100px] overflow-hidden max-w-[100px] truncate">
                Last Name
              </th>
              <th className="w-[100px] overflow-hidden max-w-[100px] truncate">
                Email
              </th>
              <th className="w-[200px] overflow-hidden max-w-[200px] truncate">
                Other Info
              </th>
              <th className="w-[100px] overflow-hidden max-w-[100px]"></th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item) => (
              <UserListItem
                key={item._id}
                item={item}
                userList={userList}
                setUserList={setUserList}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default UserLists;
UserLists.propTypes = {
  userList: PropTypes.array,
  setUserList: PropTypes.func,
};
