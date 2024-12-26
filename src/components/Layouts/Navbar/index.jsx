import { Link } from "react-scroll"
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul className={styles.navbar}>

                    <li>
                        <Link className={styles.links}>Home</Link>
                    </li>

                    <li>
                        <Link className={styles.links} to='/menus' smooth={true} duration={900}>Cardápios</Link>
                    </li>

                    <li>
                        <img src="src/assets/Img/logo.png" alt="" />
                    </li>

                    <li>
                        <Link className={styles.links}>Entregas</Link>
                    </li>

                    <li>
                        <Link className={styles.links}>Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Navbar;
