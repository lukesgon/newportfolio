import CloseIcon from "../../icons/CloseIcon";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color-4);
  fill: var(--color-2);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({onClick}:CloseButtonProps)=> {
  return(
    <StyledButton onClick={onClick}>
      <CloseIcon />
    </StyledButton>
  )
};

export default CloseButton;