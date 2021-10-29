import React, { FC } from 'react'
import Heading, { Props as HeadingProps } from './Heading'

export type Props = Omit<HeadingProps, 'level' | 'visualLevel'>

const headingFactory = (level: number): FC<Props> => {
  return (props: Props) => {
    const {
      children,
      ...rest
    } = props

    return (
      <Heading level={level} {...rest}>
        {children}
      </Heading>
    )
  }
}

export const HeadingExtraLarge = headingFactory(1)
export const HeadingLarge = headingFactory(2)
export const HeadingMiddle = headingFactory(3)
export const HeadingSmall = headingFactory(4)
export const HeadingExtraSmall = headingFactory(5)