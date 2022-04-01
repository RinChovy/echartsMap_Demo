import React, { PureComponent, createRef } from 'react';
import * as echarts from 'echarts';
// import MapChart from 'components/Map';
import ningxia from './ningxia.json';
import { connect } from 'dva';

/**
 * 宁夏 map chart
 */

echarts.registerMap('ningxia', { geoJSON: ningxia });

@connect(({ centerPage }) => ({
  centerPage,
}))
class MapTest extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef();
  }
  state = {
    index: 0, //循环用
    city: ['石嘴山市', '银川市', '吴忠市', '中卫市', '固原市'],
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
    }, 600000);
    this.init();
    setInterval(() => {
      this.effectMap();
    }, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.loopTime);
  }

  effectMap = () => {
    const { chartOptions, index, geoCoordMap } = this.state;
    const { MapList } = this.props.centerPage;
    chartOptions.series[0].data = [
      {
        name: MapList[index].remark,
        count: MapList[index].count,
        money: MapList[index].money,
        selected: true,
      },
    ];
    chartOptions.series[1].data = [
      {
        name: MapList[index].remark,
        value: geoCoordMap[MapList[index].remark],
        conut: MapList[index].count,
        money: MapList[index].money,
      },
    ];
    let curIndex = index + 1;
    if (curIndex >= 5) {
      curIndex = 0;
    }
    this.setState({ chartOptions, index: curIndex });
    let myChart = echarts.init(this.titleRef.current);
    myChart.setOption(chartOptions, true);
  };

  init = () => {
    const { MapList } = this.props.centerPage;
    let list = [];
    MapList.forEach((v, k) => {
      list.push({ name: v.remark, count: v.count, money: v.money, selected: true });
    });
    const option = {
      id: 1,
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
          //选中
          select: {
            itemStyle: {
              areaColor: '#133CBA',
            },
            label: {
              show: false,
            },
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
          data: [],
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
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          z: 5,
          data: [],
          // data: [],
          symbolSize: 14,

          label: {
            show: true,
            normal: {
              show: true,
              formatter: function (params) {
                return (
                  '{fline|区划：' +
                  params.data.name +
                  '}\n{tline|总交易额：' +
                  params.data.conut +
                  '(万元)}\n{tline|总交易量：' +
                  params.data.conut +
                  '(万笔)}'
                );
              },

              position: 'bottom',
              backgroundColor: 'rgba(3, 67, 44, 0.4)',
              borderWidth: 1,
              borderColor: '#81FFFF',
              // backgroundColor: 'transparent',
              padding: [10, 10],
              borderRadius: 3,
              // lineHeight: 32,
              color: '#f7fafb',
              rich: {
                fline: {
                  padding: [0, 10, 10, 10],
                  color: '#ffffff',
                },
                tline: {
                  padding: [10, 10, 0, 10],
                  color: '#ffffff',
                },
              },
            },
            emphasis: {
              show: true,
            },
          },
          itemStyle: {
            color: '#feae21',
          },
        },
      ],
    };
    this.setState({
      chartOptions: option,
    });
    let myChart = echarts.init(this.titleRef.current);
    myChart.setOption(option, true);
  };
  // myfunc = () => {
  //   let chartIns = this.chartRef.chartRef.current.getEchartsInstance();
  //   let index = 0;
  //   let city = ['石嘴山市', '银川市', '吴忠市', '中卫市', '固原市'];

  //   }, 1000);
  // };

  render() {
    return (
      <>
        <div ref={this.titleRef} style={{ height: 'calc(100%)', zIndex: 1 }}></div>
      </>
    );
  }
}

export default MapTest;
