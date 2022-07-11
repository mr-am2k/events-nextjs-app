import { useRouter } from 'next/router';
import Card from '../ui/Card';
import styles from './EventItem.module.css'

const EventItem = ({id,image,title,address}) =>{
    const router = useRouter()
    const showEventDetailsHandler = () => {
        router.push('/' + id)
    }

    return (
        <li className={styles.item}>
            <Card>
                <div className={styles.image}>
                    <img src={image} alt={title} />
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                </div>
                <div className={styles.actions}>
                    <button onClick={showEventDetailsHandler}>Show Details</button>
                </div>
            </Card>
        </li>
    );
}

export default EventItem;