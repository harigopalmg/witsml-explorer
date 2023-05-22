import React, { useContext } from "react";
import { Typography } from "@equinor/eds-core-react";
import OperationContext from "../contexts/operationContext";

interface PropertiesPanelProps {
  properties: Map<string, string>;
}

const PropertiesPanel = (props: PropertiesPanelProps): React.ReactElement => {
  const { properties } = props;
  const keys = Array.from(properties.keys());
  const {
    operationState: { colors }
  } = useContext(OperationContext);

  return (
    <>
      {keys.length ? (
        keys.map((key: string, index: number) => (
          <React.Fragment key={index}>
            <Typography
              key={key}
              token={{ color: colors.text.staticPropertyKey, fontSize: "0.75rem", fontFamily: "Equinor" }}
              style={{ paddingRight: "0.5rem", maxWidth: 100, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              {" "}
              {key}:
            </Typography>
            <Typography
              key={properties.get(key)}
              token={{ fontSize: "0.875rem", color: colors.text.staticPropertyValue, fontFamily: "EquinorMedium", fontWeight: 400 }}
              style={{ paddingRight: "1.5rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
            >
              {properties.get(key)}
            </Typography>
          </React.Fragment>
        ))
      ) : (
        <Typography key={"noWellSelected"} token={{ fontFamily: "Equinor", fontStyle: "italic", fontSize: "0.875rem", color: colors.infographic.primaryMossGreen }}>
          {" "}
          No Well Selected{" "}
        </Typography>
      )}
    </>
  );
};

export default PropertiesPanel;
