import { Button } from "@equinor/eds-core-react";
import React, { useContext } from "react";
import NavigationContext from "../contexts/navigationContext";
import NavigationType from "../contexts/navigationType";
import Icon from "../styles/Icons";
import OperationContext from "../contexts/operationContext";
import styled from "styled-components";
import { color } from "../styles/Colors";

export interface JobsButtonProps {
  showLabels: boolean;
}

const JobsButton = (props: JobsButtonProps): React.ReactElement => {
  const { navigationState } = useContext(NavigationContext);
  const { selectedServer } = navigationState;
  const { dispatchNavigation } = useContext(NavigationContext);
  const {
    operationState: { colors }
  } = useContext(OperationContext);

  const onClick = () => {
    dispatchNavigation({ type: NavigationType.SelectJobs, payload: {} });
  };

  return (
    <StyledButton colors={colors} variant={props.showLabels ? "ghost" : "ghost_icon"} onClick={onClick} disabled={!selectedServer}>
      <Icon name="assignment" />
      {props.showLabels && "Jobs"}
    </StyledButton>
  );
};
const StyledButton = styled(Button)<{ colors: color }>`
  white-space: nowrap;
  color: ${(props) => props.colors.infographic.primaryMossGreen};
`;
export default JobsButton;
