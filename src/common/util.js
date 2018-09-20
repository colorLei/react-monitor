import moment from 'moment'

/**
   * 转换日期，eg:2016-6-18 20:00
   * @param {Date}
   * @return {String}
   */

  export const dfmt = (time, formatString = 'YYYY-MM-DD HH:mm:ss') => (time ? moment(time).format(formatString) : '')
