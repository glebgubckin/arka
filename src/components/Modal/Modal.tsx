import type { FC, ReactNode } from 'react';
import styles from './modal.module.scss'
import { useState } from 'react';

interface ModalProps {
  children: ReactNode | string
}

const Modal: FC<ModalProps> = ({children}) => {
  const [modal, setModal] = useState(false)

  return (
    <>
      <button className={styles.button} onClick={(e) => {
        e.preventDefault()
        setModal(true)
      }}>Отправить заявку</button>
      {
        modal
        ?
        <div className={styles.modal} onClick={() => setModal(false)}>
          <div 
            className={
              modal
              ? `${styles.modal__container} ${styles.modal__container__show}`
              : styles.modal__container
            }
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      : null
      }
    </>
  )
}

export default Modal