import React from 'react';
import { RightPage, RightTopBox, RightCenterBox, RightBottomBox } from './style';
import { ModuleTitle } from 'style/globalStyledSet';
import { connect } from 'dva';
import RightTopChart from './charts/RightTopChart';
import RightCenterChart from './charts/RightCenterChart';
import RightBottomChart from './charts/RightBottomChart';

const Index = () => {
  return (
    <RightPage>
      <RightTopBox>
        <div className="left-top">
          <ModuleTitle>
            <div>渠道年度累计交易占比</div>
          </ModuleTitle>
          <RightTopChart />
          {/* <LeftTopChart /> */}
        </div>
      </RightTopBox>

      <RightCenterBox>
        <div className="left-top">
          <ModuleTitle>
            <div>地级市月交易量统计</div>
          </ModuleTitle>
          <RightCenterChart />
        </div>
      </RightCenterBox>

      <RightBottomBox>
        <div className="left-top">
          <ModuleTitle>
            <div>新进单位</div>
          </ModuleTitle>
          {/* 图表占位 */}
          <RightBottomChart />
        </div>
      </RightBottomBox>
    </RightPage>
  );
};

const mapStateToProps = ({ rightPage }) => {
  return {
    rightPage,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(Index);
