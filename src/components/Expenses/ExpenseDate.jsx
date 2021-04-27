import { instanceOf } from 'prop-types';
import Card from '../UI/Card';
import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const { date } = props;

  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const day = date.toLocaleDateString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <Card className="expense-date">
      <div className="expense-date_month">{month}</div>
      <div className="expense-date_day">{day}</div>
      <div className="expense-date_year">{year}</div>
    </Card>
  );
};

ExpenseDate.propTypes = {
  date: instanceOf(Object),
};

ExpenseDate.defaultProps = {
  date: new Date(),
};

export default ExpenseDate;
