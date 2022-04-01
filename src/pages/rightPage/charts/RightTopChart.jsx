import React, { PureComponent } from 'react';
import * as Echarts from 'echarts';
import { connect } from 'dva';
import PieChart from 'components/Pie';

@connect(({ rightPage }) => ({
  rightPage,
}))
class RightTopChart extends PureComponent {
  componentDidMount() {
    this.loopTime = setInterval(() => {
      this.props.dispatch({
        type: 'rightPage/fetchTransactions',
        payload: {},
      });
    }, 600000);
  }
  componentWillUnmount() {
    clearInterval(this.loopTime);
  }
  render() {
    const { transactionsOfChannels_one, transactionsOfChannels_two } = this.props.rightPage;
    const chartData = {
      color: [
        '#d0cbd3',
        '#352CFE',
        new Echarts.graphic.LinearGradient(1, 1, 0, 0, [
          {
            offset: 0,
            color: '#14DC3E',
          },
          {
            offset: 0.7,
            color: '#56FEE8',
          },
        ]),
        '#EACA75',
      ],
      tooltip: {
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
      legend: {
        right: 0,
        top: 'center',
        data: transactionsOfChannels_one,
        icon: 'pin',
        orient: 'vertical',
        textStyle: {
          //图例文字的样式
          color: '#ffffff',
          fontSize: 12,
        },
      },
      series: [
        {
          name: 'Area Mode',
          type: 'pie',
          radius: ['30%', '60%'],
          height: '100%',
          center: ['50%', '50%'],
          // roseType: 'radius',
          itemStyle: {
            // borderRadius: 5,
          },
          data: transactionsOfChannels_two,
          label: {
            // alignTo: 'edge',
            formatter: '{time|{c} %}',
            minMargin: 5,
            edgeDistance: 2,
            lineHeight: 15,
            rich: {
              time: {
                fontSize: 16,
                color: '#ffffff',
              },
            },
          },
          labelLine: {
            length: 15,
            length2: 0,
            maxSurfaceAngle: 80,
          },
        },
      ],
    };
    return (
      <>
        <PieChart
          ref={ref => {
            this.chartRef = ref;
          }}
          data={chartData}
          style={{ height: 'calc(100% - 0.24rem)' }}
          loopTime="5000"
        />
      </>
    );
  }
}

export default RightTopChart;
