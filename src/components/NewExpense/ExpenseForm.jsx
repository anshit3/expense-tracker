import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = () => {
  const [title, setTitle] = useState('Where did you spend money?');
  const [amount, setAmount] = useState('0.0');
  const [date, setDate] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };
  return (
    <form>
      <div className="new-expense_controls">
        <div className="new-expense__control">
          <label htmlFor="title">
            Title
            <input
              id="title"
              type="text"
              required="true"
              value={title}
              onChange={titleChangeHandler}
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">
            Amount
            <input
              id="amount"
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={amountChangeHandler}
            />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">
            Date
            <input
              id="date"
              type="date"
              min="2011-01-01"
              max="2023-12-31"
              value={date}
              required="true"
              onChange={dateChangeHandler}
            />
          </label>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
