import styled from 'styled-components';
import lefttopboxBg from '../../assets/lefttopbox.png';
import leftcenterboxBg from '../../assets/leftcenterbox.png';
import leftbottomboxBg from '../../assets/leftbottombox.png';

export const LeftPage = styled.div`
  width: 7.025rem;
  height: 100%;
  padding: 0 0.2rem;
`;

export const LeftTopBox = styled.div`
  position: relative;
  height: 28%;
  width: 100%;
  margin-bottom: 1%;
  background: url(${lefttopboxBg}) center center no-repeat;
  background-size: 100% 100%;
  .left-top {
    padding: 0.4rem 0.2rem.2rem;
    width: 100%;
    height: 100%;
  }
`;

export const LeftCenterBox = styled.div`
  position: relative;
  height: 28%;
  width: 100%;
  margin-bottom: 1%;
  background: url(${leftcenterboxBg}) center center no-repeat;
  background-size: 100% 100%;
  .left-top {
    padding: 0.4rem 0.2rem.2rem;
    width: 100%;
    height: 100%;
  }
`;

export const LeftCenterDiv = styled.div`
  height: 100%;
  .legend {
    display: flex;
    justify-content: flex-end;
    padding: 0.1rem 0.2rem 0 0;
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
`;

export const LeftBottomBox = styled.div`
  position: relative;
  height: 28%;
  width: 100%;
  background: url(${leftbottomboxBg}) center center no-repeat;
  background-size: 100% 100%;
  .left-top {
    padding: 0.4rem 0.2rem.2rem;
    width: 100%;
    height: 100%;
  }
`;
