import { useState , useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddExpense = () => {
    const { dispatch } = useContext(GlobalContext)
    const [text , setText] = useState('')
    const [amount ,setAmount] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
         dispatch({type:'ADD_BOOK' , payload: { 
             id:Date.now(),
             text,
             amount: parseInt(amount)
            

         }})
         setAmount('')
         setText('')
    }

    return ( 
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={handleSubmit}> 
                <label htmlFor="text"><strong>Text</strong></label>
                <input type="text" style={{outline:"none"}} name="text" value={text} required  autoComplete="off" onChange={(e) => setText(e.target.value)}/>
                <label htmlFor="text"><strong>Amount(negative-expense ,positive-income)</strong></label>
                <input type="text" style={{outline:"none"}} name="text" value={amount}  required autoComplete="off" onChange={(e) => setAmount(e.target.value) }/>
                <input type="submit"  value="Add Expense" className="btn" />
            </form>
        </div>
     );
}
 
export default AddExpense;