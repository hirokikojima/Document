import type { NextPageWithLayout } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import DefaultLayout from '../components/organisms/DefaultLayout'
import styles from '../styles/Home.module.css'
import Top from '../components/organisms/top'
import Profile from '../components/organisms/profile'
import Skill from '../components/organisms/skill'
import Career from '../components/organisms/career'

const Home: NextPageWithLayout = () => {
  const careerItems = [
    {
      date: new Date('2021/01'),
      company: {
        name: 'フリーランス',
        description: '現在はフリーランスとして活動中',
        projects: [
          {
            heading: 'フリーランス向け求人紹介サービス開発・保守',
            description: 'フリーランス向け人材紹介サービスのtoB/C向けのプラットフォームの開発',
            period: {
                from: new Date('2021-05-01'),
                to: new Date()
            },
            skill: [
              'PHP',
              'Javascript',
              'Typescript',
              'Node.js',
              'CakePHP',
              'Nuxt',
              'MySQL',
              'redis',
              'Docker',
              'gRPC'
            ]
          },
          {
            heading: '会議情報の共有サービス開発',
            description: '取締役会などの日程調整や議題・資料の管理及び議事録へ電子署名が行えるWebアプリケーションの開発',
            period: {
                from: new Date('2021-01-01'),
                to: new Date('2021-04-30')
            },
            techStack: {
                os: [
                  'AmazonLinux'
                ],
                language: [
                  'PHP',
                  'Javascript (Typescript)'
                ],
                framework: [
                  'laravel',
                  'react'
                ],
                db: [
                  'MySQL',
                  'redis',
                ],
                other: [
                  'Docker',
                  'Pusher',
                  'SQS',
                  'Swagger'
                ]
            }
          }
        ]
      }
    },
    {
      date: new Date('2019/09'),
      company: {
        name: '株式会社S社',
        description: '転職アプリのサーバサイドエンジニアとして開発 / 保守・運用を行なっていました。\n開発はスクラムで行われており、スクラムメンバーとして仕様作成から実装まで行なっていました。',
        projects: [
          {
            heading: 'heading',
            description: 'description',
            period: {
                from: new Date(),
                to: new Date()
            },
            techStack: {
                os: [],
                language: [],
                framework: [],
                db: [],
                other: []
            }
          }
        ]
      }
    },
    {
      date: new Date('2017/12'),
      company: {
        name: '株式会社L社',
        description: 'CMSを用いてWebサイトの開発 / 保守・運用を行なっていました。',
        projects: [
          {
            heading: 'heading',
            description: 'description',
            period: {
                from: new Date(),
                to: new Date()
            },
            techStack: {
                os: [],
                language: [],
                framework: [],
                db: [],
                other: []
            }
          }
        ]
      }
    },
    {
      date: new Date('2016/07'),
      company: {
        name: '株式会社C社',
        description: '転職アプリのサーバサイドエンジニアとして開発 / 保守・運用を行なっていました。\n開発はスクラムで行われており、スクラムメンバーとして仕様作成から実装まで行なっていました。',
        projects: [
          {
            heading: 'heading',
            description: 'description',
            period: {
                from: new Date(),
                to: new Date()
            },
            techStack: {
                os: [],
                language: [],
                framework: [],
                db: [],
                other: []
            }
          }
        ]
      }
    },
    {
      date: new Date('2013/04'),
      company: {
        name: '株式会社T社',
        description: '転職アプリのサーバサイドエンジニアとして開発 / 保守・運用を行なっていました。\n開発はスクラムで行われており、スクラムメンバーとして仕様作成から実装まで行なっていました。',
        projects: [
          {
            heading: 'heading',
            description: 'description',
            period: {
                from: new Date(),
                to: new Date()
            },
            techStack: {
                os: [],
                language: [],
                framework: [],
                db: [],
                other: []
            }
          }
        ]
      }
    }
  ]
  
  return (
    <>
      <Top id="index" />
      <Profile id="profile"/>
      <Skill id="skill" />
      <Career id="career" careers={careerItems} />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (<DefaultLayout>{page}</DefaultLayout>)
}

export default Home
