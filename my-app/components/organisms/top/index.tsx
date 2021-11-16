import React, { FC, HTMLProps } from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

export type Props = HTMLProps<HTMLDivElement>

const Top: FC<Props> = (props: Props) => {
  const {
    className,
    ...rest
  } = props

  return (
    <div className={cx(styles.Top, className)} {...rest}>
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