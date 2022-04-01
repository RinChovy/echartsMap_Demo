export default {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(255,255,255,0.80)',
    borderColor: '#F1F1F1',
    borderWidth: 1,
    padding: [8, 16],
    textStyle: {
      color: '#666',
      fontSize: 10,
    },
    extraCssText: 'box-shadow:0 1px 4px 0 rgba(0,0,0,0.20);border-radius:4px;',
    formatter: '',
  },
  grid: {
    top: '50px',
    left: '0',
    right: '0',
    bottom: '0',
    containLabel: true,
  },
  xAxis: {
    axisLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    axisLabel: {
      textStyle: {
        fontSize: 10,
        color: '#fff',
      },
    },
    type: 'category',
    boundaryGap: true,
  },
  yAxis: [
    {
      type: 'value',
      axisLine: {
        show: true,
        lineStyle: {
          color: '#1945A9',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          fontSize: 10,
          color: '#fff',
        },
      },
      splitLine: {
        //网格线
        show: false,
        lineStyle: {
          color: '#f1f1f1',
        },
      },

      // boundaryGap: [0, '10%'],
    },
    {
      axisLine: {
        //坐标轴线
        show: true,
        lineStyle: {
          color: '#1945A9',
        },
      },
    },
  ],
};
