import React, { FC, PropsWithChildren } from "react"
import Link, { LinkProps } from 'next/link'

export type Props = PropsWithChildren<LinkProps>

const NextLink: FC<Props> = (props: Props) => {
  const {
    children,
    ...rest
  } = props
  
  return (
    <Link {...rest}>{children}</Link>
  )
}

export default NextLink