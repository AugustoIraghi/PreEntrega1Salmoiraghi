import styles from './navbar.module.scss'
import img from "../../img/home.png"
import CartWidget from '../CartWidget'
import MenuContainer from '../MenuContainer'
import SwitchMode from '../SwitchMode'

function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.home}>
            <a href="" className={styles.homeA}>
                <img src={img} alt="home.png" className={styles.homeImg} /> <h1>Winchester</h1> 
            </a>
        </div>
        <SwitchMode/>
        <MenuContainer/>
        <CartWidget/>
    </div>
  )
}



export default Navbar