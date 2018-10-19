const labelNormal = {
    normal: {
        show: true,
        position: 'top'
    }
};

export const AreaConf = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    }
  },
    xAxis: {
        data: []
    },
    series: [
        {
            data: [],
            areaStyle: {},
            lineStyle: {
                width: 0
            },
            itemStyle: {
                opacity: 0
            }
        }
    ]
}

export const barConf = {
    legend: {
        right: 5,
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
    },
    grid: {},
    xAxis: {
        data: [],
    },
    yAxis:{
      splitLine: {
        show: false
      }
    },
    series: [
        {
            barWidth: 7,
            data: [],
        }, {
            barWidth: 7,
            data: [],
        }
    ]
};

export const pieConf = {
    color:['#00a0e0','#82cbae','#948c4b','#d49d00','#ce4543'],
    series: [
        {
            type: 'pie',
            radius: [
                '50%', '70%'
            ],
            label: {
                formatter: '{b}\n{c}'
            },
            data: []
        }
    ]
};

export const hourConf = {
    color: ['#467dc2'],
    grid: {},
    xAxis: {
        data: []
    },
    series: [
        {
            name: '今日数据',
            type: 'bar',
            barWidth: '30',
            data: [],
            label: labelNormal
        }, {
            name: '昨日数据',
            type: 'line',
            data: [],
            lineStyle: {
                color: '#84c816'
            }
        }, {
            name: '前7日均量',
            type: 'line',
            data: [],
            lineStyle: {
                color: '#d5362e'
            }
        }
    ]
};

export const tendencyConf = {
    color: ['#467dc2'],
    grid: {},
    xAxis: {
        data: []
    },
    series: [
        {
            name: '直接访问',
            barWidth: '30',
            data: [],
            markLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#8bba45',
                    width: 3
                },
                data: [
                    {
                        name: "近7日均量",
                        type: 'average',
                        lineStyle: {
                            color: '#ce4441'
                        }
                    }, {
                        name: "近28日均量",
                        yAxis: 100
                    }
                ]
            },
            label: labelNormal
        }
    ]
};
