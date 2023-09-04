import type { FC } from 'react'
import styles from './title.module.scss'

const Title: FC<{title: string, id?: string}> = ({title, id}) => {
  return (
    <div id={id} className={styles.title}>
      <div className={styles.wrapper}>
        <h2 className={styles.text}>{title}</h2>
      </div>
    </div>
  )
}

export default Title