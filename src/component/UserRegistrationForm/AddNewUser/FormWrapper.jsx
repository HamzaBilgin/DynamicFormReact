import AvailableFormItem from "./AvailableFormItem";
import NewUserForm from "./NewUserForm";
import SavedFromStructure from "./SavedFromStructure";

const FormWrapper = () => {
  return (
    <div className="grid grid-col-4 grid-flow-col gap-4 px-9 py-7">
      <AvailableFormItem />
      <NewUserForm />
      <SavedFromStructure />
    </div>
  );
};

export default FormWrapper;
