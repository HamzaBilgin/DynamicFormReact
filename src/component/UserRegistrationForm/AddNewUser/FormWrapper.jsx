import { useState } from "react";
import AddCustomizedFormItem from "./AddCustomizedFormItem";
import AvailableFormItem from "./AvailableFormItem";
import NewUserForm from "./NewUserForm";
import SavedFormStructure from "./SavedFormStructure";

const FormWrapper = () => {
  const [requestNewFormItem, setRequestNewFormItem] = useState("");
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

      <NewUserForm formStructureList={formStructureList} />
      <SavedFormStructure />
    </div>
  );
};

export default FormWrapper;
