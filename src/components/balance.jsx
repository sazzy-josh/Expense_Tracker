import {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext";

const Balance = () => {
  const {expenses} = useContext(GlobalContext);
  const amount = expenses.map((expense) => {
    return expense.amount;
  });
  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  const total = amount.reduce((prev, currentValue) => {
    return prev + currentValue;
  }, 0);

  return (
    <div>
      <h4>YOUR BALANCE</h4>
      <h1>{currency.format(Number(total))}</h1>
    </div>
  );
};

export default Balance;
