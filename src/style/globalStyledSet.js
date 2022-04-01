import styled from 'styled-components';
import { TitleColor } from './color';
import smallTitle from '../assets/smallTitle.png';

/**
 * Title
 * use:
 *  <ModuleTitle>This is title!</ModuleTitle>
 */
export const ModuleTitle = styled.h3`
  /* padding: 0 0 0.25rem 0; */
  color: ${TitleColor};
  font-size: 0.18rem;
  font-weight: bold;
  text-align: center;
  background: url(${smallTitle}) no-repeat bottom;
  background-size: 90% 100%;
  letter-spacing: .06rem;
  div{
    position: relative;
    top: -0.16rem;
  }
`;
