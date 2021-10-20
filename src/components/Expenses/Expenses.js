import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  //Uma variável pode armazenar código JSX
  let expenseContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map(expense =>
      <ExpenseItem
        key={expense.id} //Essa key deve ser única, sem essa propriedade podem surgir bugs
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    )
  }


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenseContent}  
      </Card>
    </div>

    //Essa é outra forma de fazer a condição para a exibição da mensagem
    // <div>
    //   <Card className="expenses">
    //    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

    //     {filteredExpenses.length === 0 && <p>No expenses found.</p> /*o que vem após && é executado se a condição for true*/}
    //     {filteredExpenses.length > 0 &&
    //       filteredExpenses.map(expense =>
    //         <ExpenseItem
    //           key={expense.id} //Essa key deve ser única, sem essa propriedade podem surgir bugs
    //           title={expense.title}
    //           amount={expense.amount}
    //           date={expense.date}
    //         />
    //       )
    //     }
    //   </Card>
    // </div>
  );
}

export default Expenses;
