import styles from './navbar.module.scss'
import img from "../../img/home.png"
import ItemListContainer from '../ItemListContainer'
import CartWidget from '../CartWidget'

function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.home}>
            <a href="" className={styles.homeA}>
                <img src={img} alt="home.png" className={styles.homeImg} /> <h1>Winchester</h1> 
            </a>
        </div>
        <ItemListContainer/>
        <CartWidget/>
    </div>
  )
}



export default Navbar