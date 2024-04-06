import Person from "./Person"

const Persons = ({ persons }) => {
    return (
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }} >
            {persons.map(({ name, number, id }) =>
                <Person key={id} name={name} number={number} />
            )}
        </ul>
    )
}

export default Persons