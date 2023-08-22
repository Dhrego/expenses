import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const getYear = (year) => {
    setSelectedYear(year);
    console.log(year);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onGetYear={getYear} />

        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
