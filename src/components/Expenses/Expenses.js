import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import "./ExpensesFilter.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filtredYear, setFiltredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filtredYear} onChangeFilter={filterChangeHandler} />

        {props.items.map((expense) => (
          <ExpenseItem
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
