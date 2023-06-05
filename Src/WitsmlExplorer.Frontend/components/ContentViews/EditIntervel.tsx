import { Label, TextField, Typography } from "@equinor/eds-core-react";
import { useContext } from "react";

import styled from "styled-components";
import NavigationContext from "../../contexts/navigationContext";

const EditIntervel = (): React.ReactElement => {
  //   const { startvalue, endvalue} = props;
  const { navigationState } = useContext(NavigationContext);
  const { selectedLogCurveInfo } = navigationState;

  const { minIndex, maxIndex } = selectedLogCurveInfo ? selectedLogCurveInfo[0] : [];
  return (
    <EditIntervelLayout>
      <Typography color="primary" variant="h5">
        Curve Value
      </Typography>
      <StartEndIndex>
        <StyledLabel label="Start Index" />
        <TextField
          id="StartIndex"
          defaultValue={minIndex}
          //   variant={displayUrlError ? "error" : null}
          //   helperText={displayUrlError ? "Not a valid server url" : ""}
          //   onChange={onChangeUrl}
          //   onBlur={runUrlValidation}
          //   required
          //   disabled={props.editDisabled}
        />
      </StartEndIndex>
      <StartEndIndex>
        <StyledLabel label="End Index" />
        <TextField
          id="endindex"
          defaultValue={maxIndex}
          //   variant={displayUrlError ? "error" : null}
          //   helperText={displayUrlError ? "Not a valid server url" : ""}
          //   onChange={onChangeUrl}
          //   onBlur={runUrlValidation}
          //   required
          //   disabled={props.editDisabled}
        />
      </StartEndIndex>
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
export default EditIntervel;
