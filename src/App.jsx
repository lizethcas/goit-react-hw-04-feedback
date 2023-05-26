import { useState } from "react";

import FeedbackOptions from "./components/button/FeedbackOptions";
import Statistics from "./components/statistics/statistics";
import Notification from "./components/Notification/Notification";
import Section from "./components/Section/Section";
import "./App.css";

const App = () => {
  const [bad, setBad] = useState(0);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);

  return (
    <>
      <Section title="Please leave feedback" className="buttons__container">
        <FeedbackOptions
          buttonTitle="Good"
          onLeaveFeedback={() => setGood(good + 1)}
        />
        <FeedbackOptions
          buttonTitle="Neutral"
          onLeaveFeedback={() => setNeutral(neutral + 1)}
        />
        <FeedbackOptions
          buttonTitle="Bad"
          onLeaveFeedback={() => setBad(bad + 1)}
        />
      </Section>
      <Section
        title={good != 0 || bad != 0 || neutral != 0 ? "Statistics" : ""}
      >
        {good != 0 || bad != 0 || neutral != 0 ? (
          <Statistics good={good} bad={bad} neutral={neutral} />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
};

export default App;
