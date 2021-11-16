import React, { FC, HTMLProps, PropsWithChildren } from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'

export type Props = PropsWithChildren<HTMLProps<HTMLDivElement>>

const ContentSection: FC<Props> = (props: Props) => {
  const {
    className,
    children,
    ...rest
  } = props

  return (
    <section className={cx(styles.ContentSection, className)} {...rest}>
      <div className={styles['ContentSection-Wrapper']}>
        <div className={styles['ContentSection-Container']}>
          {children}
        </div>
      </div>
    </section>
  )
}

export default ContentSection