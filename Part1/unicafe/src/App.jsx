import { useState } from 'react'

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const Display = ({ value }) => <div>{value}</div>

const StatisticLine = ({ text, value }) => <Display value={`${text} ${value}`} />

const Statistics = ({ good, neutral, bad }) => {

  const getTotalVotes = () => bad + neutral + good

  const getAverage = () => {
    const totalPoints = (good * 1) + (bad * -1)
    const totalVotes = getTotalVotes()
    return totalVotes !== 0
    ? totalPoints / totalVotes
    : 0
  }
  
  const getPositivePercent = () => {
    return good !== 0
      ? good / getTotalVotes() * 100
      : 0
  }
  
  return (
    <>
      <h1>Statistics</h1>
      {
        getTotalVotes() > 0 ? 
          <>
            <StatisticLine text={'good'} value={good} />
            <StatisticLine text={'neutral'} value={neutral} />
            <StatisticLine text={'bad'} value={bad} />
            <StatisticLine text={'all'} value={getTotalVotes()} />
            <StatisticLine text={'average'} value={getAverage()} />
            <StatisticLine text={'positive'} value={`${getPositivePercent()} %`} />
          </>
        : <Display value={'No feedback given'} />
          
      }
    </>
  )
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGood = newValue => setGood(newValue)
  const addNeutral = newValue => setNeutral(newValue)
  const addBad = newValue => setBad(newValue)

  return (
    <>
      <h1>Give feedback</h1>
      <Button text={'good'} handleClick={() => addGood(good + 1)} />
      <Button text={'neutral'} handleClick={() => addNeutral(neutral + 1)} />
      <Button text={'bad'} handleClick={() => addBad(bad + 1)} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App
