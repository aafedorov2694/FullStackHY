
const Notification = ({message}) => {
    if(message === null) {
        return null
    } else if(message.includes('added') === true) {
        return (
            <div className="added">
                {message}
            </div>
        )
    } else if(message.includes('removed') === true) {
       return(
       <div className="deleted">
            {message}
        </div>
       )
    }
}

export default Notification