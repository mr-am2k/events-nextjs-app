//page for adding new event
import NewEventForm from '../../components/events/NewEventForm'

const NewEvent = () => {
    const addEventHandler = (enteredEventData) => {
        console.log(enteredEventData)
    }

    return(
        <NewEventForm onAddEvent = {addEventHandler}/>
    )
}
export default NewEvent