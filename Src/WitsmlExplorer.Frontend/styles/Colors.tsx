import { tokens } from "@equinor/eds-tokens";

export const light = {
  infographic: {
    primaryMossGreen: tokens.colors.infographic.primary__moss_green_100.hex
  },
  interactive: {
    dangerHighlight: tokens.colors.interactive.danger__highlight.hex,
    dangerHover: tokens.colors.interactive.danger__hover.hex,
    dangerResting: tokens.colors.interactive.danger__resting.hex,
    disabledBorder: tokens.colors.interactive.disabled__border.hex,
    primaryHover: tokens.colors.interactive.primary__hover.hex,
    primaryResting: tokens.colors.interactive.primary__resting.hex,
    successResting: tokens.colors.interactive.success__resting.hex,
    tableHeaderFillResting: tokens.colors.interactive.table__header__fill_resting.hex,
    successHover: tokens.colors.interactive.success__hover.hex,
    sidebarDivider: tokens.colors.interactive.primary__resting.hex,
    checkBoxHover: ""
  },
  text: {
    staticIconsDefault: tokens.colors.text.static_icons__default.hex,
    staticIconsTertiary: tokens.colors.text.static_icons__tertiary.hex,
    staticTextFieldDefault: "#DCDCDC",
    staticCheckBoxDefault: tokens.colors.infographic.primary__moss_green_100,
    staticInactiveIndicator: "#DCDCDC",
    staticPropertyBarDefault: "#666666",
    staticPropertyKey: tokens.colors.text.static_icons__tertiary.hex,
    staticPropertyValue: tokens.colors.interactive.primary__resting.hex,
    staticTextFeildDefault: "#F7F7F7",
    staticTextLabel: "#999999",
    staticDisabledText: "grey",
    DisabledBackground: "blue"
  },
  ui: {
    backgroundDefault: tokens.colors.ui.background__default.hex,
    backgroundLight: tokens.colors.ui.background__light.hex
  }
};

export const dark = {
  infographic: {
    primaryMossGreen: "#ffffff"
  },
  interactive: {
    dangerHighlight: "#FF667019",
    dangerHover: "#FF949B",
    dangerResting: tokens.colors.interactive.danger__resting.hex,
    disabledBorder: "#3E4F5C",
    primaryHover: "#ADE2E6",
    primaryResting: "#97CACE",
    successResting: tokens.colors.interactive.success__resting.hex,
    tableHeaderFillResting: "#132634",
    successHover: "#C1E7C1",
    sidebarDivider: "#243746",
    checkBoxHover: "#FFFFFF33"
  },
  text: {
    staticIconsDefault: "#FFFFFF",
    staticIconsTertiary: "#97CACE",
    staticTextFieldDefault: "#2E3F4D",
    staticCheckBoxDefault: "#AAAAAA",
    staticInactiveIndicator: "#6F6F6F",
    staticPropertyBarDefault: "#FFFFFF",
    staticPropertyKey: "#DEE5E7",
    staticPropertyValue: "#FFFFFF",
    staticTextFeildDefault: "transparent",
    staticTextLabel: "#CCCCCC",
    staticDisabledText: "#9CA6AC",
    disabledBackground: "#565656"
  },
  ui: {
    backgroundDefault: "#132634",
    backgroundLight: "#243746"
  }
};

export const colors = light;
export interface color {
  infographic: {
    primaryMossGreen: string;
  };
  interactive: {
    dangerHighlight: string;
    dangerHover: string;
    dangerResting: string;
    disabledBorder: string;
    primaryHover: string;
    primaryResting: string;
    successResting: string;
    tableHeaderFillResting: string;
    successHover: string;
    sidebarDivider: string;
    checkBoxHover: string;
  };
  text: {
    staticIconsDefault: string;
    staticIconsTertiary: string;
    staticTextFieldDefault: string;
    staticCheckBoxDefault: string;
    staticInactiveIndicator: string;
    staticPropertyBarDefault: string;
    staticPropertyKey: string;
    staticPropertyValue: string;
    staticTextFeildDefault: string;
    staticTextLabel: string;
    staticDisabledText: string;
    disabledBackground: string;
  };
  ui: {
    backgroundDefault: string;
    backgroundLight: string;
  };
}
