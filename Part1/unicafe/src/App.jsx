import { useState } from 'react'

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const Display = ({ value }) => <div>{value}</div>

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

      <h1>Statistics</h1>
      <Display value={`good ${good}`} />
      <Display value={`neutral ${neutral}`} />
      <Display value={`bad ${bad}`} />

    </>
  )
}

export default App
