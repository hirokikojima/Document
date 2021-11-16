import React, { FC, HTMLProps, PropsWithChildren } from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

export type Props = PropsWithChildren<HTMLProps<HTMLUListElement>>

const SkillList: FC<Props> = (props: Props) => {
  const {
    className,
    children,
    ...rest
  } = props
  
  const newClassName = cx([
    styles.SkillList,
    className
  ])

  return (
    <ul className={newClassName} {...rest}>
      {children}
    </ul>
  )
}

export default SkillList