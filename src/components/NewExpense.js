import { useState } from 'react';
import classes from './NewExpense.module.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);

  const addHandler = () => {
    setIsAdding(true);
  };

  const cancelHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className={classes['new-expense']}>
      {!isAdding && <button onClick={addHandler}>Add New Expense</button>}
      {isAdding && <ExpenseForm onCancel={cancelHandler} />}
    </div>
  );
};

export default NewExpense;
