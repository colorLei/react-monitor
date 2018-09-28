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

const labelNormal =  {
  normal: {
      show: true,
      position: 'top'
  }
};

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
