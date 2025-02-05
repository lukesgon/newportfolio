import styled from "styled-components";
import HomeButton from "../../buttons/HomeButton";
import PortfolioButton from "../../buttons/PortfolioButton";
import ResumeButton from "../../buttons/ResumeButton";
import ContactButton from "../../buttons/ContactButton";
import { useState } from "react";
import { createPortal } from "react-dom";
import ContactBox from "../ContactBox";
import { useThemeContext } from "../../../contexts/ThemeContext";

const StyledNav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: end;
  z-index: 3000;

  ul {
    list-style: none;
    display: flex;
  }
`

const NavBar = ()=> {
  const {$theme} = useThemeContext();
  const [isActive, setIsActive] = useState(false);

  function handleToggle(){
    setIsActive(!isActive);
  }

  return(
    <StyledNav>
      <ul>
        <li>
          <HomeButton />
        </li>
        <li>
          <PortfolioButton />
        </li>
        <li>
          <ResumeButton />
        </li>
        <li>
          <ContactButton $active={isActive} onClick={handleToggle} $theme={$theme}/>
        </li>
      </ul>

      {isActive && createPortal(
        <ContactBox $setIsOpen={handleToggle}/>, document.body
      )}
    </StyledNav>
  )
};

export default NavBar;