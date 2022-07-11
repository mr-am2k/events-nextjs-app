import Link from 'next/link'
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
    <header className={styles.header}>
        <div className={styles.logo}>
            Events
        </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Events</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New Event</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation