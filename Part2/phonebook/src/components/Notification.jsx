
const Notification = ({ message, className }) => {
    if (!message) return

    return (
        <div className={className}>
            {message}
        </div>
    )
}

export default Notification