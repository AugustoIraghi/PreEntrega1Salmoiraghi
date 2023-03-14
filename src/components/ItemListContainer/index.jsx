import styles from './itemlistcontainer.module.scss'

function ItemListContainer({texto}) {
  return (
    <div className={styles.container}><p>{texto}</p></div>
  )
}

export default ItemListContainer