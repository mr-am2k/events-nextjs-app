//page for adding new event
const axios = require('axios')
import { useRouter } from 'next/router'
import NewEventForm from '../../components/events/NewEventForm'
const NewEvent = () => {
    const router = useRouter()
    const addEventHandler = async (enteredEventData) => {
        const response = await axios.post('/api/new-event', enteredEventData)
        const data = await response.data
        console.log(data)
        router.replace('/')
    }

    return(
        <NewEventForm onAddEvent = {addEventHandler}/>
    )
}
export default NewEvent

// const response = await axios.post('/api/new-event', JSON.stringify(enteredEventData))