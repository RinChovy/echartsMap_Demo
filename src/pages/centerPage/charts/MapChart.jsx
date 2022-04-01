import React, { PureComponent } from 'react';
import * as echarts from 'echarts';
import MapChart from 'components/Map';
import ningxia from './ningxia.json';
import { connect } from 'dva';

/**
 * 宁夏 map chart
 */

echarts.registerMap('ningxia', { geoJSON: ningxia });

@connect(({ centerPage }) => ({
  centerPage,
}))
class Map extends PureComponent {
  state = {
    index: 0, //循环用
    city: [],
    geoCoordMap: {
      石嘴山市: [106.391172, 38.988786],
      银川市: [106.239071, 38.490655],
      吴忠市: [106.204792, 38.003713],
      中卫市: [105.200693, 37.507532],
      固原市: [106.246275, 36.021619],
    },
    chartOptions: [],
    option: {
      id: 2,
    },
  };
  componentDidMount() {
    this.loopTime = setInterval(() => {
      this.props.dispatch({
        type: 'centerPage/fetchMap',
        payload: {},
      });
      console.log('我更新了');
    }, 600000);
    this.myfunc();
  }
  componentWillUnmount() {
    clearInterval(this.loopTime);
    clearInterval(this.loopTime2);
  }

  myfunc = () => {
    let chartIns = this.chartRef.chartRef.current.getEchartsInstance();
    let index = 0;
    let city = ['石嘴山市', '银川市', '吴忠市', '中卫市', '固原市'];
    this.loopTime2 = setInterval(function () {
      //判断长度是否和城市的长度一样，如果一样重新播放
      // 取消高亮指定的数据图形
      chartIns.dispatchAction({
        type: 'downplay',
        seriesName: 'ningxia',
        // dataIndex: index === 0 ? 4 : index - 1,
        name: city[index === 0 ? 4 : index - 1],
      });
      // 高亮指定的数据图形
      chartIns.dispatchAction({
        type: 'highlight',
        seriesName: 'ningxia',
        name: city[index],
      });
      chartIns.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        name: city[index],
      });
      if (index === 4) {
        index = 0;
      } else {
        index++;
      }
      // const dataLen = 5;
      // 取消之前高亮的图形
      // chartIns.dispatchAction({
      //   type: 'downplay',
      //   seriesIndex: 0,
      //   dataIndex: currentIndex,
      // });
      // currentIndex = (currentIndex + 1) % dataLen;
      // // 高亮指定的数据图形
      // chartIns.dispatchAction({
      //   type: 'highlight',
      //   seriesIndex: 0,
      //   dataIndex: currentIndex,
      // });
      // 显示 tooltip
    }, 5000);
  };

  render() {
    const { MapList } = this.props.centerPage;
    let list = [];
    MapList.forEach((v, k) => {
      list.push({ name: v.remark, count: v.count, money: v.money });
    });
    const option = {
      id: 1,
      tooltip: {
        formatter: params => {
          return `  
          <b>${params.data.name}</b><br/>
          <div style="line-height: 1;margin: 10px 0 0">
            <div style="line-height: 1">
              <span style="margin-left: 2px">交易占比</span>
              <span style="margin-left: 20px;font-weight: 900">${params.data.count}%</span>
            </div>
            <div style="line-height: 1;margin-top:0.1rem">
              <span style="margin-left: 2px">交易额：</span>
              <span style="margin-left: 20px;font-weight: 900">${params.data.money}（万元）</span>
            </div>
          </div>`;
        },
      },
      backgroundColor: 'transparent', //背景色s
      geo: {
        type: 'map',
        map: 'ningxia',
        roam: false,
        geoIndex: 1,
        zoom: 1.2, //
        // y: 100,
        // 标签样式
        itemStyle: {
          //地图区域的多边形 图形样式
          position: [-70, '0%'],
          areaColor: '#013C62', //地区颜色
          shadowColor: '#182f68', //阴影颜色
          shadowOffsetX: -10, //阴影偏移量
          shadowOffsetY: 5, //阴影偏移量
        },
        emphasis: {
          itemStyle: {
            areaColor: '#2AB8FF', //地区颜色
            label: {
              show: true, //是否在高亮状态下显示标签
            },
          },
        },
      },
      series: [
        //数据系列
        {
          type: 'map', //地图类型
          name: 'ningxia',
          selectedMode: 'multiple',
          // y: 100,
          tooltip: {
            transitionDuration: 0,
            trigger: 'item',
            position: function (point, params, dom, rect, size) {
              let x = 0; // x坐标位置
              let y = 0; // y坐标位置 // 当前鼠标位置
              let pointX = point[0];
              let pointY = point[1]; // 外层div大小 // var viewWidth = size.viewSize[0]; // var viewHeight = size.viewSize[1]; // 提示框大小
              let boxWidth = size.contentSize[0];
              let boxHeight = size.contentSize[1]; // boxWidth > pointX 说明鼠标左边放不下提示框
              // x = pointX - boxWidth - 10;
              // y = pointY - boxHeight;
              if (boxWidth > pointX) {
                x = pointX + 10;
              } else {
                // 左边放的下
                x = pointX - boxWidth + 200;
              } // boxHeight > pointY 说明鼠标上边放不下提示框
              if (boxHeight > pointY) {
                y = 5;
              } else {
                // 上边放得下
                y = pointY - boxHeight;
              }

              return [x - 100, y + 100];
            },
            backgroundColor: 'rgba(3, 67, 44, 0.4)',
            borderWidth: 1,
            borderColor: '#81FFFF',
            // padding: [8, 10], //内边距
            textStyle: {
              color: '#ffffff',
            },
            // extraCssText: '',
          },
          //地图上文字
          label: false,
          //地图区域的多边形 图形样式
          itemStyle: {
            borderColor: '#8fc7ec',
            borderWidth: 1,
            areaColor: {
              //地图色
              type: 'linear',
              x: 0,
              y: 50,
              x2: 100,
              y2: 0,
              colorStops: [
                {
                  offset: 0,
                  color: '#50BFED', // 0% 处的颜色
                },
                //   {
                //     offset: 0.5,
                //     color: '#345ad6', // 70% 处的颜色
                //   },
                {
                  offset: 1,
                  color: '#2948af', // 100% 处的颜色
                },
              ],
              global: true, // 缺省为 false
            },
          },
          zoom: 1.2, //当前视角的缩放比例
          //是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          roam: false,
          map: 'ningxia', //使用中国地图
          data: list,
          emphasis: {
            itemStyle: {
              borderColor: '#8fc7ec',
              areaColor: '#133CBA',
              borderWidth: 1,
            },
            show: true,
            label: {
              color: '#FFFFFF',
              fontSize: 16,
              fonWeight: 'bold',
            },
          },
        },
      ],
    };
    return (
      <>
        <MapChart
          ref={ref => {
            this.chartRef = ref;
          }}
          data={option}
          style={{ height: 'calc(100%)', zIndex: 1 }}
        />
      </>
    );
  }
}

export default Map;
