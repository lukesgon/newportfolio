import styled from "styled-components";
import { ThemeProps } from "../../../contexts/ThemeContext";

interface StyledArchorProps {
  $theme: ThemeProps
  $detailed: boolean 
};

const StyledAnchor = styled.a<StyledArchorProps>`
  color: ${props=> props.$detailed ?props.$theme.colors.detailColor :props.$theme.colors.tertiary};

  &:visited {
    color: ${props=> props.$detailed ?props.$theme.colors.detailColor :props.$theme.colors.tertiary};
  }
`;

export default StyledAnchor;