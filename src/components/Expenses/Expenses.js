import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import "./ExpensesFilter.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filtredYear, setFiltredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };
  

  const filtredExpenses = props.items.filter (expense => {
    return expense.date.toString().includes(filtredYear)
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filtredYear} onChangeFilter={filterChangeHandler} />

        <ExpensesList items={filtredExpenses}/>
        
      </Card>
    </div>
  );
};
export default Expenses;
