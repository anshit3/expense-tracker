import './ChartBar.css';

const ChartBar = (props) => {
  const { maxValue, value, label } = props;
  let barHeight = '0%';

  if (maxValue > 0) {
    barHeight = `${Math.round((value / maxValue) * 100).toString()}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barHeight }} />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
