import { Label, TextField, Typography } from "@equinor/eds-core-react";

import styled from "styled-components";

interface EditIntervelProps {
  startvalue: number | Date;
  endvalue: number | Date;
  data: any[];
}

const EditIntervel = (props: EditIntervelProps): React.ReactElement => {
  const { startvalue, endvalue, data } = props;
  console.log(data);
  return (
    <EditIntervelLayout>
      <Typography color="primary" variant="h5">
        Curve Value
      </Typography>
      <StartEndIndex>
        <StyledLabel label="Start Index" />
        <TextField
          id="StartIndex"
          defaultValue={startvalue}
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
          defaultValue={endvalue}
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
