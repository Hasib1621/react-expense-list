import ExpenseList from './ExpenseList';
import Card from './UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');

  const yearChangeHandler = (seletedYear) => {
    setYear(seletedYear);
  };

  const filteredItems = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={year} onDropdownChange={yearChangeHandler} />
      <ExpensesChart expenses={filteredItems} />
      <ExpenseList expenses={filteredItems} />
    </Card>
  );
};

export default Expenses;
