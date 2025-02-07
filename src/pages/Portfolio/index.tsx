import Main from "../../components/box/Main";
import styled from "styled-components";
import { useThemeContext } from "../../contexts/ThemeContext";
import { ThemeProps } from "../../contexts/ThemeContext";
import { useLang } from "../../contexts/LangContext";
import ProjectSection from "../../components/box/ProjectSection";
import Section from "../../components/box/Section";
import Projects from '../../content/Projects/index.json';
import ProjectSpreader from "../../components/Utils/ProjectSpreader";

interface HeaderProps {
  $theme: ThemeProps;
}

const StyledHeader = styled.h1<HeaderProps>`
  color: ${(props) => props.$theme.colors.tertiary};
  font-size: 2rem;
  padding-bottom: 1rem;
`;

const Portfolio = () => {
  const { $theme } = useThemeContext();
  const { library } = useLang();

  return (
    <Main>
      <StyledHeader $theme={$theme}>{library.portfolioHeader}</StyledHeader>
      <ProjectSection title="Front-End" sub="vanilla.js">
        <i>{library.vanillaJSDescription}</i>
        <Section $direction="row" $justify="center" $width="100%" $custom="max-width: 100%;">
          <ProjectSpreader projects={Projects}/>
        </Section>
      </ProjectSection>
    </Main>
  );
};

export default Portfolio;
