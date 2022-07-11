import MainNavigation from './MainNavigation'
import styles from './MainNavigation.module.css'

const Layout = () => {
    return(
        <div>
            <MainNavigation/>
            <div className={styles.container}>{props.children}</div>
        </div>
    )
}