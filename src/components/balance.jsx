import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";



const Balance = () => {
    const { expenses } = useContext(GlobalContext)
    const amount = expenses.map((expense) => {
      return expense.amount
    })
    
    const total = amount.reduce((prev,currentValue) => {
        return prev + currentValue
     },0)

    return ( 
        <div>
            <h4>YOUR BALANCE</h4>
            <h1>${total.toFixed(2)}</h1>
        </div>
     );
}
 
export default Balance;