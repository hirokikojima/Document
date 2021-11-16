import React, { FC } from "react"
import Button, {Props as ButtonProps} from "./Button"

export type Props = Omit<ButtonProps, 'modifier'>

const buttonFactory = (modifier: string): FC<Props> => {
  return (props: Props) => {
    const {
      children,
      ...rest
    } = props

    return (
      <Button modifier={modifier} {...rest}>
        {children}
      </Button>
    )
  }
}

export const RectangleButton = buttonFactory('RectangleButton')
export const RoundButton = buttonFactory('RoundButton')