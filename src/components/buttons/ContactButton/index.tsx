import styled from "styled-components";
import ContactIcon from "../../icons/ContactIcon";
import { ThemeProps } from "../../../contexts/ThemeContext";

interface ButtonProps {
  $active: boolean,
  onClick: () => void,
  $theme: ThemeProps
};

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props=> props.$theme.colors.background};
  fill: ${props=>props.$active && 'var(--color-2)'|| 'var(--color-3)'};
  border: none;

  display: flex;
  align-items: end;
  justify-content: center;
  padding: 0.3rem;
  padding-bottom: 0;
  z-index: 1000;
  cursor: pointer;
`;

const ContactButton = ({$active, onClick, $theme}:ButtonProps)=> {
  return(
    <StyledButton $active={$active} onClick={onClick} $theme={$theme}>
      <ContactIcon width="2rem" height="2rem" />
    </StyledButton>
  )
};

export default ContactButton;