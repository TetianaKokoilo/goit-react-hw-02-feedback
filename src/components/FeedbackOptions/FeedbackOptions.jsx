export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((key, index) => (
          <button key={index} type="button" onClick={() => onLeaveFeedback(key)}>{key}
        </button>
      ))}
    </div>
  );
};
