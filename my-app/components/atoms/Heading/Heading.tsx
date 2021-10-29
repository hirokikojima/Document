import React, { FC, HTMLProps, PropsWithChildren } from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

export type Props = PropsWithChildren<{
  level: number
  visualLevel?: number
}> & HTMLProps<HTMLHeadingElement>

const Heading: FC<Props> = (props: Props) => {
  const {
    children,
    level,
    visualLevel,
    className,
    ...rest
  } = props

  const newLevel = Math.max(1, Math.min(6, level))
  const newVisualLevel = visualLevel || newLevel

  const newClassName = cx([
    styles.Heading,
    styles[`h${newVisualLevel}`],
    className
  ])

  const newProps = {
    ...rest,
    newClassName
  }

  const tagType = `h${newLevel}`

  return React.createElement(
    tagType,
    newProps,
    children
  )
}

export default Heading