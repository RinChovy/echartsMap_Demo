import React, { PureComponent } from 'react';
import BarChart from 'components/BarChart';
import * as echarts from 'echarts';
import { connect } from 'dva';

/**
 * 年度缴费对比
 */

@connect(({ leftPage }) => ({
  leftPage,
}))
class LeftTopChart extends PureComponent {
  componentDidMount() {
    this.loopTime = setInterval(() => {
      this.props.dispatch({
        type: 'leftPage/fetchYearCompStat',
        payload: {},
      });
    }, 600000);
  }
  componentWillUnmount() {
    clearInterval(this.loopTime);
  }

  render() {
    const { yearCompStatData } = this.props.leftPage;
    const data = yearCompStatData?.map(t => (t.money ? Number(t.money) : 0)) || [];
    const slideData =
      yearCompStatData?.map(t => (t.money ? Number(t.money) + Number(t.money) / 60 : 0)) || [];
    const chartData = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(0,13,57,0.7)', // 背景
        borderWidth: 0,
        padding: [8, 10], //内边距
        textStyle: {
          color: '#ffffff',
        },
        formatter: params => {
          const curData = yearCompStatData[params[0].dataIndex] || {};
          return `<b>${curData['year']}</b><br/>
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
        // 整体位置
        left: 0, // 距离左侧距离
        bottom: 0, // 距离低侧距离
        top: 10, // 距离顶部距离
        right: 0, // 距离右侧距离
        height: 'auto',
        width: 'auto',
        containLabel: true,
      },
      xAxis: [
        // 横坐标配置项
        {
          type: 'category',
          data: yearCompStatData?.map(t => t.year) || [],
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
              color: '#3376C4', // 坐标轴的颜色
            },
          },
          axisPointer: {
            label: {
              show: true,
              color: '#00ADFE',
              backgroundColor: 'none',
              padding: [5, 0, 0, 0],
            },
            // type: 'shadow',
          },
        },
      ],
      yAxis: {
        // 纵坐标配置项
        type: 'value',
        axisLine: {
          show: true,
          lineStyle: {
            color: '#1945A9',
          },
        },
        axisLabel: {
          color: '#fff',
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#1945A9',
            type: 'dashed',
          },
        }, // 不展示横向的网格线
      },
      series: [
        // 数据配置项（柱状图）
        {
          // 正面
          data: data, // 柱体数据
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: '#0F2BD6', // 0% 处的颜色
                  },
                  // {
                  //   offset: 0.5,
                  //   color: '#3077F7', // 50% 处的颜色
                  // },
                  {
                    offset: 1,
                    color: '#63FFBF', // 100% 处的颜色
                  },
                ],
                false
              ),
            },
          },
          barWidth: 24, // 柱体的宽度
          barGap: 0, // 柱体间隔
          barCategoryGap: 200,
        },
        {
          // 侧面
          tooltip: {
            show: false,
          },
          barWidth: 8,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                1,
                0,
                0,
                [
                  {
                    offset: 0,
                    color: '#63FFBF', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#0F84D6', // 100% 处的颜色
                  },
                ],
                false
              ),
            },
          },
          data: slideData,
          barGap: 0,
        },
        {
          // 顶部
          tooltip: {
            show: false,
          },
          type: 'pictorialBar',
          itemStyle: {
            borderWidth: 0,
            borderColor: '#47A6FF',
            color: '#1AC0F4',
          },
          symbol: 'path://M 90,90 l 120,30 l 0,100 l -120, -30', // 控制顶部的倾斜和形状
          symbolRotate: 90,
          symbolSize: ['2', '30'],
          symbolOffset: ['-1', '-16'], // 左右 ，上下
          symbolPosition: 'end',
          data: data,
          z: 3,
        },
      ],
    };

    return (
      <BarChart
        ref={ref => {
          this.chartRef = ref;
        }}
        data={chartData}
        style={{ height: 'calc(100% - 0.24rem)' }}
        loopTime="5000"
      />
    );
  }
}

export default LeftTopChart;
