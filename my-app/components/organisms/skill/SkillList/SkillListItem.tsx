import React, { FC, HTMLProps, PropsWithChildren } from 'react'
import cx from 'classnames'
import { SkillBadgeJunior, SkillBadgeMiddle ,SkillBadgeSenior } from '../../../atoms/Badge'
import styles from './styles.module.scss'
import { SkillLevel, SkillName } from '../../../../types/Skill'

export type Props = {
  name: SkillName,
  level: SkillLevel
  year: number
} & Omit<HTMLProps<HTMLLIElement>, 'name'>

const SkillListItem: FC<Props> = (props: Props) => {
  const {
    className,
    level,
    name,
    year,
    ...rest
  } = props
  
  const newClassName = cx([
    styles.SkillListItem,
    className
  ])

  let LevelBadge = () => {
    switch(level) {
      case SkillLevel.Junior:
        return <SkillBadgeJunior text={'Junior'} />
      case SkillLevel.Middle:
        return <SkillBadgeMiddle text={'Middle'} />
      case SkillLevel.Senior:
        return <SkillBadgeSenior text={'Senior'} />
    }
  }
  
  return (
    <li className={newClassName} {...rest}>
      <div className={styles['SkillListItem-Header']}>
        <span className={styles['SkillListItem-Name']}>{SkillName[name]}</span>
        <span className={styles['SkillListItem-Year']}>{year}年</span>
      </div>
      <div className={styles['SkillList-Level']}>
        <LevelBadge />
      </div>
    </li>
  )
}

export default SkillListItem