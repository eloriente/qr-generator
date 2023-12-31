// Vendors
import { createGlobalStyle } from "styled-components";
// Components
import FontsComponent from "../ui-fonts/ui-fonts.component.styled";

const GlobalStyles = createGlobalStyle`
  ${ FontsComponent }
  
  * {
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily.fontFamilyA};
  }
`;

export default GlobalStyles;