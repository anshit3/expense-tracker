import { instanceOf } from 'prop-types';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const { dataPoints } = props;
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          I
        />
      ))}
    </div>
  );
};

export default Chart;

Chart.propTypes = {
  dataPoints: instanceOf(Object),
};

Chart.defaultProps = {
  dataPoints: {},
};
