import moment from 'moment'
import echarts from "echarts/lib/echarts";

/**
   * 转换日期，eg:2016-6-18 20:00
   * @param {Date}
   * @return {String}
   */

export const dfmt = (time, formatString = 'YYYY-MM-DD HH:mm:ss') => (time
    ? moment(time).format(formatString)
    : '')

/**
 * 渲染图表
 * @param dataSource 数据源
 * @param htmlDom dom
 * @param type 类型 折线图（line）or 柱状图（bar）or 饼图（pie）
 */
export const renderChart = (dataSource = {}, htmlDom, type) => {

    let myChart = echarts.getInstanceByDom(document.getElementById(htmlDom));
    if (myChart === undefined) {
      myChart = echarts.init(document.getElementById(htmlDom));
      myChart.showLoading();
      window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    let {
        xAxis,
        yAxis = {},
        series,
        legend,
        grid,
        color
    } = dataSource;
    if (myChart) {
        if (dataSource) {
            const options = type === 'pie'
                ? dataSource
                : {
                    color,
                    textStyle: {
                        color: '#fff'
                    },
                    legend,
                    grid: grid && {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        axisLabel: {
                            interval: 0,
                            rotate: 45
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#868686'
                            }
                        },
                        ...xAxis
                    },
                    yAxis: {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#868686'
                            }
                        },
                        ...yAxis
                    },
                    series: series.map(iSeries => {
                        return {
                          type: type,
                          ...iSeries
                        }
                    })
                }
            myChart.setOption(options)
            myChart.hideLoading();
        }
    }
};

export const numWithSpace = (num = 0) => (
  nfmt(num).split('').join(' ').replace(/,\s+/g,',')
)

export const nfmt = (num = 0) => (
  num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,")
)

export const deepCopyObject = (obj = {}) => (
  JSON.parse(JSON.stringify(obj))
)


