import SettingIcon from "../../icons/SettingsIcon";
import CloseIcon from "../../icons/CloseIcon";
import styled from "styled-components";
import { ThemeProps } from "../../../contexts/ThemeContext";

interface SettingButtonProps {
  $isActive: boolean,
  onClick: () => void,
  $theme: ThemeProps
};

const StyledButton = styled.button<SettingButtonProps>`
  cursor: pointer;
  
  padding: 0.3rem;
  
  width: fit-content;
  height: fit-content;
  
  border-top: none;
  border-right: 3px solid var(--color-4);
  border-bottom: 3px solid var(--color-4);
  border-left: none;

  ${props=> !props.$isActive && 'border: solid 3px var(--color-3);'}

  background-color: ${props=> props.$isActive ?'var(--color-4)' :(props=> props.$theme.colors.background && props.$theme.colors.background)};
  fill: ${props=> props.$isActive ?'var(--color-1)' :'var(--color-3)'};

  position: fixed;
  bottom: 1.5rem;
  right: 1rem;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;
  
  &:hover {
    opacity: 1;
  }
`


const SettingButton = ({$isActive, onClick, $theme}:SettingButtonProps)=> {
  return(
    <StyledButton onClick={onClick} $isActive={$isActive} $theme={$theme}>
      {$isActive ? <CloseIcon width="32px" height="32px"/> : <SettingIcon width="32px" height="32px"/>}
    </StyledButton>
  )
};

export default SettingButton;