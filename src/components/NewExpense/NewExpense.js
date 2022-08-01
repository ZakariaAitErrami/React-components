import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) => {

    
    const [showAddButton, setShowAddButton]= useState(true)

    const saveExpenseDataHandler = (entredExpenseData) => {
        const expenseData = {
            ...entredExpenseData,
            id: Math.random().toString
        };
        props.onAddExpense(expenseData)
    } ;

    const hideAddButtonHandler = () => {
        setShowAddButton(false)
    }
    const displayAddButtonHandler = () => {
        setShowAddButton(true)
    }
    // let display = showAdd ? ( <AddButton /> && setShowForm(false)) 
    //     : (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler})
    
    return (
        <div>
        <div className="new-expense">
           {showAddButton && <button onClick={hideAddButtonHandler}>Add New Expense</button> }
            {!showAddButton && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={displayAddButtonHandler}/>}
        </div>
        </div>
    );    
}
export default NewExpense;