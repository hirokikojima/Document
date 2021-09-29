import { NextPageWithLayout } from "next"
import React, { ReactElement } from "react"
import AdminLayout from "../../../components/organisms/layouts/AdminLayout"

const AdminSkillPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>AdminSkill</h1>
    </div>
  )
}

AdminSkillPage.getLayout = (page: ReactElement) => {
  return (<AdminLayout>{page}</AdminLayout>)
}

export default AdminSkillPage