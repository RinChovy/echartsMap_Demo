import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import Echarts from 'echarts-for-react';

/**
 * BaseChart
 */

export default class BaseChart extends PureComponent {
  static propTypes = {
    option: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
    getOption: PropTypes.func.isRequired,
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {},
  };

  chartRef = createRef();

  componentDidMount() {
    const { runAction } = this.props;
    if (this.chartRef && runAction) {
      const chartIns = this.chartRef.getEchartsInstance();
      window.setTimeout(() => {
        runAction(chartIns);
      }, 300);
    }
  }

  getSnapshotBeforeUpdate() {
    const { loopTime, data } = this.props;
    if (loopTime) {
      this.loop && clearInterval(this.loop);
      const chartIns = this.chartRef.current.getEchartsInstance();
      let currentIndex = 0;
      let dataLen = data?.series[0].data.length || 1;

      this.loop = setInterval(() => {
        currentIndex = (currentIndex + 1) % dataLen;
        chartIns.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
        // currentIndex = dataLen - currentIndex <= 1 ? 0 : ++currentIndex;
      }, loopTime);
    }
    return null;
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.loopTime);
  }

  render() {
    const { option, data, getOption, style } = this.props;

    const finalOption = getOption(option, data);
    const finalStyle = getStyle(style);

    return (
      <Echarts
        // ref={ref => {
        //   this.chartRef = ref;
        // }}
        ref={this.chartRef}
        style={finalStyle}
        option={finalOption}
        notMerge
        lazyUpdate
      />
    );
  }
}

function getStyle(style) {
  return Object.assign(
    {
      position: 'relative',
      // width: '100%',
      // height: '100%',
      // tranform: 'translate3d(0, 0, 0)',
    },
    style
  );
}
