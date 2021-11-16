import React, { FC, HTMLProps } from 'react'
import cx from 'classnames'
import { HeadingMiddle } from '../../atoms/Heading'
import styles from './styles.module.scss'

export type Props = HTMLProps<HTMLDivElement>

const Profile: FC<Props> = (props: Props) => {
  const {
    className,
    ...rest
  } = props
  
  return (
    <div className={cx(styles.Profile, className)} {...rest}>
      <div className={styles['Profile-Wrapper']}>
        <div className={styles['Profile-Container']}>
          <img className={styles['Profile-Icon']} src="/vercel.svg" />
          <div className={styles['Profile-Contents']}>
            <HeadingMiddle className={styles['Profile-ContentsHeading']}>
              小嶋 宏樹
              <span className={styles['Profile-ContentsHeading-Ruby']}>こじま ひろき</span>
            </HeadingMiddle>
            <p className={styles['Profile-ContentsText']}>
              1990年生まれの愛知県出身のWebエンジニア。<br/>
              大学卒業後、東京のWebの受託会社へ就職しサーバサイドエンジニアとしてWebアプリの開発・保守運用を経験しました。<br/>
              その後、グロースハックに興味があり、自社サービスの会社へ転職。<br/>
              フロントエンドからバックエンドまで一通りの経験があります。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile