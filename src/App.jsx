import { GlobalStyle } from "./styles/GlobalStyle";
import { Header } from './components/Header';
import { Resume } from './components/Resume';
import { Form } from './components/Form';

import { useState, useEffect } from 'react';

function App() {

  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
         data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpenses = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));

    const expense = amountExpenses.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2)
    const total = Math.abs(income - expense).toFixed(2)

    setIncome(income);
    setExpense(expense)
    setTotal(total)
  }, [transactionsList])

  function handleAdd(transaction){
    const newArrayTransActions = [...transactionsList, transaction]
    setTransactionsList(newArrayTransActions)
    localStorage.setItem("transactions", JSON.stringify(newArrayTransActions))
  }

  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <Resume income={income} expense={expense} total={total}/>
      <Form 
        handleAdd={handleAdd}
      />
    </div>
  )
}

export default App
