import { instanceOf } from 'prop-types';
import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {
  const { filteredExpenses } = props;
  const chartDataPoints = [
    {
      label: 'Jan',
      value: 0,
    },
    {
      label: 'Feb',
      value: 0,
    },
    {
      label: 'March',
      value: 0,
    },
    {
      label: 'April',
      value: 0,
    },
    {
      label: 'May',
      value: 0,
    },
    {
      label: 'June',
      value: 0,
    },
    {
      label: 'July',
      value: 0,
    },
    {
      label: 'Aug',
      value: 0,
    },
    {
      label: 'Sep',
      value: 0,
    },
    {
      label: 'Oct',
      value: 0,
    },
    {
      label: 'Nov',
      value: 0,
    },
    {
      label: 'Dec',
      value: 0,
    },
  ];

  // eslint-disable-next-line no-restricted-syntax
  for (const expense of filteredExpenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;

ExpenseChart.propTypes = {
  filteredExpenses: instanceOf(Object),
};

ExpenseChart.defaultProps = {
  filteredExpenses: {},
};
