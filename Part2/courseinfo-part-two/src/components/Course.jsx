
const Header = ({ course: { name }}) => <h1>{name}</h1>

const Part = ({ part, exercises }) => <p>{part} {exercises}</p>

const Content = ({ course: { parts }}) => {
    return parts.map(({ name, exercises, id }) => <Part key={id} part={name} exercises={exercises} />)
}

const Total = ({ course: { parts }}) => {

    const total = parts.reduce((acum, current) => acum + current.exercises, 0)

    return <b>Total of {total} exercises</b>
}

const Course = ({ course }) => {
    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </>
    )
}

export default Course