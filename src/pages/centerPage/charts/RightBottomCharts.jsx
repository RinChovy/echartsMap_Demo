import { ActCirdiv } from '../style';
import React, { PureComponent } from 'react';
import { connect } from 'dva';

const xAxis = ['0%', '20.0%', '40.0%', '60.0%', '80.0%', '100.0%'];
@connect(({ centerPage }) => ({
  centerPage,
}))
class RightBottomCharts extends PureComponent {
  componentDidMount() {
    this.loopTime = setInterval(() => {
      this.props.dispatch({
        type: 'centerPage/fetchPayCategoryActivateStat',
        payload: {},
      });
    }, 600000);
  }
  componentWillUnmount() {
    clearInterval(this.loopTime);
  }
  render() {
    const { payCategoryActivateStatData } = this.props.centerPage;

    return (
      <ActCirdiv>
        <div className="legend">
          <div>已激活</div>
          <div>未激活</div>
        </div>
        <div className="linediv">
          {payCategoryActivateStatData.map((item, index) => {
            return (
              <div className="circumstanceRow" key={index}>
                <div className="activename">{item.categoryName}</div>
                <div className="rightLine">
                  <div>
                    <div className="activeDescribe">
                      {item.active}个&nbsp;&nbsp;{item.activePercent}%
                    </div>
                    <div
                      className="activedline"
                      style={{ width: (item.activePercent * 2.6) / 100 + 'rem' }}
                    ></div>
                  </div>
                  <div>
                    <div className="unactiveDescribe">
                      {item.unactive}个&nbsp;&nbsp;
                      {item.unactivePercent}%
                    </div>
                    <div
                      className="unactivedline"
                      style={{ width: (item.unactivePercent * 2.6) / 100 + 'rem' }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="xAxis">
            {xAxis.map((item, index) => {
              return <div key={index}>{item}</div>;
            })}
          </div>
        </div>
      </ActCirdiv>
    );
  }
}

export default RightBottomCharts;
