import SwitchIcon from "../../icons/SwitchIcon";
import styled from "styled-components";

interface SwitchButtonProps {
  $isActive: boolean,
  onClick: ()=> void,
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  fill: var(--color-2);
  width: fit-content;
  height: fit-content;
  padding: 0.3rem;
  cursor: pointer;
`;

const SwitchButton = ({$isActive, onClick}:SwitchButtonProps)=> {
  return(
    <StyledButton onClick={onClick}>
      <SwitchIcon $isActive={$isActive}/>
    </StyledButton>
  )
};

export default SwitchButton;