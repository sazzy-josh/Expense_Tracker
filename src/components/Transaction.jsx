import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Transaction = ({expense}) => {
      
    const { dispatch } = useContext(GlobalContext)

    const sign = expense.amount > 0 ? "+$" : "-$" 
    return ( 
          <li className={expense.amount > 0 ? "plus" : "minus" }><div>{expense.text}</div> <div>{sign}{Math.abs(expense.amount)}</div> <span onClick={() => dispatch({type:'DELETE_BOOK' , payload: expense.id})} className="delete-btn">X</span></li> 
     );
}
 
export default Transaction;