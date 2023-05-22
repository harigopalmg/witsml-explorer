import { createGlobalStyle } from "styled-components";
import { color } from "../styles/Colors";
import { AssetsLoader } from "./AssetsLoader";

const GlobalStyles = createGlobalStyle<{ colors: color }>`
  @font-face {
    font-family: "Equinor";
    src: url("${AssetsLoader.getAssetsRoot()}/assets/fonts/Equinor-Regular.woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "EquinorRegular";
    src: url("${AssetsLoader.getAssetsRoot()}/assets/fonts/Equinor-Regular.woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "EquinorBold";
    src: url("${AssetsLoader.getAssetsRoot()}/assets/fonts/Equinor-Bold.woff2");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "EquinorMedium";
    src: url("${AssetsLoader.getAssetsRoot()}/assets/fonts/Equinor-Medium.woff2");
    font-weight: normal;
    font-style: normal;
  }

*,
*:before,
*:after {
  box-sizing: border-box;
}

  ::-webkit-scrollbar {
    background-color: transparent;
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.colors.interactive.disabledBorder};
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-corner{
    background-color:transparent;
  }
  ::placeholder { 
  color: ${(props) => props.colors.text.staticIconsDefault} !important;
  }

  body {
    font-family: EquinorRegular, sans-serif;
    background:${(props) => props.colors.ui.backgroundDefault};
    font-size: 16px;
    margin: 0;
    height: 100vh;
  }
  h1 {
    font-size: 3em;
    line-height: 1em;
    margin-top: 2.5em;
    margin-bottom: 2.5em;
  }
  h2 {
    font-size: 2em;
    line-height: 1.25em;
    margin-top: 2.5em;
  }
  h3 {
    font-family: "EquinorBold", Arial, sans-serif;
    font-size: 1.5em;
    line-height: 1em;
    margin-top: 2.5em;
  }
  h4 {
    font-family: "EquinorBold", Arial, sans-serif;
    font-size: 1em;
    line-height: 1.5em;
  }
  p {
    font-size: 1em;
    line-height: 1.5em;
  }
  input {
    font-family: EquinorRegular, sans-serif;
    font-size: 1em;
  }

  .MuiListItem-container {
    .MuiListItemSecondaryAction-root {
      display: none;
    }

    &:hover {
      .MuiListItemSecondaryAction-root {
        display: block;
      }
    }
  }

  .MuiPaper-root{
    background:${(props) => props.colors.ui.backgroundLight} !important;
     p {
     color:${(props) => props.colors.text.staticIconsDefault}!important;
    }
    svg{
      fill:${(props) => props.colors.infographic.primaryMossGreen} !important; 
    }
  }

  input[type=text],input[type=password],input[type=number] {
    color:${(props) => props.colors.text.staticIconsDefault} ;
  }

  .checkBox span{
  color:${(props) => props.colors.text.staticIconsDefault} 

  }

  input[type=checkbox] + svg{
    fill:${(props) => props.colors.infographic.primaryMossGreen} 
  }
  .textFeild{
    div{
          background:${(props) => props.colors.text.staticTextFeildDefault}
    }
  }
  .dialogHeader{
    hr{
      background-color: ${(props) => props.colors.interactive.disabledBorder};
    }
  
  } 
  .textFeild label{
    color:${(props) => props.colors.text.staticTextLabel}
  }
  .checkBox {
    span{
    color :${(props) => props.colors.infographic.primaryMossGreen}
    }
    span:hover{
      background:${(props) => props.colors.interactive.checkBoxHover}
    }
 
  }
  .native {
    select {
      background:${(props) => props.colors.text.staticTextFeildDefault};
      color:${(props) => props.colors.text.staticIconsDefault};
      option {
        background:${(props) => props.colors.ui.backgroundLight} ;
        color:${(props) => props.colors.text.staticIconsDefault};
      }
    }
    label {
        color: ${(props) => props.colors.text.staticTextLabel} !important;
    }
  }
  .row{
    .Autocomplete__Container {
      background:pink
    }
  }

`;

export default GlobalStyles;
