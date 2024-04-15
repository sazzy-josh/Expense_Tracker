import {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext";

const Expense = () => {
  const {expenses} = useContext(GlobalContext);

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  const amount = expenses.map((expense) => {
    return expense.amount;
  });
  const filtered = amount.filter((expense) => {
    return expense > 0;
  });
  const notFiltered = amount.filter((expense) => {
    return expense < 0;
  });
  const income = filtered.reduce((prev, currentValue) => {
    return prev + currentValue;
  }, 0);

  const expensess = notFiltered.reduce((prev, currentValue) => {
    return prev + currentValue;
  }, 0);

  return (
    <div className='inc-exp-container'>
      <div className='money'>
        <h4>INCOME</h4>
        <h4 style={{color: "green", fontSize: "20px"}}>
          {currency.format(income)}
        </h4>
      </div>
      <div className='money'>
        <h4>EXPENSE</h4>
        <h4 style={{color: "red", fontSize: "20px"}}>
          {currency.format(Math.abs(expensess) || 0)}
        </h4>
      </div>
    </div>
  );
};

export default Expense;
