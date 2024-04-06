
const PersonForm = ({ onSubmit, name, number, setNewName, setNewNumber }) => {

    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input value={name} onChange={setNewName} />
            </div>
            <div>
                number: <input value={number} onChange={setNewNumber} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm