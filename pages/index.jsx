//this is home page
import Head from 'next/head'
import { MongoClient } from 'mongodb'
import EventList from '../components/events/EventList'
import { Fragment } from 'react'

const HomePage = (props) => {

    return (
        <Fragment>
            <EventList events={props.events} />
        </Fragment>
    )
}


//static generation, it's used to handle loading logic, when we fetch data, there is a time gap between load and data fetch, so we get an empty html content on site, but with this function we can handle it
export const getStaticProps = async () => {
    const url = process.env.DB_URL
    const client = await MongoClient.connect(url)
    const db = client.db('events-app')
    const eventsCollection = db.collection('events')
    const events = await eventsCollection.find().toArray()
    client.close()

    return {
        props: {
            events: events.map(event => ({
                title: event.title,
                image: event.image,
                address: event.address,
                id: event._id.toString()
            }))
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