import React, { ElementType, FC, HTMLProps, PropsWithChildren } from 'react'
import classNames from 'classnames'

export type Props<T> = {
  modifier?: string
} & PropsWithChildren<HTMLProps<T>>

export type FactoryProps = {
  tag: ElementType
  className: string
  styles: { [key: string]: string }
}

class HtmlElementComponentFactory {
  static create<T>(factoryProps: FactoryProps): FC<Props<T>> {
    const {
      tag: Tag,
      className: baseClassName,
      styles
    } = factoryProps
  
    return (props: Props<T>) => {
      const {
        className,
        modifier,
        children,
        ...rest
      } = props
  
      const newClassName = classNames([
        styles[`${baseClassName}`],
        styles[`${baseClassName}-${modifier || 'default'}`],
        className
      ])
  
      return (
        <Tag className={newClassName} {...rest}>
          {children}
        </Tag>
      )
    }
  }
}


export default HtmlElementComponentFactory