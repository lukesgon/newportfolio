import StyledHeaderLink from "../StyledHeaderLink";
import ResumeIcon from "../../icons/ResumeIcon";
import { useLocation } from "react-router-dom";
import { useThemeContext } from "../../../contexts/ThemeContext";

const ResumeButton = ()=> {
  const {$theme} = useThemeContext();
  const location = useLocation().pathname;
  
  return(
    <StyledHeaderLink to="/resume" $active={(location === '/resume')} $theme={$theme}>
      <ResumeIcon size={42} />
    </StyledHeaderLink>
  )
};

export default ResumeButton;