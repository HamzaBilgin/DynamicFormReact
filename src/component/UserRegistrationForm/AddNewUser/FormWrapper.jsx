import PropTypes from "prop-types";
import { useState } from "react";
import AddCustomizedFormItem from "./AddCustomizedFormItem";
import AvailableFormItem from "./AvailableFormItem";
import NewUserForm from "./NewUserForm";
import SavedFormStructure from "./SavedFormStructure";

const FormWrapper = ({ userList, setUserList }) => {
  const [formStructureList, setFormStructureList] = useState([]);

  return (
    <div className="grid grid-cols-4 gap-4 px-9 py-7">
      <div className="flex flex-col">
        <AddCustomizedFormItem
          formStructureList={formStructureList}
          setFormStructureList={setFormStructureList}
        />
        <AvailableFormItem
          formStructureList={formStructureList}
          setFormStructureList={setFormStructureList}
        />
      </div>

      <NewUserForm
        formStructureList={formStructureList}
        setFormStructureList={setFormStructureList}
        userList={userList}
        setUserList={setUserList}
      />
      <SavedFormStructure />
    </div>
  );
};

export default FormWrapper;

FormWrapper.propTypes = {
  userList: PropTypes.array,
  setUserList: PropTypes.func,
};
