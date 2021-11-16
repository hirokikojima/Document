import React, { FC, useState } from "react"
import NextLink from "../../atoms/NextLink"
import DrawerMenu from "../../molecules/DrawerMenu"
import MenuToggleButton from "../../molecules/MenuToggleButton"
import styles from "./styles.module.scss"

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleToggleMenu = (state: boolean) => {
    setIsMenuOpen(state)
  }
  
  return (
    <>
      <header className={styles.Header}>
        <div className={styles['Header-Container']}>
          <h1 className={styles['Header-Logo']}>
            hirokikojima.github.io
          </h1>
          <nav className={styles['Header-Navigation-Pc']}>
            <ul className={styles['HeaderNav-List']}>
              <li className={styles['HeaderNav-ListItem']}>
                <NextLink href="/#index">Top</NextLink>
              </li>
              <li className={styles['HeaderNav-ListItem']}>
                <NextLink href="/#profile">Profile</NextLink>
              </li>
              <li className={styles['HeaderNav-ListItem']}>
                <NextLink href="/#skill">Skill</NextLink>
              </li>
              <li className={styles['HeaderNav-ListItem']}>
                <NextLink href="/#career">Career</NextLink>
              </li>
              <li className={styles['HeaderNav-ListItem']}>
                <NextLink href="/blog">Blog</NextLink>
              </li>
            </ul>
          </nav>
        </div>
        <MenuToggleButton
          className={styles['Header-Navigation-SpToggle']}
          isOpen={isMenuOpen}
          onChange={handleToggleMenu}
        />
        {
          isMenuOpen && (
            <DrawerMenu className={styles['Header-Navigation-Sp']}>
              <ul className={styles['DrawerMenu-List']}>
                <li className={styles['HeaderNav-ListItem']}>
                  <NextLink href="/#index">Top</NextLink>
                </li>
                <li className={styles['HeaderNav-ListItem']}>
                  <NextLink href="/#profile">Profile</NextLink>
                </li>
                <li className={styles['HeaderNav-ListItem']}>
                  <NextLink href="/#skill">Skill</NextLink>
                </li>
                <li className={styles['HeaderNav-ListItem']}>
                  <NextLink href="/#career">Career</NextLink>
                </li>
                <li className={styles['HeaderNav-ListItem']}>
                  <NextLink href="/blog">Blog</NextLink>
                </li>
              </ul>
            </DrawerMenu>
          )
        }
      </header>
    </>
  )
}

export default Header