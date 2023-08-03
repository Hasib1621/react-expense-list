import Card from './UI/Card';

const Expenses = (props) => {
  return (
    <Card>
      {props.expenses.map((item) => (
        <li>{item.title}</li>
      ))}
    </Card>
  );
};

export default Expenses;
