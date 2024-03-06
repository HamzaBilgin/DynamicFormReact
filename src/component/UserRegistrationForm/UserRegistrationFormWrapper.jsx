import React from "react";
import FormWrapper from "./AddNewUser/FormWrapper";

const UserRegistrationFormWrapper = () => {
  return (
    <div className="flex flex-col  mx-auto mt-6">
      <h1 className="text-center mb-4">UserRegistration</h1>
      <FormWrapper />
    </div>
  );
};

export default UserRegistrationFormWrapper;
