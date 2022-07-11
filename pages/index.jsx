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

const HomePage = (props) => {

    return (
        <EventList events={props.events} />
    )
}


//static generation, it's used to handle loading logic, when we fetch data, there is a time gap between load and data fetch, so we get an empty html content on site, but with this function we can handle it
export const getStaticProps = async () => {
    //do some logic
    return {
        props: {
            events: EVENTS
        },
        revalidate: 10 //page is being generated during build process but also every 10 seconds if they are requests for this page (handles old data problem)
    }
}

export default HomePage







//function runs after deployment on server for every incoming request (good for pages that changes every few seconds and pages where are request information important )
// export const getServerSideProps = async (context) => {
//     const req = context.req
//     const res = context.res
//     //do some logic
//     return {
//         props: {
//             events: EVENTS
//         }
//     }
// }