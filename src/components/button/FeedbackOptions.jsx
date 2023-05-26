import styles from "./FeedbackOptions.module.css";
const   FeedbackOptions  = ({ buttonTitle, onLeaveFeedback }) => {
  
  return (
    <>
      <button className={styles.button} onClick={onLeaveFeedback}>
        {buttonTitle}
      </button>
    </>
  );
};

export default FeedbackOptions ;
