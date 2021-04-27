import './Expenses.css';
import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

const Expenses = (props) => {
  const expenses = { ...props };

  const [filteredYear, setFilteredYear] = useState('All');

  const expenseFilterParam = (filterValue) => {
    setFilteredYear(filterValue);
  };

  const filteredExpenses = filteredYear === 'All' ? expenses.expense : expenses.expense.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear.toString(),
  );

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        expenseFilterYear={expenseFilterParam}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
