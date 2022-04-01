import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { Leftbottom } from '../style';
import { connect } from 'dva';
import BarChart from 'components/BarChart';

/**
 * 月缴费行业排名
 */

@connect(({ centerPage }) => ({
  centerPage,
}))
class LeftBottomChart extends Component {
  componentDidMount() {
    this.loopTime = setInterval(() => {
      this.props.dispatch({
        type: 'centerPage/fetchEinvoiceStat',
        payload: {},
      });
    }, 600000);
  }
  componentWillUnmount() {
    clearInterval(this.loopTime);
  }
  shouldComponentUpdate(nextProps, nextState) {
    const { centerPage: nextPage } = nextProps;
    const { centerPage: curPage } = this.props;
    if (JSON.stringify(nextPage.einvoiceStatData) !== JSON.stringify(curPage.einvoiceStatData)) {
      return true;
    }
    return false;
  }
  render() {
    const { einvoiceStatData } = this.props.centerPage;
    console.log('einvoiceStatData', einvoiceStatData);
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
          const curData = einvoiceStatData[params[0].dataIndex];
          return `<b>${curData['categoryName']}</b><br/>
            <div style="line-height: 1;margin: .1rem 0 0">
              <div style="line-height: 1">
                <span style="margin-left: .02rem">开票金额：</span>
                <span style="margin-left: .2rem;font-weight: 900">${curData['totalMoney']}（万元）</span>
              </div>
              <div style="line-height: 1;margin-top:.1rem">
                <span style="margin-left: .02rem">开票张数：</span>
                <span style="margin-left: .2rem;font-weight: 900">${curData['successEinvoice']}（万张）</span>
              </div>
            </div>`;
        },
      },
      grid: {
        top: '10%',
        left: 0,
        right: '4%',
        bottom: 0,
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: einvoiceStatData.map(t => t.categoryName),
          axisTick: {
            //x轴刻度线
            show: false,
          },
          axisLabel: {
            show: true,
            interval: 0, //横轴信息全部显示
            rotate: 30, //0度角倾斜显示
            textStyle: {
              color: '#fff',
            },
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          color: '#fff',
          axisLabel: {
            show: true,
            interval: 0, //横轴信息全部显示
            rotate: 0, //0度角倾斜显示
            textStyle: {
              color: '#fff',
            },
            formatter: '{value} 万元',
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#1945A9',
            },
          },
          splitLine: {
            //网格线
            lineStyle: {
              color: ['#1945A9'],
              width: 1,
              type: 'solid',
            },
          },
        },
        {
          type: 'value',
          color: '#fff',
          axisLine: {
            // show: true,
            // lineStyle: {
            //   color: '#1945A9',
            // },
          },
          axisLabel: {
            formatter: '{value}万张',
            align: 'left',
            textStyle: {
              color: '#fff',
              // fontSize: '10',
            },
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          barWidth: 20, //柱宽度
          name: '交易额',
          type: 'bar',
          data: einvoiceStatData.map(t => (t.totalMoney ? Number(t.totalMoney) : 0)),
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#8A62FD ' }, //柱图渐变色
                { offset: 1, color: '#0066FF' }, //柱图渐变色
              ]),
            },
          },
        },

        {
          name: '交易量',
          type: 'line',
          yAxisIndex: 1,
          itemStyle: {
            normal: {
              color: '#FFC600',
              lineStyle: {
                width: 2,
                color: '#FFC600',
              },
            },
          },
          label: {
            show: true,
            textStyle: {
              //数值样式
              color: '#FFEAA1',
              fontSize: '12',
            },
            position: 'top',
          },
          data: einvoiceStatData.map(t => (t.successEinvoice ? Number(t.successEinvoice) : 0)),
        },
      ],
    };
    return (
      <Leftbottom>
        <div className='legend'>
          <div>金额（万元）</div>
          <div>
            <div className='numWarp'>
              <div className='yellowLine'></div>
              <div className='yellowCricle'></div>
            </div>
            <div className='num'>发票（万张）</div>
          </div>
        </div>
        <BarChart
          ref={ref => {
            this.chartRef = ref;
          }}
          data={option}
          loopTime='5000'
          style={{ height: 'calc(100% - 0.65rem)' }}
        />
      </Leftbottom>
    );
  }
}

export default LeftBottomChart;
