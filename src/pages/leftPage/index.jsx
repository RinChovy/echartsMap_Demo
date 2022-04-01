import React from 'react';
import { LeftPage, LeftTopBox, LeftBottomBox, LeftCenterBox } from './style';
import { ModuleTitle } from 'style/globalStyledSet';
import { connect } from 'dva';
import LeftTopChart from './charts/LeftTopChart';
import LeftCenterChart from './charts/LeftCenterChart';
import LeftBottomChart from './charts/LeftBottomChart';
const Index = () => {
  return (
    <LeftPage>
      <LeftTopBox>
        <div className="left-top">
          <ModuleTitle>
            <div>年度缴费对比</div>
          </ModuleTitle>
          <LeftTopChart />
        </div>
      </LeftTopBox>
      <LeftCenterBox>
        <div className="left-top">
          <ModuleTitle>
            <div>当年分月收入趋势</div>
          </ModuleTitle>
          <LeftCenterChart />
        </div>
      </LeftCenterBox>
      <LeftBottomBox>
        <div className="left-top">
          <ModuleTitle>
            <div>月缴费行业排名</div>
          </ModuleTitle>
          <LeftBottomChart />
        </div>
      </LeftBottomBox>
    </LeftPage>
  );
};

const mapStateToProps = ({ leftPage }) => {
  return {
    leftPage,
  };
};

const mapStateToDispatch = dispatch => ({});

export default connect(mapStateToProps, mapStateToDispatch)(Index);
