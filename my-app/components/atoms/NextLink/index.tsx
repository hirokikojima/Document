import React, { ElementType, FC, PropsWithChildren } from "react"
import Link, { LinkProps } from 'next/link'

export type Props = {
  tagType?: ElementType
} & PropsWithChildren<LinkProps>

const NextLink: FC<Props> = (props: Props) => {
  const {
    children,
    tagType,
    ...rest
  } = props
  
  const Tag = tagType || 'a'

  return (
    <Link {...rest}>
      <Tag>{children}</Tag>
    </Link>
  )
}

export default NextLink