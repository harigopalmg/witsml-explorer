import { Button, Icon, Label, TextField, Typography } from "@equinor/eds-core-react";
import { useContext, useState } from "react";
import styled from "styled-components";
import NavigationContext from "../../contexts/navigationContext";
import { formatIndexValue } from "../Modals/SelectIndexToDisplayModal";
import NavigationType from "../../contexts/navigationType";
import { colors } from "../../styles/Colors";

const EditIntervel = (): React.ReactElement => {
  const { dispatchNavigation, navigationState } = useContext(NavigationContext);
  const { selectedLogCurveInfo } = navigationState;
  const { minIndex, maxIndex } = selectedLogCurveInfo ? selectedLogCurveInfo[0] : { minIndex: 0, maxIndex: 0 };

  const [startIndex, setstartIndex] = useState(String(minIndex));
  const [endIndex, setendIndex] = useState(String(maxIndex));
  const [isEditInterval, setEditInterval] = useState(true);
  const submitEditIntervel = () => {
    const logCurveInfoWithUpdatedIndex = selectedLogCurveInfo.map((logCurveInfo) => {
      return {
        ...logCurveInfo,
        minIndex: formatIndexValue(startIndex),
        maxIndex: formatIndexValue(endIndex)
      };
    });
    dispatchNavigation({
      type: NavigationType.ShowCurveValues,
      payload: { logCurveInfo: logCurveInfoWithUpdatedIndex }
    });
  };
  return (
    <EditIntervelLayout>
      <Typography
        style={{
          color: `${colors.interactive.primaryResting}`
        }}
        variant="h3"
      >
        Curve Value
      </Typography>
      <StartEndIndex>
        <StyledLabel label="Start Index" />
        <TextField
          id="StartIndex"
          defaultValue={startIndex}
          onChange={(e: any) => {
            setstartIndex(e.target.value), setEditInterval(false);
          }}
        />
      </StartEndIndex>
      <StartEndIndex>
        <StyledLabel label="End Index" />
        <TextField
          id="endindex"
          defaultValue={endIndex}
          onChange={(e: any) => {
            setendIndex(e.target.value);
            setEditInterval(false);
          }}
        />
      </StartEndIndex>
      <StyledButton variant={"ghost"} color={!isEditInterval ?? "primary"} disabled={isEditInterval} onClick={submitEditIntervel}>
        <Icon size={16} name="arrowForwardSmall" />
      </StyledButton>
    </EditIntervelLayout>
  );
};
const EditIntervelLayout = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`;
const StartEndIndex = styled.div`
  display: flex;
`;
const StyledLabel = styled(Label)`
  width: 5rem;
  align-items: center;
  font-style: italic;
`;
const StyledButton = styled(Button)`
  ${(props) =>
    props.disabled
      ? `
&:hover{
  border:2px solid ${colors.interactive.disabledBorder};
  border-radius: 50%;
}
&&{
  border:2px solid ${colors.interactive.disabledBorder} ;
 
}`
      : `
&:hover{
  border:2px solid ${colors.interactive.primaryResting};
  border-radius: 50%;
}
&&{
  border:2px solid ${colors.interactive.primaryResting};
}`}
  display:flex;
  height: 2rem;
  width: 1.5rem;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;
export default EditIntervel;
