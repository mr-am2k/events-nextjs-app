//this is page that will display information about special meetup based on it ID 
import { MongoClient, ObjectId } from 'mongodb'
import Head from 'next/head'
import { Fragment } from 'react'
import EventDetail from '../../components/events/EventDetail'

const EventDetails = (props) => {
    return (
        <Fragment>

            <Head>
                <title>{props.eventData.title}</title>
                <meta name='description' content={props.eventData.description} />

            </Head>
            <EventDetail
                image={props.eventData.image}
                title={props.eventData.title}
                address={props.eventData.address}
                description={props.eventData.description}
            />
        </Fragment>
    )
}

//because page is pre-generated during build process, and because this page is dynamic we need to describe all dynamic values
export const getStaticPaths = async () => {
    const url = process.env.DB_URL
    const client = await MongoClient.connect(url)
    const db = client.db('events-app')
    const eventsCollection = db.collection('events')
    const events = await eventsCollection.find({}, { _id: 1 }).toArray() //fetching all documents from a collection, but only id from a document
    client.close()
    return {
        fallback: 'blocking', //allows to pre-generate some od id's not all 
        paths: events.map(event => ({
            params: { eventID: event._id.toString() } //dynamic way to generate array of paths
        }))
    }
}

export const getStaticProps = async (context) => {
    const eventID = context.params.eventID
    const url = process.env.DB_URL
    const client = await MongoClient.connect(url)
    const db = client.db('events-app')
    const eventsCollection = db.collection('events')
    const selectedEvent = await eventsCollection.findOne({ _id: ObjectId(eventID) })
    client.close()
    return {
        props: {
            eventData: {
                id: selectedEvent._id.toString(),
                title: selectedEvent.title,
                image: selectedEvent.image,
                address: selectedEvent.address,
                description: selectedEvent.description
            }
        },
        revalidate: 10
    }
}

export default EventDetails

