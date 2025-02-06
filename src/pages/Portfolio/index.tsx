import Main from "../../components/box/Main";
import styled from "styled-components";
import { useThemeContext } from "../../contexts/ThemeContext";
import { ThemeProps } from "../../contexts/ThemeContext";
import { useLang } from "../../contexts/LangContext";
import ProjectSection from "../../components/box/ProjectSection";

interface HeaderProps {
  $theme: ThemeProps
};

const StyledHeader = styled.h1<HeaderProps>`
  color: ${props=> props.$theme.colors.tertiary};
  font-size: 2rem;
  padding-bottom: 1rem;
`

const Portfolio = ()=> {
  const {$theme} = useThemeContext();
  const {library} = useLang();

  return(
    <Main>
      <StyledHeader $theme={$theme}>{library.portfolioHeader}</StyledHeader>
      <ProjectSection title="Test">Test</ProjectSection>
    </Main>
  )
};

export default Portfolio;