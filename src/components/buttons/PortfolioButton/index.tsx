import PortfolioIcon from "../../icons/PortfolioIcon";
import StyledHeaderLink from "../StyledHeaderLink";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../../../contexts/ThemeContext";


const PortfolioButton = ()=> {
  const {$theme} = useThemeContext();
  const location = useLocation().pathname;

  return(
    <StyledHeaderLink to="/portfolio" $active={(location === '/portfolio')} $theme={$theme}>
      <PortfolioIcon size={42} isOpen={(location === '/portfolio')}/>
    </StyledHeaderLink>
  )
};

export default PortfolioButton;