import React, { PureComponent } from 'react';
import * as Echarts from 'echarts';
import { connect } from 'dva';
import PieChart from 'components/Pie';
import { DashboardV } from '../style';

/**
 * 月交易环比
 */

@connect(({ centerPage }) => ({
  centerPage,
}))
class leftTopChart extends PureComponent {
  componentDidMount() {
    this.loopTime = setInterval(() => {
      this.props.dispatch({
        type: 'centerPage/fetchMonthCircleCompStat',
        payload: {},
      });
    }, 600000);
  }
  componentWillUnmount() {
    clearInterval(this.loopTime);
  }

  render() {
    const { monthCircleCompStatData } = this.props.centerPage;
    let listT = [];
    let count = monthCircleCompStatData.growth ? monthCircleCompStatData.growth : 0;
    listT.push({ name: '上月交易金额', value: monthCircleCompStatData.lastMonth });
    listT.push({ name: '当月交易金额', value: monthCircleCompStatData.thisMonth });
    const chartData = {
      title: [
        {
          text: Math.abs(count) + '%',
          x: '38%',
          top: '33%',
          textStyle: {
            fontSize: 22,
            fontWeight: 'normal',
            color: '#f2a33a',
          },
        },
        {
          text: '环比',
          left: '48%',
          top: '52%',
          textAlign: 'center',
          textStyle: {
            fontSize: 19,
            fontWeight: '600',
            color: '#7ed9c3',
          },
        },
        {
          text: count < 0 ? '↓' : '↑',
          left: '58%',
          top: '33%',
          textAlign: 'center',
          textStyle: {
            fontSize: 22,
            fontWeight: '600',
            color: count < 0 ? '#29f129' : '#ff3c00',
          },
        },
      ],
      color: [
        '#d0cbd3',
        '#352CFE',
        new Echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: '#69e4cd',
          },
          // {
          //   offset: 0.7,
          //   color: '#081df5',
          // },
        ]),
        '#6ee8f9',
      ],
      tooltip: {
        show: false,
        trigger: 'item',
        backgroundColor: 'rgba(0,13,57,0.7)', // 背景
        borderWidth: 0,
        padding: [8, 10], //内边距
        textStyle: {
          color: '#ffffff',
        },
        formatter: params => {
          return `<b>${params.data.name}</b><br/>
            <div style="line-height: 1;margin: 10px 0 0">
              <div style="line-height: 1">
                <span style="margin-left: 2px">交易占比</span>
                <span style="margin-left: 20px;font-weight: 900">${params.data.value}%</span>
              </div>
              <div style="line-height: 1;margin-top:0.1rem">
                <span style="margin-left: 2px">交易额：</span>
                <span style="margin-left: 20px;font-weight: 900">${params.data.value2}（万元）</span>
              </div>
            </div>`;
        },
      },
      series: [
        {
          name: '',
          type: 'pie',
          hoverAnimation: false,
          legendHoverLink: false,
          cursor: 'default',
          radius: ['52%', '55%'],
          center: ['50%', '50%'],
          color: ['rgba(253, 160, 0, 0.2)'],
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          zlevel: 1,
          itemStyle: {
            normal: {
              borderColor: '#6b47b4',
              shadowBlur: 15,
              shadowColor: '#6b47b4',
              borderWidth: '0',
              color: '#6b47b4',
            },
          },
          tooltip: {
            show: false,
          },
          data: [
            {
              value: 41,
              name: '',
            },
          ],
        },
        {
          name: 'Area Mode',
          type: 'pie',
          radius: ['55%', '65%'],
          height: '100%',
          center: ['50%', '50%'],
          // roseType: 'radius',
          itemStyle: {
            // borderRadius: 5,
          },
          data: listT,
          label: {
            position: 'outer',
            alignTo: 'none', // 'labelLine'：label line 的末端对齐，其中最短的长度由 labelLine.length2 决定
            // alignTo: 'labelLine',
            formatter: '{time|{b}\n{c}万}',
            minMargin: 5,
            edgeDistance: 2,
            lineHeight: 15,
            rich: {
              time: {
                fontSize: 11,
                color: '#ffffff',
              },
            },
          },
          labelLine: {
            length: 1,
            length2: 0,
            maxSurfaceAngle: 80,
          },
        },
      ],
    };
    return (
      <DashboardV>
        <PieChart
          ref={ref => {
            this.chartRef = ref;
          }}
          data={chartData}
          style={{ height: 'calc(100% - 0.6rem)' }}
          // loopTime='5000'
        />
      </DashboardV>
    );
  }
}

export default leftTopChart;
