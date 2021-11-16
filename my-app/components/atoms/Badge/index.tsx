import React, { FC } from 'react'
import Badge, { Props as BadgeProps } from './Badge'

export type Props = Omit<BadgeProps, 'modifier'>

const badgeFactory = (modifier: string): FC<Props> => {
  return (props: Props) => {
    return <Badge modifier={modifier} {...props} />
  }
}

export const SkillBadgeJunior = badgeFactory('SkillBadgeJunior')
export const SkillBadgeMiddle = badgeFactory('SkillBadgeMiddle')
export const SkillBadgeSenior = badgeFactory('SkillBadgeSenior')