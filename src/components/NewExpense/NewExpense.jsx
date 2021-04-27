import './NewExpense.css';
import { func } from 'prop-types';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const { onNewExpenseAddition } = props;
  const [isEditing, setIsEdinting] = useState(false);

  const saveExpenseDataHandler = (enteredNewExpenseData) => {
    const expenseData = {
      ...enteredNewExpenseData,
      id: Math.random().toString(),
    };
    onNewExpenseAddition(expenseData);
    setIsEdinting(false);
  };

  const startEditingHandler = () => {
    setIsEdinting(true);
  };

  const stopEditingHandler = () => {
    setIsEdinting(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          stopEditingHandler={stopEditingHandler}
        />
      )}
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
