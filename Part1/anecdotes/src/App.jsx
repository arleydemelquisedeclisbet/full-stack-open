import { useState } from 'react'

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const Display = ({ value }) => <div>{value}</div>

const Anecdote = ({ anecdote, votes }) => {
  return (
    <>
      <Display value={anecdote} />
      <Display value={`Has ${votes} votes`} />
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const getRandom = () => Math.floor(Math.random() * anecdotes.length)
  const getPoints = anecdotes.reduce((acc, _current, i) => ({ ...acc, [i]: 0 }), {} )

  const [selected, setSelected] = useState(getRandom)
  const [points, setPoints] = useState(getPoints)

  const nextRandomAnecdote = () => {

    const random = getRandom()

    if (random === selected) return nextRandomAnecdote()
      
    setSelected(random)
  }

  const addVote = () => {
    setPoints({...points, [selected]: points[selected] + 1 })
  }

  const getIndexOfAnecdoteWithMostVotes = () => {
    const arrayPoints = Object.entries(points)
    const mostVotes = arrayPoints.reduce((prev, current) => prev[1] > current[1] ? prev : current)
    return mostVotes[0]
  }

  const isThereAnyVote = () => Object.entries(points).find(point => point[1] > 0)

  return (
    <> 
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={points[selected]} />
      <Button text={'Vote'} handleClick={addVote} />
      <Button text={'Next anecdote'} handleClick={nextRandomAnecdote} />

      <h1>Anecdote with most votes</h1>
      {
        isThereAnyVote() 
          ? <Anecdote 
              anecdote={anecdotes[getIndexOfAnecdoteWithMostVotes()]} 
              votes={points[getIndexOfAnecdoteWithMostVotes()]} 
            />
          : <Display value={'No votes given'} />
      }      
    </>
  )
}

export default App