import React, { FC, useState } from 'react'
import cx from 'classnames'
import Button, { Props as ButtonProps} from '../../atoms/Button/Button'
import styles from './styles.module.scss'

export type Props = {
  isOpen: boolean
  onChange: (bool: boolean) => void
} & Omit<ButtonProps, 'onChange'>

const MenuToggleButton: FC<Props> = (props: Props) => {
  const {
    className,
    isOpen,
    onChange,
    ...rest
  } = props

  const newClassName = cx([
    styles.MenuToggleButton,
    isOpen && styles.open,
    className
  ])

  const handleChange = () => {
    onChange(!isOpen)
  }

  return (
    <Button className={newClassName} onClick={handleChange} {...rest}>
      <span></span>
    </Button>
  )
}

export default MenuToggleButton