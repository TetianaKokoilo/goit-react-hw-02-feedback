import PropTypes from 'prop-types';

export const Statistics = ({
  onTotalCount,
  onPositivePercentage,
  points: { good, neutral, bad },
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>bad: {bad}</p>
      <p>Total: {onTotalCount()}</p>
      <p>
        Positive feedback:
        {onPositivePercentage() ? onPositivePercentage() : '0'}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  points: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  })
}