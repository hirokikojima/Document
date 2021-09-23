import React, { FC } from "react"
import RouteUtil from "../../../utils/RouteUtil"
import NextLink from "../../atoms/NextLink"

const Sidebar: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <NextLink href={RouteUtil.getSkillPageUrl()}>Skill</NextLink>
        </li>
        <li>
          <NextLink href={RouteUtil.getBlogListPageUrl()}>Blog</NextLink>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar