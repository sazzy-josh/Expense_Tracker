import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Expense = () => {
    const {expenses} = useContext(GlobalContext)
    
    const amount = expenses.map((expense) => {
        return expense.amount
    })
    const filtered = amount.filter((expense) => {
        return expense > 0
    })
    const notFiltered = amount.filter((expense) => {
         return expense < 0
    })
    const income = filtered.reduce((prev,currentValue) => {
        return prev + currentValue
    },0)

    const expensess = notFiltered.reduce((prev,currentValue) => {
        return prev + currentValue
    },0)

    console.log({filtered:filtered,income:income,amount:amount})

    return ( 
        <div className="inc-exp-container">
            <div className="money">
                <h4>INCOME</h4>
                <h4 style={{color:"green",fontSize:"30px"}}>${income}</h4>
            </div>
            <div className="money">
                <h4>EXPENSE</h4>
                <h4 style={{color:"red",fontSize:"30px"}}>-${Math.abs(expensess)}</h4>
            </div>
        </div>
        

     );
}
 
export default Expense;