import EventItem from './EventItem';
import styles from './EventList.module.css'

const EventList = (props) => {
    return (
        <ul className={styles.list}>
            {props.events.map((event) => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    image={event.image}
                    title={event.title}
                    address={event.address}
                />
            ))}
        </ul>
    );
}

export default EventList;