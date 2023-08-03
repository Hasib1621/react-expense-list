import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>Found No expenses</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
