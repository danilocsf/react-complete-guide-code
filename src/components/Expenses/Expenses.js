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
  props.items.map(expense => console.log(expense));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.items.map(expense =>
          <ExpenseItem
            key={expense.id} //Essa key deve ser única, sem essa propriedade podem surgir bugs
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )}
      </Card>
    </div>
  );
}

export default Expenses;
