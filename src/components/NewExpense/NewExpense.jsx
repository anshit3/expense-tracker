import './NewExpense.css';
import { func } from 'prop-types';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const { onNewExpenseAddition } = props;
  const saveExpenseDataHandler = (enteredNewExpenseData) => {
    const expenseData = {
      ...enteredNewExpenseData,
      id: Math.random().toString(),
    };
    onNewExpenseAddition(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;

NewExpense.propTypes = {
  onNewExpenseAddition: func.isRequired,
};

NewExpense.dafaultProps = {
  onNewExpenseAddition: () => {
    console.log('Function to send data to app component not received');
  },
};
