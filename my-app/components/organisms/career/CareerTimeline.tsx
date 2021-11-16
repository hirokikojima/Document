import React, { FC } from 'react'
import styles from 'styles.module.scss'
import { Career } from '../../../types'
import { HeadingSmall } from '../../atoms/Heading'
import Timeline from '../../molecules/Timeline'
import ProjectList from '../shared/ProjectList/ProjectList'
import { ProjectListItem } from '../shared/ProjectList/ProjectListItem'

export type CareerTimelineItem = Career

export type Props = {
  careerTimelineItems: CareerTimelineItem[]
}

const CareerTimeline: FC<Props> = (props: Props) => {
  const {
    careerTimelineItems
  } = props

  const timelineItems = careerTimelineItems.map((careerTimelineItem) => {
    return {
      date: careerTimelineItem.date,
      heading: careerTimelineItem.company.name,
      body: (
        <div>
          <p>{careerTimelineItem.company.description}</p>
          <ProjectList projectListItems={careerTimelineItem.company.projects} />
        </div>
      )
    }
  })

  return (
    <Timeline timelineItems={timelineItems} />
  )
}

export default CareerTimeline