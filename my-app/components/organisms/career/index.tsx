import React, { FC, HTMLProps } from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'
import CareerTimeline, { CareerTimelineItem } from './CareerTimeline'
import { Career as CareerType } from '../../../types'

export type Props = {
  careers: CareerType[]
} & HTMLProps<HTMLDivElement>

const Career: FC<Props> = (props: Props) => {
  const {
    className,
    careers,
    ...rest
  } = props
  
  const careerTimelineItems = careers

  return (
    <div className={cx(styles.Career, className)} {...rest}>
      <div className={styles['Career-Wrapper']}>
        <div className={styles['Career-Container']}>
          <CareerTimeline careerTimelineItems={careerTimelineItems} />
        </div>
      </div>
    </div>
  )
}

export default Career