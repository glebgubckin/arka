import { ChangeEvent, FC, useState } from 'react'
import styles from './form.module.scss'

const Form: FC = () => {

  const [input, setInput] = useState("")

  return (
    <form className={styles.form}>
      <p>Узнавайте о новых жилых комплексах первыми!</p>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type="email"
          maxLength={60}
          placeholder="Ваш email"
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} 
        />
        <button className={styles.button}>Подписаться</button>
      </div>
    </form>
  )
}

export default Form