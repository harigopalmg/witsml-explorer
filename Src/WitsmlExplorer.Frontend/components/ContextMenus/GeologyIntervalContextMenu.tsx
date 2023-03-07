import { Typography } from "@equinor/eds-core-react";
import { MenuItem } from "@material-ui/core";
import React, { useContext } from "react";
import NavigationContext from "../../contexts/navigationContext";
import OperationContext from "../../contexts/operationContext";
import { ComponentType } from "../../models/componentType";
import GeologyInterval from "../../models/geologyInterval";
import { JobType } from "../../services/jobService";
import { colors } from "../../styles/Colors";
import ContextMenu from "./ContextMenu";
import { menuItemText, StyledIcon } from "./ContextMenuUtils";
import { copyComponents, pasteComponents } from "./CopyUtils";
import { useClipboardComponentReferencesOfType } from "./UseClipboardComponentReferences";

export interface GeologyIntervalContextMenuProps {
  checkedGeologyIntervals: GeologyInterval[];
}

const GeologyIntervalContextMenu = (props: GeologyIntervalContextMenuProps): React.ReactElement => {
  const { checkedGeologyIntervals } = props;
  const { dispatchOperation } = useContext(OperationContext);
  const {
    navigationState: { selectedServer, selectedMudLog, servers }
  } = useContext(NavigationContext);
  const geologyIntervalReferences = useClipboardComponentReferencesOfType(ComponentType.GeologyInterval);

  return (
    <ContextMenu
      menuItems={[
        <MenuItem
          key={"copy"}
          onClick={() =>
            copyComponents(
              selectedServer,
              checkedGeologyIntervals.map((gi) => gi.uid),
              selectedMudLog,
              dispatchOperation,
              ComponentType.GeologyInterval
            )
          }
          disabled={checkedGeologyIntervals.length === 0}
        >
          <StyledIcon name="copy" color={colors.interactive.primaryResting} />
          <Typography color={"primary"}>{menuItemText("copy", "geology interval", checkedGeologyIntervals)}</Typography>
        </MenuItem>,
        <MenuItem
          key={"paste"}
          onClick={() => pasteComponents(servers, geologyIntervalReferences, dispatchOperation, selectedMudLog, JobType.CopyGeologyIntervals)}
          disabled={geologyIntervalReferences === null}
        >
          <StyledIcon name="paste" color={colors.interactive.primaryResting} />
          <Typography color={"primary"}>{menuItemText("paste", "geology interval", geologyIntervalReferences?.componentUids)}</Typography>
        </MenuItem>
      ]}
    />
  );
};

export default GeologyIntervalContextMenu;