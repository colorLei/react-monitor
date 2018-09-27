import moment from 'moment'
import echarts from "echarts/lib/echarts";

/**
   * 转换日期，eg:2016-6-18 20:00
   * @param {Date}
   * @return {String}
   */

  export const dfmt = (time, formatString = 'YYYY-MM-DD HH:mm:ss') => (time ? moment(time).format(formatString) : '')

  /**
 * 渲染图表
 * @param dataSource 数据源
 * @param htmlDom dom
 * @param type 类型 折线图（line）or 柱状图（bar）
 */
export const renderChart = (dataSource = {}, htmlDom, type) => {

  let myChart = echarts.getInstanceByDom(document.getElementById(htmlDom));
  if( myChart === undefined){
      myChart = echarts.init(document.getElementById(htmlDom));
      window.addEventListener("resize", function () {
          myChart.resize();
      });
  }
  let {xAxis, yAxis={}, series} = dataSource;
  if (myChart) {
      myChart.showLoading();
      if (dataSource) {
          myChart.hideLoading();
          myChart.setOption({
              textStyle: {
                color: '#fff'
              },
              legend: {
                  data: ''
              },
              xAxis: {
                  type: 'category',
                  axisLabel: {
                      interval: 0,
                      rotate: 45
                  },
                  axisLine: {
                    lineStyle: {
                        color:'#868686'
                    }
                  },
                  ...xAxis
              },
              yAxis: {
                  type: 'value',
                  axisLine: {
                    lineStyle: {
                        color:'#868686'
                    }
                  },
                  ...yAxis
              },
              series: series.map(iSeries => {
                  return {
                      ...iSeries,
                      type: type,
                      barWidth: '60%'
                  }
              })
          })
      }
  }
};
