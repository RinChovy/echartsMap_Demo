import React, { PureComponent } from 'react';
import BarChart from 'components/BarChart';

import * as echarts from 'echarts';
import { connect } from 'dva';
@connect(({ leftPage }) => ({
  leftPage,
}))
class LeftBottomChart extends PureComponent {
  componentDidMount() {
    this.loopTime = setInterval(() => {
      this.props.dispatch({
        type: 'leftPage/fetchPayCategoryTop',
        payload: {},
      });
    }, 600000);
  }
  componentWillUnmount() {
    clearInterval(this.loopTime);
  }

  render() {
    const { payCategoryTopData } = this.props.leftPage;
    const option = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0,13,57,0.7)', // 背景
        borderWidth: 0,
        padding: [8, 10], //内边距
        textStyle: {
          color: '#ffffff',
        },
        formatter: params => {
          const curData = payCategoryTopData[params[0].dataIndex];
          return `<b>${curData['categoryName']}</b><br/>
            <div style="line-height: 1;margin: .1rem 0 0">
              <div style="line-height: 1">
                <span style="margin-left: .02rem">交易额：</span>
                <span style="margin-left: .2rem;font-weight: 900">${curData['amt']}（万元）</span>
              </div>

            </div>`;
        },
      },
      grid: {
        top: '5%',
        left: 0,
        right: '15%',
        bottom: 0,
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        show: false,
        splitLine: {
          //网格线
          show: false,
        },
      },
      yAxis: {
        type: 'category',
        data: payCategoryTopData.map(t => t.categoryName),
        axisTick: {
          show: false, // 不展示凸出来的数据标志
        },
        axisLabel: {
          interval: 0, //横轴信息全部显示
          rotate: 0, //0度角倾斜显示
          show: true,
          color: '#fff', // 坐标轴数值的颜色
        },
        axisLine: {
          lineStyle: {
            color: '#1945A9 ', // 坐标轴的颜色
          },
        },
        axisPointer: {
          label: {
            show: true,
            color: '#00ADFE',
            backgroundColor: 'none',
            padding: [0, 5, 0, 0],
          },
        },
      },

      series: [
        {
          barWidth: 8, //柱宽度
          name: '2012',
          type: 'bar',
          data: payCategoryTopData.map(t => (t.amt ? Number(t.amt) : 0)),
          label: {
            show: true,
            position: 'right',
            textStyle: {
              //数值样式
              color: '#fff',
              fontSize: '12',
            },
          },
          itemStyle: {
            normal: {
              barBorderRadius: [0, 3, 3, 0],
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#0072FF ' }, //柱图渐变色
                { offset: 1, color: '#58D5D9' }, //柱图渐变色
              ]),
            },
          },
        },
      ],
    };
    return (
      <BarChart
        ref={ref => {
          this.chartRef = ref;
        }}
        data={option}
        style={{ height: '100%' }}
        loopTime='5000'
      />
    );
  }
}

export default LeftBottomChart;
