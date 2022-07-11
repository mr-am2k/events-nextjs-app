import MainNavigation from './MainNavigation'
import styles from './Layout.module.css'

const Layout = ({children}) => {
    return(
        <div>
            <MainNavigation/>
            <main className={styles.container}>{children}</main>
        </div>
    )
}

export default Layout