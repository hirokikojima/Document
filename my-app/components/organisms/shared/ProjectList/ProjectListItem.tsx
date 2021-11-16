import React, { FC } from 'react'
import { Project } from '../../../../types'
import { HeadingSmall } from '../../../atoms/Heading'
import styles from './styles.module.scss'

export type ProjectListItem = Project

export type Props = {
  projectListItem: ProjectListItem
}

const ProjectListItem: FC<Props> = (props: Props) => {
  const {
    projectListItem
  } = props
  
  return (
    <li className={styles.ProjectListItem}>
      <HeadingSmall>{projectListItem.heading}</HeadingSmall>
      <p>{projectListItem.description}</p>
    </li>
  )
}

export default ProjectListItem