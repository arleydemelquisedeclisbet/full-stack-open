const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
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

const Content = ({ course }) => {
  
  const { parts } = course
  return (
    <>
      { 
        parts.map(({ name, exercises }, index) => <Part key={index} part={name} exercises={exercises} /> )
      }
    </>
  )
}

const Total = ({ course }) => {

  const { parts } = course
  
  const total = parts.reduce((acum, current) => acum + current.exercises, 0)

  return (
    <>
      <p>Number of exercises {total}</p>    
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default App
