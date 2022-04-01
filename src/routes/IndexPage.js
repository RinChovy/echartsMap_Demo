import React from 'react';
import { connect } from 'dva';
import { IndexPageStyle, IndexPageContent } from './style';
import TopPage from 'pages/topPage';
import LeftPage from 'pages/leftPage';
import CenterPage from 'pages/centerPage';
import RightPage from 'pages/rightPage';

const IndexPage = () => {
  return (
    <IndexPageStyle>
      <TopPage />
      <IndexPageContent>
        {/* 左侧内容 */}
        <LeftPage />
        {/* 中间内容 */}
        <CenterPage className="center-page" />
        {/* 右侧内容 */}
        <RightPage />
      </IndexPageContent>
    </IndexPageStyle>
  );
};

IndexPage.propTypes = {};

export default connect()(IndexPage);
