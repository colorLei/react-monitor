const labelNormal =  {
  normal: {
      show: true,
      position: 'top'
  }
};

export const AreaConf = {
  xAxis: {
      data: [],
  },
  series: [{
      data: [],
      areaStyle: {},
      lineStyle:{
        width:0
      },
      itemStyle:{
        opacity:0
      }
  }]
}

export const barConf = {
  legend: {
      right:5,
      textStyle:{
        color:'#fff'
      },
  },
  grid: {
  },
  xAxis :{
      data : [],
  },
  yAxis : {
    show:false
  },
  series : [
      {
          barWidth : 7,
          data:[],
          label: labelNormal,
      },
      {
          barWidth : 7,
          data:[],
          label:labelNormal
      }
  ]
};

export const pieConf = {
  series: [
    {
        type:'pie',
        radius: ['50%', '70%'],
        label:{
          formatter:'{b}\n{c}'
        },
        data:[]
    }
]
};

export const hourConf =  {
  color: ['#467dc2'],
  grid: {},
  xAxis : {
        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  series : [
      {
          name:'近7日数据',
          type:'bar',
          barWidth: '30',
          data:[10, 52, 200, 334, 390, 330, 220],
          label: labelNormal
      },
      {
        name:'近7日均量',
        type:'line',
        data:[20, 62, 210, 344, 395, 337, 229],
        lineStyle:{
          color:'#84c816'
        }
      },
      {
        name:'近28日均量',
        type:'line',
        data:[25, 68, 218, 354, 399, 339, 239],
        lineStyle:{
          color:'#d5362e'
        }
      }
  ]
};

export const tendencyConf = {
  color: ['#467dc2'],
  grid: {},
  xAxis : {
        data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
  series : [
      {
          name:'直接访问',
          barWidth: '30',
          data:[10, 52, 200, 334, 390, 330, 220],
          markLine : {
            lineStyle:{
              type:'solid',
              color:'#8bba45',
              width:3
            },
            data : [
              {
                name:"近7日均量",
                type : 'average',
                lineStyle:{
                  color:'#ce4441',
                },
              },
              {
                name:"近28日均量",
                yAxis: 100
              },
            ]
          },
        label:labelNormal
      }
  ]
};
