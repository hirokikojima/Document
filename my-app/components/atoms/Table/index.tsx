import HtmlElementComponentFactory from '../../factories/HtmlElementComponentFactory'
import styles from './styles.module.scss'

export const Table = HtmlElementComponentFactory.create({tag: 'table', className: 'Table', styles: styles})
export const TableRow = HtmlElementComponentFactory.create({tag: 'tr', className: 'TableRow', styles: styles})
export const TableHeader = HtmlElementComponentFactory.create({tag: 'th', className: 'TableHeader', styles: styles})
export const TableData = HtmlElementComponentFactory.create({tag: 'td', className: 'TableData', styles: styles})