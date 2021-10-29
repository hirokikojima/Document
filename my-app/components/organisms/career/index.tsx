import React, { FC } from 'react'
import styles from './styles.module.scss'
import Timeline, { TimelineItem } from '../../molecules/Timeline'

export type Props = {
  careerItems: TimelineItem[]
}

const Career: FC<Props> = (props: Props) => {
  const {
    careerItems
  } = props
  
  return (
    <div className={styles.Career}>
      <div className={styles['Career-Wrapper']}>
        <div className={styles['Career-Container']}>
          <Timeline timelineItems={careerItems} />
        </div>
      </div>
    </div>
  )
}

export default Career