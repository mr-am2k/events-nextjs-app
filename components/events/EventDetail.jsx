/* eslint-disable @next/next/no-img-element */
import styles from './EventDetail.module.css'
const EventDetail = ({image,title,address,description}) => {
    return (
        <div className={styles.detail}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <address>{address}</address>
            <p>{description}</p>
        </div>
    )
}
export default EventDetail