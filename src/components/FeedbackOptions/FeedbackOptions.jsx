export const FeedbackOptions = ({ options: {good, neutral, bad}, onFeedback }) => {
  return (
    <div>
          <button type="button" onLeaveFeedback={() => onFeedback()}>Good{good}</button>
          <button type="button">Neutral{neutral}</button>
          <button type="button">Bad{bad}</button>
    </div>
  );
};
