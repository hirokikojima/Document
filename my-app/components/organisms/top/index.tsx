import React, { FC } from 'react'
import styles from './styles.module.scss'

const Top: FC = () => {
  return (
    <div className={styles.Top}>
      <div className={styles['Top-Container']}>
        <h2 className={styles['Top-Heading']}>
          <span className={styles['Top-Heading-Main']}>Hiroki Kojima</span>
          <span className={styles['Top-Heading-Sub']}>Portfolio</span>
        </h2>
      </div>
    </div>
  )
}

export default Top