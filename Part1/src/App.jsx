const Header = ({ course }) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <>
      <p>{part} {exercises}</p>
    </>
  )
}

const Content = ({ parts }) => {
  
  return (
    <>
      { 
        parts.map(({ name, exercises }, index) => <Part key={index} part={name} exercises={exercises} /> )
      }
    </>
  )
}

const Total = ({ parts }) => {

  const total = parts.reduce((acum, current) => acum + current.exercises, 0)

  return (
    <>
      <p>Number of exercises {total}</p>    
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

export default App
