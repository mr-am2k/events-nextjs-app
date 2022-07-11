//this is page that will display information about special meetup based on it ID 
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import EventDetail from '../../components/events/EventDetail'

const EventDetails = () => {
    const router = useRouter()
    const { eventID } = router.query //way to get params from URL
    return (
        <Fragment>
            <EventDetail
                image={'https://visit.cern/sites/default/files/inline-images/private-event-cropped.jpg'}
                title='First event'
                address='Address'
                description='Description'
            />
        </Fragment>
    )
}

//because page is pre-generated during build process, and because this page is dynamic we need to describe all dynamic values
export const getStaticPaths = async () => {
    return {
        fallback: true, //allows to pre-generate some od id's not all 
        paths: [{
            params: {
                eventID: '1'
            },
            params: {
                eventID: '2'
            }
        }]
    }
}

export const getStaticProps = async (context) => {
    const eventID = context.params.eventID
    return {
        props: {
            eventData: {
                id: eventID,
                image: 'https://visit.cern/sites/default/files/inline-images/private-event-cropped.jpg',
                title: 'First event',
                address: 'Address',
                description: 'Description'
            }
        },
        revalidate: 10
    }
}

export default EventDetails

