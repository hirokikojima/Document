import React, { FC, HTMLProps, PropsWithChildren } from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

export type Props = PropsWithChildren<HTMLProps<HTMLDivElement>>

const DrawerMenu: FC<Props> = (props: Props) => {
  const {
    className,
    children,
    ...rest
  } = props

  return (
    <div className={cx(styles.DrawerMenu, className)}>
      {children}
    </div>
  )
}

export default DrawerMenu