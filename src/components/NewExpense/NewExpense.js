import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditable(false);
  };
  const [isEditable, setIsEditable] = useState(false);

  const editHandler = () => {
    setIsEditable(true);
  };
  const cancelEditHandler = () => {
    setIsEditable(false);
  };

  return (
    <div className="new-expense">
      {isEditable ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditHandler}
        />
      ) : (
        <button onClick={editHandler}>Add New Expense</button>
      )}
    </div>
  );
};
export default NewExpense;
