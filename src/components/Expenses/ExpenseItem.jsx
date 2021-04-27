import './ExpenseItem.css';
import { string, number, instanceOf } from 'prop-types';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const {
    id, title, amount, date,
  } = props;

  return (
    <li>
      <Card className="expense-item" key={id}>
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
      </Card>
    </li>
  );
};

ExpenseItem.propTypes = {
  id: string,
  amount: number,
  date: instanceOf(Object),
  title: string,
};

ExpenseItem.defaultProps = {
  id: 'e0',
  amount: 0,
  date: new Date(),
  title: 'Nothing to display',
};

export default ExpenseItem;
