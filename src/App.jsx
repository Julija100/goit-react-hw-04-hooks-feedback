import React, { useState } from "react";
import Statistics from "./components/Statistics/Statistics";
import Section from "./components/Section/Section";
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Notification from "./components/Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackTypes = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = (feedbackType) => {
    if (feedbackType === 'good') return setGood((good) => good + 1);
    if (feedbackType === 'neutral') return setNeutral((neutral) => neutral + 1);
    if (feedbackType === 'bad') return setBad((bad) => bad + 1);

    return console.error('feedbackType error');
  };

 const countTotalFeedback = () => {
    //общеe количествo собранных отзывов из всех категорий
  return good + neutral + bad;
 };
  
    const countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = Math.round(
      good / (countTotalFeedback() * 0.01)
    );
    return positiveFeedbackPercentage || 0; // || возвращает выражение справа, если левая часть ложная
    };
  
  
    return (
      <>
        <h1> Our visitors feedback</h1>
        <Section title="Please, leave your feedback! This is important for us!">
          <FeedbackOptions
            options={feedbackTypes}
            onLeaveFeedback={onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="STATISTICS">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </>
    );
}

export default App;
