import React, { useEffect, useState } from 'react';
import { CenterPage, CenterTopBox, CenterBottomBox } from './style';
import { connect } from 'dva';
import DashboardChart from './charts/DashboardChart';
import RightBottomCharts from './charts/RightBottomCharts';
import LeftBottomChart from './charts/LeftBottomChart';
import LeftTopChart from './charts/LeftTopChart';
import ScrollNumber from 'components/ScrollNumber';
import bottomGyrate from '../../assets/bottom-gyrate.png';
import bottomCircle from '../../assets/bottom-circle.png';
import lightBeam from '../../assets/light-beam.png';
import haloCircle from '../../assets/halo-circle.png';
import MapChart from './charts/MapChartTest';
const Index = props => {
  const {
    dispatch,
    centerPage: { yearTradeStatData },
  } = props;
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  useEffect(() => {
    let loopTime = setInterval(() => {
      dispatch({
        type: 'centerPage/fetchYearTradeStat',
        payload: {},
      });
    }, 30000);
    return () => clearInterval(loopTime);
  }, []);
  useEffect(() => {
    setNum1(yearTradeStatData.mercCount);
    setNum2(yearTradeStatData.totalCount);
    setNum3(Number(yearTradeStatData.totalAmt));
  }, [yearTradeStatData]);
  return (
    <CenterPage>
      <CenterTopBox>
        <div className='center-top'>
          <span className='title'>累计单位数</span>
          <ScrollNumber numbers={num1} style={{ color: '#FFA42E', fontSize: '0.28rem', flex: 1 }}>
            <span className='unit'>家</span>
          </ScrollNumber>
        </div>
        <div className='center-top'>
          <span className='title'>累计交易量</span>
          <ScrollNumber numbers={num2} style={{ color: '#FFA42E', fontSize: '0.28rem', flex: 1 }}>
            <span className='unit'>笔</span>
          </ScrollNumber>
        </div>
        <div className='center-top'>
          <span className='title'>年累计收入</span>
          <ScrollNumber numbers={num3} style={{ color: '#FFA42E', fontSize: '0.28rem', flex: 1 }}>
            <span className='unit'>元</span>
          </ScrollNumber>
        </div>
      </CenterTopBox>

      {/* 底部图表 */}
      <CenterBottomBox>
        <div className='contain'>
          <div className='tbFlex'>
            <div>
              <div className='title'>月交易环比</div>
              <LeftTopChart></LeftTopChart>
            </div>
            <div>
              <div className='title'>按行业开票情况</div>
              <LeftBottomChart></LeftBottomChart>
            </div>
          </div>
          <div style={{ zIndex: 1 }}>
            <MapChart />
          </div>
          <div className='tbFlex'>
            <div>
              <div className='title'>单位激活率</div>
              <DashboardChart />
            </div>
            <div>
              <div className='title'>各行业单位激活情况</div>
              <RightBottomCharts></RightBottomCharts>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='bottomGyrate' style={{ backgroundImage: `url(${bottomGyrate})` }}></div>
          <div className='bottomCircle' style={{ backgroundImage: `url(${bottomCircle})` }}></div>
          <div className='lightBeam' style={{ backgroundImage: `url(${lightBeam})` }}></div>
          <div className='lightHalo' style={{ backgroundImage: `url(${haloCircle})` }}></div>
        </div>
      </CenterBottomBox>
    </CenterPage>
  );
};

// const mapStateToProps = ({ centerPage }) => {
//   return {
//     centerPage,
//   };
// };

// const mapStateToDispatch = dispatch => ({});

// export default connect(mapStateToProps, mapStateToDispatch)(Index);
export default connect(({ centerPage }) => ({
  centerPage,
}))(Index);
