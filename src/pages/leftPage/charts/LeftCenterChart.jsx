import React, { PureComponent } from 'react';
import * as echarts from 'echarts';
import { LeftCenterDiv } from '../style';
import LineChart from 'components/Line';
import { connect } from 'dva';

@connect(({ leftPage }) => ({
  leftPage,
}))
class LeftCenterChart extends PureComponent {
  componentDidMount() {
    this.loopTime = setInterval(() => {
      this.props.dispatch({
        type: 'leftPage/fetchMonthOfYearStat',
        payload: {},
      });
    }, 600000);
  }
  componentWillUnmount() {
    clearInterval(this.loopTime);
  }
  render() {
    const { monthOfYearStatData } = this.props.leftPage;
    let option = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0,13,57,0.7)', // 背景
        borderWidth: 0,
        padding: [8, 10], //内边距
        textStyle: {
          color: '#ffffff',
        },
        formatter: params => {
          const curData = monthOfYearStatData[params[0].dataIndex];
          return `<b>${curData['month']}</b><br/>
            <div style="line-height: 1;margin: .1rem 0 0">
              <div style="line-height: 1">
                <span style="margin-left: .02rem">交易额：</span>
                <span style="margin-left: .2rem;font-weight: 900">${curData['money']}（万元）</span>
              </div>
              <div style="line-height: 1;margin-top:0.1rem">
                <span style="margin-left: .02rem">交易量：</span>
                <span style="margin-left: .2rem;font-weight: 900">${curData['count']}（万笔）</span>
              </div>
            </div>`;
        },
      },
      grid: {
        top: '4%',
        left: 0,
        right: '3%',
        bottom: 0,
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: monthOfYearStatData.map(t => t.month),
        axisLabel: {
          show: true,
          textStyle: { color: '#fff' },
        },
        axisTick: {
          //x轴刻度线
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: '#1945A9', // 坐标轴的颜色
          },
        },
        axisPointer: {
          label: {
            show: true,
            color: '#00ADFE',
            backgroundColor: 'none',
            padding: [5, 0, 0, 0],
          },
        },
      },
      yAxis: [
        {
          type: 'value',
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
          splitLine: {
            //网格线
            show: false,
            lineStyle: {
              color: '#f1f1f1',
            },
          },
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
      series: [
        {
          name: 'Line 1',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 2,
            color: '#ECBB4B',
          },
          showSymbol: true,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: '#00EAFF',
              },
              {
                offset: 0,
                color: '#ECBB4B',
              },
            ]),
          },
          itemStyle: {
            normal: {
              color: '#ECBB4B', //折线点的颜色
            },
          },
          emphasis: {
            // focus: "series",
          },
          data: monthOfYearStatData.map(t => (t.money ? Number(t.money) : 0)),
        },
        {
          name: 'Line 2',
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 2,
            color: '#00D2FF',
          },
          showSymbol: true,
          itemStyle: {
            normal: {
              color: '#00EAFF', //折线点的颜色
            },
          },
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 1,
                color: '#00EAFF',
              },
              {
                offset: 0,
                color: '#0175BF',
              },
            ]),
          },
          emphasis: {
            // focus: "series",
          },
          data: monthOfYearStatData.map(t => (t.count ? Number(t.count) : 0)),
        },
      ],
    };
    return (
      <LeftCenterDiv>
        <div className="legend">
          <div>交易额</div>
          <div>交易量</div>
        </div>
        <LineChart
          ref={ref => {
            this.chartRef = ref;
          }}
          data={option}
          style={{ height: 'calc(100% - 0.5rem)' }}
          loopTime="5000"
        />
      </LeftCenterDiv>
    );
  }
}

export default LeftCenterChart;
