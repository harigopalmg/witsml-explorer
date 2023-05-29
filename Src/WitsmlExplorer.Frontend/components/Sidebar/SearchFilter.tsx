import { Search } from "@equinor/eds-core-react";
import { Divider } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import styled, { CSSProp } from "styled-components";
import Filter, { EMPTY_FILTER } from "../../contexts/filter";
import NavigationContext from "../../contexts/navigationContext";
import NavigationType from "../../contexts/navigationType";
import OperationContext from "../../contexts/operationContext";
import { color } from "../../styles/Colors";
import Icons from "../../styles/Icons";
import FilterPanel from "./FilterPanel";

const SearchFilter = (): React.ReactElement => {
  const { navigationState, dispatchNavigation } = useContext(NavigationContext);
  const {
    operationState: { colors }
  } = useContext(OperationContext);
  const { selectedFilter } = navigationState;
  const [filter, setFilter] = useState<Filter>(EMPTY_FILTER);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [wellNameFilter, setWellNameFilter] = useState<string>(selectedFilter.wellName);
  const FilterPopup: CSSProp = { zIndex: 10, position: "absolute", width: "inherit", top: "6rem", minWidth: "174px", paddingRight: "0.1em" };
  useEffect(() => {
    setFilter(selectedFilter);
  }, [selectedFilter]);

  useEffect(() => {
    const dispatch = setTimeout(() => {
      dispatchNavigation({ type: NavigationType.SetFilter, payload: { filter: { ...filter, wellName: wellNameFilter } } });
    }, 400);
    return () => clearTimeout(dispatch);
  }, [wellNameFilter]);

  useEffect(() => {
    if (wellNameFilter === "") {
      setWellNameFilter(selectedFilter.wellName);
    }
  }, [selectedFilter.wellName]);

  return (
    <>
      <SeachLayout colors={colors}>
        <SearchBarContainer>
          <StyledSearch
            width={10}
            height={"30px"}
            id="filter-tree"
            value={wellNameFilter}
            placeholder="Search Wells"
            onChange={(event) => setWellNameFilter(event.target.value)}
            autoComplete={"off"}
            style={{ userSelect: "none" }}
            colors={colors}
          />
        </SearchBarContainer>
        <Icons
          onClick={() => setExpanded(!expanded)}
          name={expanded ? "activeFilter" : "filter"}
          color={colors.interactive.primaryResting}
          size={32}
          style={{ cursor: "pointer" }}
        />
      </SeachLayout>
      {expanded ? (
        <div style={FilterPopup}>
          <FilterPanel />
        </div>
      ) : (
        <> </>
      )}
      <Divider key={"divider"} />
    </>
  );
};
const SeachLayout = styled.div<{ colors: color }>`
  display: grid;
  grid-template-columns: 1fr 44px;
  padding: 0.6rem 0rem 0.5rem 1rem;
  position: relative;
  padding-right: 6px;
  border-bottom: 1px solid ${(props) => props.colors.interactive.disabledBorder};
`;

const SearchBarContainer = styled.div`
  width: 80%;
`;

const StyledSearch = styled(Search)<{ colors: color }>`
  label {
    color: ${(props) => props.colors.text.staticTextLabel};
  }
  div {
    background: ${(props) => props.colors.text.staticTextFeildDefault};
  }
`;
export default SearchFilter;
