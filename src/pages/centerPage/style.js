import styled from 'styled-components';
import centertopboxBg from '../../assets/centertopbox.png';

export const CenterPage = styled.div`
  width: 9.95rem;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DashboardV = styled.div`
  height: 100%;
  .describeV {
    text-align: center;
    .describeText {
      margin-right: 0.2rem;
      font-size: 0.18rem;
      color: #b7efff;
    }
    .describeRate {
      margin-right: 0.12rem;
      font-size: 0.22rem;
      font-weight: 500;
      color: #ff9e04;
    }
    .arrow {
      color: #ff3c00;
      font-weight: 500;
      font-size: 0.25rem;
    }
  }
`;

export const Leftbottom = styled.div`
  height: 100%;
  .legend {
    display: flex;
    justify-content: flex-end;
    padding: 0.1rem 0;
    > div {
      font-size: 0.12rem;
      color: #5beac1;
    }
    > div:nth-child(1) {
      margin-right: 0.12rem;
    }
    > div:nth-child(1)::before {
      content: ' ';
      display: inline-block;
      width: 0.07rem;
      height: 0.07rem;
      background: rgba(0, 210, 255, 0.5);
      border: 0.01rem solid #607d8b;
      margin-right: 0.05rem;
    }
    > div:nth-child(2) {
      display: flex;
      align-items: center;
      .numWarp {
        margin-right: 0.05rem;
        display: flex;
        position: relative;
        .yellowLine {
          background: #ecbb4b;
          width: 0.15rem;
          height: 0.02rem;
          border: 0.01rem solid #ecbb4b;
        }
        .yellowCricle {
          width: 0.06rem;
          height: 0.06rem;
          border-radius: 0.06rem;
          background: #ecbb4b;
          position: absolute;
          left: 0.04rem;
          top: -0.02rem;
        }
      }
    }
  }
`;
export const ActCirdiv = styled.div`
  /* display: flex;
    flex-direction: column;
    justify-content: space-around; */
  color: '#fff';
  height: 100%;
  display: flex;
  flex-direction: column;

  .legend {
    display: flex;
    justify-content: flex-end;
    padding: 0.1rem 0;
    > div {
      font-size: 0.12rem;
      color: #5beac1;
    }
    div:nth-child(1) {
      margin-right: 0.12rem;
    }
    div:nth-child(1)::before {
      content: ' ';
      display: inline-block;
      width: 0.07rem;
      height: 0.07rem;
      background: rgba(0, 210, 255, 0.5);
      border: 0.01rem solid #607d8b;
      margin-right: 0.05rem;
    }
    div:nth-child(2)::before {
      content: ' ';
      display: inline-block;
      width: 0.07rem;
      height: 0.07rem;
      background: rgba(236, 187, 75, 0.5);
      border: 0.01rem solid #ecbb4b;
      margin-right: 0.05rem;
    }
  }
  .linediv {
    flex: 1;
    display: flex;

    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 0.3rem;
  }
  .circumstanceRow {
    color: #fff;
    /* padding-top: 0.18rem; */
    display: flex;
    align-items: center;
  }
  .activename {
    width: 0.9rem;
    font-size: 0.14rem;
    text-align: right;
    padding-right: 0.1rem;
  }
  .rightLine {
    display: flex;
    position: relative;
    > div {
      position: relative;
    }
    .activeDescribe {
      position: absolute;
      top: -0.18rem;
      font-size: 0.12rem;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
    }
    .unactiveDescribe {
      position: absolute;
      top: -0.18rem;
      font-size: 0.12rem;
      left: 50%;
      transform: translateX(-50%);
      white-space: nowrap;
    }
    .activedline {
      height: 0.07rem;
      background: linear-gradient(to right, #0072ff, #58d5d9);
      border-radius: 0.07rem 0 0 0.07rem;
    }
    .unactivedline {
      height: 0.07rem;
      background: linear-gradient(to right, #f7e972, #fc8800);
      border-radius: 0 0.07rem 0.07rem 0;
    }
  }
  .xAxis {
    display: flex;
    font-size: 0.12rem;
    color: #ffffff;
    line-height: 0.16rem;
    justify-content: space-between;
    width: 2.6rem;
    margin-top: -0.1rem;
    margin-left: 0.9rem;
  }
`;

export const CenterTopBox = styled.div`
  position: relative;
  top: -0.15rem;
  height: 22%;
  width: 100%;
  background: url(${centertopboxBg}) center center no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.55rem 0.8rem 0.3rem;
  .center-top {
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .title {
      color: white;
      font-size: 0.25rem;
      text-align: right;
    }

    .unit {
      padding-left: 0.15rem;
    }
  }
`;

export const CenterBottomBox = styled.div`
  width: 100%;
  flex: 1;
  .contain {
    display: flex;
    position: relative;
    z-index: 9999;
    margin-top: 1%;
    width: 100%;
    height: 80%;
    > div {
      flex: 1;
    }
    .mapWarp {
      display: flex;
      flex: 1;
      align-items: center;
    }
    .tbFlex {
      display: flex;
      flex-direction: column;
      > div {
        flex: 1;
        .title {
          font-size: 0.18rem;
          font-family: Source Han Sans CN;
          font-weight: bold;
          color: #ffffff;
          text-shadow: 0.01rem 0.03rem 0.01rem rgba(3, 26, 44, 0.48);
          letter-spacing: 0.06rem;
          text-align: center;
        }
      }
    }
  }

  .box {
    position: absolute;
    bottom: -0.2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85%;
    .bottomGyrate {
      position: absolute;
      bottom: 0;
      z-index: 0;
      width: 8rem;
      height: 5.1rem;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% auto;
    }

    .bottomCircle {
      position: absolute;
      bottom: -3.3rem;
      z-index: 2;
      width: 8rem;
      height: 8rem;
      // background: url('../../assets/bottom-circle.png') no-repeat center;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 8rem;
      transform: translateX(0%) rotateX(82deg);
      transform-style: preserve-3d;
      opacity: 0.3;
      animation: rotate1 10s linear infinite;
    }
    .bottomCircle::before {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      width: 4rem;
      height: 4rem;
      border: 0.13rem solid rgba(90, 230, 195, 0.5);
      border-radius: 50%;
      transform: translate(-39%, -55%);
      animation: scale 2s linear infinite;
      content: '';
    }
    .lightBeam {
      position: absolute;
      bottom: -0.4rem;
      width: 18rem;
      height: 7rem;
      // background: url('../../assets/light-beam.png') no-repeat center;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 18rem;
    }
    .lightHalo {
      position: absolute;
      bottom: -3.8rem;
      width: 9rem;
      height: 9rem;
      // background: url('../../assets/halo-circle.png') no-repeat center;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 9rem;
      transform: translateX(0%) rotateX(82deg);
      animation: rotate1 10s linear infinite;
    }
    @keyframes rotate1 {
      0% {
        transform: translateX(0%) rotateX(82deg) rotateZ(0);
      }
      100% {
        transform: translateX(0%) rotateX(82deg) rotateZ(360deg);
      }
    }
    @keyframes scale {
      0% {
        transform: translate(-39%, -55%) scale(0.9);
        opacity: 1;
      }
      100% {
        transform: translate(-39%, -55%) scale(1.5);
        opacity: 0;
      }
    }
  }
`;
