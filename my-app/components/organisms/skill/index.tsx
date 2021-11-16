import React, { FC, HTMLProps } from 'react'
import cx from 'classnames'
import styles from './styles.module.scss'
import { Col, Container, Row } from '../../atoms/Container'
import { SkillList, SkillListItem } from './SkillList'
import { Skill as SkillType, SkillLevel, SkillName } from '../../../types/Skill'

export type Props = HTMLProps<HTMLDivElement>

const Skill: FC<Props> = (props: Props) => {
  const {
    className,
    ...rest
  } = props

  const languages: SkillType[] = [
    {
      name: SkillName.HTML,
      level: SkillLevel.Middle,
      year: 8
    },
    {
      name: SkillName.CSS,
      level: SkillLevel.Middle,
      year: 8
    },
    {
      name: SkillName.PHP,
      level: SkillLevel.Middle,
      year: 5
    },
    {
      name: SkillName.Java,
      level: SkillLevel.Middle,
      year: 2
    },
    {
      name: SkillName['C#'],
      level: SkillLevel.Middle,
      year: 2
    },
    {
      name: SkillName.Javascript,
      level: SkillLevel.Middle,
      year: 5
    }
  ]

  const frameworks: SkillType[] = [
    {
      name: SkillName['ASP.NET MVC'],
      level: SkillLevel.Junior,
      year: 1
    },
    {
      name: SkillName.CakePHP,
      level: SkillLevel.Junior,
      year: 1
    },
    {
      name: SkillName.FuelPHP,
      level: SkillLevel.Junior,
      year: 1
    },
    {
      name: SkillName.Struts,
      level: SkillLevel.Junior,
      year: 2
    },
    {
      name: SkillName.Laravel,
      level: SkillLevel.Middle,
      year: 3
    },
    {
      name: SkillName.Vue,
      level: SkillLevel.Middle,
      year: 2
    },
    {
      name: SkillName.Nuxt,
      level: SkillLevel.Middle,
      year: 2
    },
    {
      name: SkillName.React,
      level: SkillLevel.Middle,
      year: 2
    }
  ]

  const databases: SkillType[] = [
    {
      name: SkillName.MySQL,
      level: SkillLevel.Junior,
      year: 6
    },
    {
      name: SkillName.Oracle,
      level: SkillLevel.Junior,
      year: 2
    },
    {
      name: SkillName['SQL Server'],
      level: SkillLevel.Junior,
      year: 2
    }
  ]

  const others: SkillType[] = [
    {
      name: SkillName.AWS,
      level: SkillLevel.Junior,
      year: 4
    },
    {
      name: SkillName.Docker,
      level: SkillLevel.Middle,
      year: 2
    },
    {
      name: SkillName.gRPC,
      level: SkillLevel.Junior,
      year: 1
    },
    {
      name: SkillName.Jenkins,
      level: SkillLevel.Junior,
      year: 1
    },
    {
      name: SkillName.Swagger,
      level: SkillLevel.Junior,
      year: 2
    }
  ]

  return (
    <div className={cx(styles.Skill, className)} {...rest}>
      <div className={styles['Skill-Wrapper']}>
        <Container>
          <Row>
            <Col>
              <SkillList>
                {
                  languages.map((language) => (
                    <SkillListItem {...language} />
                  ))
                }
              </SkillList>
            </Col>
            <Col>
              <SkillList>
                {
                  frameworks.map((framework) => (
                    <SkillListItem {...framework} />
                  ))
                }
              </SkillList>
            </Col>
            <Col>
              <SkillList>
                {
                  databases.map((database) => (
                    <SkillListItem {...database} />
                  ))
                }
              </SkillList>
            </Col>
            <Col>
              <SkillList>
                {
                  others.map((other) => (
                    <SkillListItem {...other} />
                  ))
                }
              </SkillList>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Skill