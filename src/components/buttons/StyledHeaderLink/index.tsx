import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeProps } from "../../../contexts/ThemeContext";

interface StyledLinkProps {
  $active: boolean;
  $theme: ThemeProps
};

const StyledHeaderLink = styled(Link)<StyledLinkProps>`
  background-color: ${props=> props.$theme.colors.background};
  fill: ${props=>props.$active && 'var(--color-2)'|| 'var(--color-3)'};
  padding: 0.3rem;
  padding-bottom: 0;
  height: fit-content;
  width: fit-content;
`;

export default StyledHeaderLink;