import { useState } from "react";
import FormWrapper from "./AddNewUser/FormWrapper";
import UserLists from "./ShowUsers/UserLists";

const UserRegistrationFormWrapper = () => {
  const [userList, setUserList] = useState([]);
  return (
    <div className="flex flex-col  mx-auto mt-6 w-[1400px]">
      <h1 className="text-center mb-4">UserRegistration</h1>
      <FormWrapper userList={userList} setUserList={setUserList} />
      <div className="shoppingListWrapper flex flex-col w-[1000px]  mx-auto mt-6">
        <h1 className="text-center mb-4">User List</h1>
      </div>
      <UserLists userList={userList} setUserList={setUserList} />
    </div>
  );
};

export default UserRegistrationFormWrapper;
