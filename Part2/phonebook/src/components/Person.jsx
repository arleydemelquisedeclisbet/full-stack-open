
const Person = ({ person: { name, number, id }, handleDelete }) => {
    return (
        <li>
            <span>{name}</span> 
            <span>{number}</span> 
            <span><button onClick={() => handleDelete(id)}>Delete</button></span>
        </li>
    )
}

export default Person