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
        parts.map((part, index) => <Part key={index} part={part.name} exercises={part.exercises} /> )
      }
    </>
  )
}

const Total = ({ total }) => {
  return (
    <>
      <p>Number of exercises {total}</p>    
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
}

export default App
