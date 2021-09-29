import { NextPageWithLayout } from "next"
import React, { ReactElement } from "react"
import DefaultLayout from "../../components/organisms/layouts/DefaultLayout"

type Props = {

}

const SkillPage: NextPageWithLayout<Props> = (props: Props) => (
  <div>
    <h1>Skill</h1>
  </div>
)

SkillPage.getLayout = (page: ReactElement) => {
  return (<DefaultLayout>{page}</DefaultLayout>)
}

export default SkillPage