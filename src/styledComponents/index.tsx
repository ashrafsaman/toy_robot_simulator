import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { animated } from '@react-spring/web'

export const height = () => css`
  &:before {
    display: block;
    padding-top: 100%;
    content: '';
  }
`;

export const Sqaure = styled.div`
  display: flex;
  width: 20%;
  background-color: aliceblue;
  border: 2px solid grey;
  ${height()};
`

export const RobotContainer = styled(animated.div)`
  position: absolute;
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
  ${height()}
`;