import './ExpenseForm.css';

const ExpenseForm = () => (
  <form>
    <div className="new-expense_controls">
      <div className="new-expense__control">
        <label htmlFor="title">
          Title
          <input id="title" type="text" />
        </label>
      </div>
      <div className="new-expense__control">
        <label htmlFor="amount">
          Amount
          <input id="amount" type="number" min="0.01" step="0.01" />
        </label>
      </div>
      <div className="new-expense__control">
        <label htmlFor="date">
          Date
          <input id="date" type="date" min="2011-01-01" max="2023-12-31" />
        </label>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </div>
  </form>
);

export default ExpenseForm;
