import { useState } from 'react'
import './App.css'
import AddExpense from './components/addExpense'
import Balance from './components/balance'
import Expense from './components/expense'
import Header from './components/header'
import TransactionList from './components/transactionList'
import GlobalContextProvider from './context/GlobalContext'

function App() {
  

  return (
    <div className="body">
      <GlobalContextProvider>
      <Header />
       <div className='container'>
         <Balance />
         <Expense />
         <TransactionList />
         <AddExpense />
       </div>
      </GlobalContextProvider>
    </div>
  )
}

export default App
