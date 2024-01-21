import React from "react";
import { Spring } from "@react-spring/web";
import { useSelector } from "react-redux";
import { usePrevious } from "../../hooks/usePrevious";
import { getRobotPosition } from "../../store/selectors/robotSelector";
import { initialRobotState, IPosition } from "../../store/types/Robot";
import { RobotContainer } from "../../styledComponents";
import logo from '../../svgs/RobotSvg.svg';
import { createRobotTransition } from "../../utils";

const Robot = () => {

  const robotPosition: IPosition = useSelector(getRobotPosition);
  const previousRobotPosition: IPosition = usePrevious(robotPosition) as IPosition || initialRobotState.position;
  const { currentTransition, prevTransition } = createRobotTransition(previousRobotPosition, robotPosition);

  return (
    <Spring from={{ ...prevTransition }} to={{ ...currentTransition }}>
    {(props: object) => (
      <RobotContainer style={props}>
        <img src={logo} className="App-logo" alt="logo" style={{width: '50%', height: '50%'}} />
      </RobotContainer>
    )}
    </Spring>
);
};

export default Robot;
