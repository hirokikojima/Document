import React, { FC } from "react"
import styles from "./styles.module.scss"

const Header: FC = () => {
  return (
    <header className={styles.Header}>
      <div className={styles['Header-Container']}>
        <h1 className={styles['Header-Logo']}>
          hirokikojima.github.io
        </h1>
        <nav className={styles['HeaderNav']}>
          <ul className={styles['HeaderNav-List']}>
            <li className={styles['HeaderNav-ListItem']}>Top</li>
            <li className={styles['HeaderNav-ListItem']}>Profile</li>
            <li className={styles['HeaderNav-ListItem']}>Skill</li>
            <li className={styles['HeaderNav-ListItem']}>Career</li>
            <li className={styles['HeaderNav-ListItem']}>Blog</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header