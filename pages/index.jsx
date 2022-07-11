//this is home page
import EventList from '../components/events/EventList'

const EVENTS = [{ //hard-coded data used for testing
    id: '1',
    title: 'First event',
    image: 'https://visit.cern/sites/default/files/inline-images/private-event-cropped.jpg',
    address: 'Address for the first event',
    description: 'Description for the first event'
},
{
    id: '2',
    title: 'Second event',
    image: 'https://visit.cern/sites/default/files/inline-images/private-event-cropped.jpg',
    address: 'Address for the second event',
    description: 'Description for the second event'
}]

const HomePage = () => {
    return (
        <EventList events={EVENTS} />
    )
}

export default HomePage