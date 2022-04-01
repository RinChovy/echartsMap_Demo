import styled, { keyframes } from 'styled-components';
import righttopboxBg from '../../assets/righttopbox.png';
import rightcenterboxBg from '../../assets/rightcenterbox.png';
import rightbottomboxBg from '../../assets/rightbottombox.png';

const scroll = keyframes`
    from {
      top: 0;
    }
    to {
      top: -${props => props.height};
    }
`;
export const RightPage = styled.div`
  width: 7.025rem;
  height: 100%;
  padding: 0 0.2rem;
`;

export const RightTopBox = styled.div`
  position: relative;
  height: 28%;
  width: 100%;
  margin-bottom: 1%;
  background: url(${righttopboxBg}) center center no-repeat;
  background-size: 100% 100%;
  .left-top {
    padding: 0.4rem 0.2rem.2rem;
    width: 100%;
    height: 100%;
  }
`;

export const RightCenterBox = styled.div`
  position: relative;
  height: 28%;
  width: 100%;
  margin-bottom: 1%;
  background: url(${rightcenterboxBg}) center center no-repeat;
  background-size: 100% 100%;
  .left-top {
    padding: 0.4rem 0.2rem.2rem;
    width: 100%;
    height: 100%;
  }
`;

export const RightBottomBox = styled.div`
  position: relative;
  height: 28%;
  width: 100%;
  background: url(${rightbottomboxBg}) center center no-repeat;
  background-size: 100% 100%;
  .left-top {
    padding: 0.4rem 0.2rem.2rem;
    width: 100%;
    height: 100%;
  }
`;

export const Unit = styled.div`
  .tablePage {
    width: 96%;
    margin: 0 auto;
    tr {
      display: flex;
    }
    th {
      flex: 2;
      height: ${props => props.height}vh;
      text-align: center;
      color: #56baff;
      line-height: ${props => props.height}vh;
      /* background: linear-gradient(0deg, #4b75d5, #4b75d5, #4b75d5); */
      background: #08185a;
      border-right: 0.01rem solid #274483;
    }
    th:first-child {
      flex: 1;
      border-left: 0.01rem solid #274483;
      overflow: hidden; //超出的文本隐藏
      text-overflow: ellipsis; //溢出用省略号显示
      white-space: nowrap;
    }
    th:nth-child(2) {
      flex: 3;
    }
    td {
      width: 50px;
      color: #fefefe;
      text-align: center;
      height: ${props => props.height}vh;
      line-height: ${props => props.height}vh;
      overflow: hidden; //超出的文本隐藏
      text-overflow: ellipsis; //溢出用省略号显示
      white-space: nowrap;
    }
  }
  .tablePage2 {
    max-height: ${props => props.height * 5}vh;
    overflow: hidden;
    display: flex;
    tr {
      display: flex;
    }
    td {
      flex: 2;
      border-right: 0.01rem solid #274483;
      overflow: hidden; //超出的文本隐藏
      text-overflow: ellipsis; //溢出用省略号显示
      white-space: nowrap;
    }
    td:first-child {
      flex: 1;
      border-left: 0.01rem solid #274483;
    }
    td:nth-child(2) {
      flex: 3;
    }
    .boxW {
      width: 100%;
      overflow: hidden;
      border-bottom: 0.01rem solid #274483;
    }
    .boxN {
      width: 100%;
      position: relative;
      tr:nth-child(odd) {
        background: transparent;
      }
      tr:nth-child(even) {
        background: rgba(0, 132, 255, 0.2);
      }
    }
    .boxN-2 {
      width: 100%;
      position: relative;
      tr:nth-child(odd) {
        background: rgba(0, 132, 255, 0.2);
      }
      tr:nth-child(even) {
        background: transparent;
      }
    }
    .tableAnimation {
      animation: ${scroll} 1s;
      animation-timing-function: linear;
      top: -${props => props.height}vh;
    }
  }
`;
