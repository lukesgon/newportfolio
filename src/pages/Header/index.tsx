import NavBar from "../../components/box/NavBar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ImgBox from "../../components/box/ImgBox";
import Logo from '/img/devLucas.png';
import SettingButton from "../../components/buttons/SettingButton";
import { useState } from "react";
import { createPortal } from "react-dom";
import SettingBox from "../../components/box/SettingBox";
import { useThemeContext } from "../../contexts/ThemeContext";
import { ThemeProps } from "../../contexts/ThemeContext";

interface StyledHeaderProps {
  $theme: ThemeProps,
};

const StyledHeader = styled.header<StyledHeaderProps>`
  position: fixed;
  top: 0;
  left: 1rem;
  right: 1rem;
  
  height: fit-content;

  padding: 0.5rem 0 0 0;

  display: flex;
  justify-content: space-between;
  align-items: end;

  border-bottom: solid 3px var(--color-3);

  background-color: ${props=> props.$theme.colors.background};
`

const StyledOutlet = styled(Outlet)`
  width: 100%;
  height: fit-content;

  max-width: 100dvw;
`

const Header = ()=> {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const {$theme} = useThemeContext();

  function handleSettings() {
    setSettingsOpen(!settingsOpen)
  };

  return(
    <>
      <StyledHeader $theme={$theme}>
        <ImgBox src={Logo} alt='Page Logo' $width="3rem" $height="3rem"/>
        <NavBar />
      </StyledHeader>
      <StyledOutlet />
      <SettingButton $isActive={settingsOpen} onClick={handleSettings} $theme={$theme}/>
      {settingsOpen && createPortal(<SettingBox />, document.body)}
    </>
  )
};

export default Header;