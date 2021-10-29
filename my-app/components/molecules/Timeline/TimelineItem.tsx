import React, { FC, ReactNode } from 'react'
import DateUtil from '../../../utils/DateUtil'
import { HeadingSmall } from '../../atoms/Heading'
import styles from './styles.module.scss'

export type TimelineItem = {
  date: Date
  heading: string
  body: ReactNode
}

export type Props = {
  timelineItem: TimelineItem
}

const TimelineItem: FC<Props> = (props: Props) => {
  const {
    timelineItem
  } = props
  
  return (
    <li className={styles['Timeline-Item']}>
      <div className={styles['Timeline-ItemDate']}>{ DateUtil.format(timelineItem.date) }</div>
      <div className={styles['Timeline-ItemCircle']}></div>
      <HeadingSmall className={styles['Timeline-ItemHeading']}>{ timelineItem.heading }</HeadingSmall>
      <div className={styles['Timeline-ItemBody']}>{ timelineItem.body }</div>
    </li>
  )
}

export default TimelineItem