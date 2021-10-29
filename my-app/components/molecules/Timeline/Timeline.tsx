import React, { FC } from 'react'
import styles from './styles.module.scss'
import TimelineItem, { TimelineItem as TimelineItemType } from './TimelineItem'

export type Props = {
  timelineItems: TimelineItemType[]
}

const Timeline: FC<Props> = (props: Props) => {
  const {
    timelineItems
  } = props
  
  return (
    <ul className={styles.Timeline}>
      {
        timelineItems.map((timelineItem) => (
          <TimelineItem timelineItem={timelineItem} />
        ))
      }
    </ul>
  )
}

export default Timeline