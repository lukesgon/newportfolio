import HomeIcon from "../../icons/HomeIcon";
import StyledHeaderLink from "../StyledHeaderLink";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../../../contexts/ThemeContext";

const HomeButton = ()=> {
  const {$theme} = useThemeContext();
  const location = useLocation().pathname;

  return(
    <StyledHeaderLink to='/' $active={(location === '/')} $theme={$theme}>
      <HomeIcon  size={42}/>
    </StyledHeaderLink>
  )
};

export default HomeButton;