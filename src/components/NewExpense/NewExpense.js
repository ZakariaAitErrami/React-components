import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
const NewExpense = (props) => {
    
    const saveExpenseDataHandler = (entredExpenseData) => {
        const expenseData = {
            ...entredExpenseData,
            id: Math.random().toString
        };
        props.onAddExpense(expenseData)
    } ;

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );    
}
export default NewExpense;