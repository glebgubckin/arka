import type { FC } from 'react'
import styles from './serviceCard.module.scss'

const ServiceCard: FC<{title: string, text: string}> = ({title, text}) => {
  return (
    <div className={`${styles.wrapper} ${styles.wrapper__1}`}>
      <span className={styles.title}>{title}</span>
      <p>{text}</p>
    </div>
  )
}

export default ServiceCard