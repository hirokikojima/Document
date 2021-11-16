import HtmlElementComponentFactory from '../../factories/HtmlElementComponentFactory'
import styles from './styles.module.scss'

export const Container = HtmlElementComponentFactory.create({
  tag: 'div',
  className: 'Container',
  styles: styles
})

export const Row = HtmlElementComponentFactory.create({
  tag: 'div',
  className: 'Row',
  styles: styles
})

export const Col = HtmlElementComponentFactory.create({
  tag: 'div',
  className: 'Col',
  styles: styles
})