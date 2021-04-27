import './ExpenseFilter.css';
import { func } from 'prop-types';

const ExpenseFilter = (props) => {
  const { expenseFilterYear } = props;
  const onFilterParamChangeHandler = (e) => {
    expenseFilterYear(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="data-filter">
          Filter by year
          <select id="data-filter" onChange={onFilterParamChangeHandler}>
            <option value="All">All</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default ExpenseFilter;

ExpenseFilter.propTypes = {
  expenseFilterYear: func,
};

ExpenseFilter.defaultProps = {
  expenseFilterYear: () => {
    console.log('Change filter handler not received');
  },
};
