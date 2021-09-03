import styles from "../FeedbackOptions/FeedbackOptions.module.css";
import PropTypes from 'prop-types'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map((option) => (
    <button
      key={option}
      type="button"
      className={styles.button}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  
};
export default FeedbackOptions;
