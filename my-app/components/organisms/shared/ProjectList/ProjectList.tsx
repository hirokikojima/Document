import React, { FC } from 'react'
import styles from './styles.module.scss'
import ProjectListItem, { ProjectListItem as ProjectListItemType } from './ProjectListItem'

export type Props = {
  projectListItems: ProjectListItemType[]
}

const ProjectList: FC<Props> = (props: Props) => {
  const {
    projectListItems
  } = props
  
  return (
    <ul className={styles.ProjectList}>
      {
        projectListItems.map((projectListItem) => (
          <ProjectListItem projectListItem={projectListItem} />
        ))
      }
    </ul>
  )
}

export default ProjectList