import { DashboardV } from '../style';
import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';
import dashboard from '../../../assets/dashboard.png';
import dashboardRingg from '../../../assets/dashboardRing.png';
import dashboardOuter from '../../../assets/dashboardOuter.png';
import { connect } from 'dva';
let pointR;
@connect(({ centerPage }) => ({
  centerPage,
}))
class DashboardChart extends PureComponent {
  state = {
    valOnRadianMax: 100,
    outerRadiusSmal: 66,
    outerRadiusBig: 82,
    pointerInnerRadius: 20,
  };
  componentDidMount() {
    this.loopTime = setInterval(() => {
      this.props.dispatch({
        type: 'centerPage/fetchMercActivateStat',
        payload: {},
      });
    }, 600000);
  }

  componentWillUnmount() {
    clearInterval(this.loopTime);
  }

  renderItem = (params, api) => {
    let valOnRadian = api.value(1);
    let coords = api.coord([api.value(0), valOnRadian]);
    let polarEndRadian = coords[3];
    let canvsW = params.coordSys.cx * 2;
    let outerW = (canvsW * 1) / 2; // 设置背景图是canvs宽度的3/5
    let innerW = (outerW * this.state.outerRadiusSmal) / this.state.outerRadiusBig;
    pointR = (outerW * this.state.pointerInnerRadius) / this.state.outerRadiusBig;
    let imageStyle = {
      image: dashboard,
      x: params.coordSys.cx - innerW / 2,
      y: params.coordSys.cy - innerW / 2,
      width: innerW,
      height: innerW,
    };

    let imageStyle1 = {
      image: dashboardOuter,
      x: params.coordSys.cx - outerW / 2,
      y: params.coordSys.cy - outerW / 2,
      width: outerW,
      height: outerW,
    };
    let imageStyle2 = {
      image: dashboardRingg,
      x: params.coordSys.cx - innerW / 2,
      y: params.coordSys.cy - innerW / 2,
      width: innerW,
      height: innerW,
    };
    return {
      type: 'group',
      children: [
        // 背景圆
        {
          type: 'image',
          style: imageStyle1,
        },
        // 圆环
        {
          type: 'image',
          style: imageStyle,
          clipPath: {
            type: 'sector',
            shape: {
              cx: params.coordSys.cx,
              cy: params.coordSys.cy,
              r: innerW / 2,
              startAngle: Math.PI / 2 + (Math.PI * 23) / 100,
              endAngle: (-polarEndRadian * 77) / 100 + Math.PI / 2 + (Math.PI * 23) / 100,
              transition: 'endAngle',
              enterFrom: { endAngle: Math.PI / 2 + (Math.PI * 23) / 100 },
            },
          },
        },
        // 亮针-一条线
        {
          type: 'image',
          style: imageStyle2,
          clipPath: {
            type: 'polygon',
            shape: {
              points: this.makePionterPoints(params, polarEndRadian, outerW / 2),
            },
            extra: {
              polarEndRadian: (polarEndRadian * 77) / 100 - Math.PI / 2 - (Math.PI * 23) / 100,
              transition: 'polarEndRadian',
              enterFrom: { polarEndRadian: -Math.PI / 2 - +(Math.PI * 23) / 100 },
            },
            during: apiDuring => {
              apiDuring.setShape(
                'points',
                this.makePionterPoints(params, apiDuring.getExtra('polarEndRadian'), outerW / 2)
              );
            },
          },
        },
        // 百分比
        {
          type: 'text',
          extra: {
            valOnRadian: valOnRadian,
            transition: 'valOnRadian',
            enterFrom: { valOnRadian: 0 },
          },
          style: {
            text: this.makeText(valOnRadian),
            fontSize: 24,
            fontWeight: 700,
            x: params.coordSys.cx,
            y: params.coordSys.cy,
            fill: 'rgb(0,150,190)',
            align: 'center',
            verticalAlign: 'middle',
            enterFrom: { opacity: 0 },
          },
          during: apiDuring => {
            apiDuring.setStyle('text', this.makeText(apiDuring.getExtra('valOnRadian')));
          },
        },
      ],
    };
  };

  convertToPolarPoint = (renderItemParams, radius, radian) => {
    return [
      Math.cos(radian) * radius + renderItemParams.coordSys.cx,
      -Math.sin(radian) * radius + renderItemParams.coordSys.cy,
    ];
  };

  makePionterPoints = (renderItemParams, polarEndRadian, outerW) => {
    return [
      this.convertToPolarPoint(renderItemParams, outerW, polarEndRadian),
      this.convertToPolarPoint(renderItemParams, outerW, polarEndRadian + Math.PI * 0.02),
      this.convertToPolarPoint(renderItemParams, pointR, polarEndRadian),
    ];
  };

  makeText = valOnRadian => {
    // Validate additive animation calc.
    if (valOnRadian < -10) {
      // alert('illegal during val: ' + valOnRadian);
    }
    return ((valOnRadian / this.state.valOnRadianMax) * 100).toFixed(0) + '%';
  };

  render() {
    const { mercActivateStatData } = this.props.centerPage;
    let { growth, rate } = mercActivateStatData;
    // console.log('growthgrowth', growth.includes('-'));
    let nextSource = [[1, rate]];
    // let nextSource = [[1, 50]];
    let chartOptions = {
      animationEasing: 'quarticInOut',
      animationDuration: 1000,
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'quarticInOut',
      dataset: {
        source: nextSource,
      },
      // tooltip: {},
      angleAxis: {
        type: 'value',
        startAngle: 0,
        show: false,
        min: 0,
        max: this.state.valOnRadianMax,
      },
      radiusAxis: {
        type: 'value',
        show: false,
      },
      polar: {},
      series: [
        {
          type: 'custom',
          coordinateSystem: 'polar',
          renderItem: this.renderItem,
        },
      ],
    };

    return (
      <DashboardV>
        <ReactEcharts
          option={chartOptions}
          notMerge={true}
          lazyUpdate={true}
          style={{ height: 'calc(100% - 0.8rem)' }}
        />
        <div className='describeV'>
          <span className='describeText'>同比</span>
          <span className='describeRate'>{growth}%</span>
          {/* {Math.abs(Number(growth))} */}
          <span className='arrow' style={{ color: growth.includes('-') ? '#29f129' : '#ff3c00' }}>
            {growth.includes('-') ? '↓' : '↑'}
          </span>
        </div>
      </DashboardV>
    );
  }
}

export default DashboardChart;
