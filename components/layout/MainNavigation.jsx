import Link from 'next/link'
import styles from './MainNavigation.module.css'

const MainNavigation = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                Events
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href='/'>All Events</Link>
                    </li>
                    <li>
                        <Link href='/new-event'>Add New Event</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation