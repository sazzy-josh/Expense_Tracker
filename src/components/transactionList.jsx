import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Transaction from "./Transaction";


const TransactionList = () => {
    const { expenses } = useContext(GlobalContext)
    return ( 
        <div >
            <h3>History</h3>
            <ul className="list">
                {expenses.map((expense) => 
                  <Transaction expense={expense} key={expense.id} />
                 )}
            </ul>
        </div>
     )
}
 
export default TransactionList;