import type { NextPageWithLayout } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import DefaultLayout from '../components/organisms/layouts/DefaultLayout'
import styles from '../styles/Home.module.css'
import Top from '../components/organisms/top'
import Profile from '../components/organisms/profile'
import Skill from '../components/organisms/skill'
import Career from '../components/organisms/career'

const Home: NextPageWithLayout = () => {
  const careerItems = [
    {
      date: new Date('2017/12'),
      heading: '株式会社L社',
      body: <span style={{color: 'red'}}>Body</span>
    },
    {
      date: new Date('2016/07'),
      heading: '株式会社C社',
      body: <span style={{color: 'red'}}>Body</span>
    },
    {
      date: new Date('2013/04'),
      heading: '株式会社T社',
      body: <span style={{color: 'red'}}>Body</span>
    }
  ]
  
  return (
    <>
      <Top />
      <Profile/>
      <Skill />
      <Career careerItems={careerItems} />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (<DefaultLayout>{page}</DefaultLayout>)
}

export default Home
