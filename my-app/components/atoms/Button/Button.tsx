import React, { FC, HTMLProps, PropsWithChildren } from 'react'
import classNames from 'classnames'
import styles from './styles.module.scss'

export type Props = PropsWithChildren<{
  modifier?: string
  type?: "button" | "submit" | "reset"
}> & HTMLProps<HTMLButtonElement>

const Button: FC<Props> = (props: Props) => {
  const {
    className,
    modifier,
    children,
    ...rest
  } = props

  const newClassName = classNames([
    styles.Button,
    styles[`Button-${modifier || 'default'}`],
    className
  ])

  const newProps = {
    ...rest,
    className: newClassName
  }

  return (
    <button {...newProps}>
      {children}
    </button>
  )
}

export default Button