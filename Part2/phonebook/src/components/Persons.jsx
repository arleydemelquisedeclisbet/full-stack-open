import Person from "./Person"

const Persons = ({ persons, handleDelete }) => {
    return (
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }} >
            {persons.map(person =>
                <Person key={person.id} person={person} handleDelete={handleDelete} />
            )}
        </ul>
    )
}

export default Persons