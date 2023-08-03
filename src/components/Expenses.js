import ExpenseList from './ExpenseList';
import Card from './UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      <ExpenseList expenses={props.expenses} />
    </Card>
  );
};

export default Expenses;
