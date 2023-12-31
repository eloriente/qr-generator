// Vendors
import { createGlobalStyle } from "styled-components";
// Components
import FontsComponent from "../ui-fonts/ui-fonts.component.styled";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily.fontFamilyA};
  }

  body {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.backgroundColorA};
    display: flex;
    flex-direction: column;
    height: 100svh;
    justify-content: center;
    margin: 0;
    width: 100vw;
  }

  ${ FontsComponent }
`;

export default GlobalStyles;