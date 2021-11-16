import React, { FC, HTMLProps } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export type Props = {
  text: string
  modifier?: string
} & HTMLProps<HTMLSpanElement>

const Badge: FC<Props> = (props: Props) => {
  const {
    className,
    modifier,
    text,
    ...rest
  } = props

  const newClassName = classNames([
    styles.Badge,
    styles[`Badge-${modifier || 'default'}`],
    className
  ])

  return (
    <span className={newClassName} {...rest}>
      {text}
    </span>
  )
}

export default Badge