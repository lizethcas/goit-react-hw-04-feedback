import styles from "./statistics.module.css";

const Statistics = ({ good, bad, neutral }) => {
  return (
    <div className={styles.statistcis__container}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>total : {good + bad + neutral}</p>
      <p>
        Posivive feedback:
        {((good / (good + bad + neutral)) * 100).toFixed(0)}%
      </p>
    </div>
  );
};

export default Statistics;
