import { DotProgress } from "@equinor/eds-core-react";
import { useTheme } from "@material-ui/core/styles";
import { TreeItem } from "@material-ui/lab";
import { TreeItemProps } from "@material-ui/lab/TreeItem";
import React, { useContext } from "react";
import styled from "styled-components";
import { ToggleTreeNodeAction } from "../../contexts/navigationActions";
import NavigationContext from "../../contexts/navigationContext";
import NavigationType from "../../contexts/navigationType";
import { color } from "../../styles/Colors";
import Icon from "../../styles/Icons";
import OperationContext from "../../contexts/operationContext";

interface StyledTreeItemProps extends TreeItemProps {
  labelText: string;
  selected?: boolean;
  isActive?: boolean;
  isLoading?: boolean;
}

const StyledTreeItem = (props: StyledTreeItemProps): React.ReactElement => {
  const { labelText, selected, isActive, isLoading, ...other } = props; // eslint-disable-line
  const { dispatchNavigation } = useContext(NavigationContext);
  const isCompactMode = useTheme().props.MuiCheckbox.size === "small";

  const toggleTreeNode = (props: StyledTreeItemProps) => {
    const toggleTreeNode: ToggleTreeNodeAction = { type: NavigationType.ToggleTreeNode, payload: { nodeId: props.nodeId } };
    dispatchNavigation(toggleTreeNode);
  };
  const {
    operationState: { colors }
  } = useContext(OperationContext);
  return (
    <TreeItem
      onIconClick={() => toggleTreeNode(props)}
      label={
        <Label>
          {isActive && <Icon name="isActive" color={colors.interactive.primaryResting} />}
          <NavigationDrawer colors={colors} selected={selected} compactMode={isCompactMode}>
            {labelText} {isLoading && <DotProgress color={"primary"} size={32} />}
          </NavigationDrawer>
        </Label>
      }
      {...other}
    />
  );
};

const Label = styled.div`
  display: flex;
`;

const NavigationDrawer = styled.p<{ selected: boolean; compactMode: boolean; colors: color }>`
  color: ${(props) => (props.selected ? props.colors.interactive.primaryResting : props.colors.text.staticIconsDefault)};
  font-family: EquinorMedium, sans-serif;
  font-size: 0.75rem;
  line-height: 1rem;
  padding: ${(props) => (props.compactMode ? "0.5rem" : "1rem")};
  margin: 0;
`;

export default StyledTreeItem;
