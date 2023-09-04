import type { FC } from 'react'
import styles from './objectCard.module.scss'

interface IObjectCard {
  src: string, 
  alt: string, 
  title: string
  minPrice: string
}

const ObjectCard: FC<IObjectCard> = ({src, alt, title, minPrice}) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={src} alt={alt} />
      <div className={styles.info}>
        <span className={styles.title}>{title}</span>
        <span className={styles.minPrice}>от {minPrice} ₽</span>
      </div>
    </div>
  )
}

export default ObjectCard