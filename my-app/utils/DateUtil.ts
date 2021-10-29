export default {
  format(date: Date, format='yyyy/MM/dd') {
    return format
      .replace('yyyy', `${date.getFullYear()}`)
      .replace('MM', `${date.getMonth() + 1}`)
      .replace('dd', `${date.getDay()}`)
      .replace('HH', `${date.getHours()}`)
      .replace('mm', `${date.getMinutes()}`)
      .replace('ss', `${date.getSeconds()}`)
  }
}