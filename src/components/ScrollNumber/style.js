import styled, { keyframes } from 'styled-components';

const move = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

export const NumberBox = styled.ul`
  display: flex;
  color: #fff;
  justify-content: flex-end;

  .numberItem {
    height: 0.52rem;
    line-height: 0.52rem;
    text-align: center;
    display: inline-block;
    overflow: hidden;

    &.comm {
      width: 0.18rem;
      font-size: 0.3rem;
      text-align: center;
    }

    &.active {
      .num {
        animation: ${move} 1.5s;
        animation-fill-mode: forwards;
      }
    }

    .num {
      display: block;
      transform: translateY(0%);
    }
  }
`;
