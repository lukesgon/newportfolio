import Main from "../../components/box/Main";
import styled from "styled-components";
import { useThemeContext } from "../../contexts/ThemeContext";
import { ThemeProps } from "../../contexts/ThemeContext";
import { useLang } from "../../contexts/LangContext";
import ProjectSection from "../../components/box/ProjectSection";
import Section from "../../components/box/Section";
import VanillaProjects from '../../content/Projects/Vanilla/index.json';
import ReactProjects from '../../content/Projects/React/index.json';
import ProjectSpreader from "../../components/Utils/ProjectSpreader";

interface HeaderProps {
  $theme: ThemeProps;
}

const StyledHeader = styled.h1<HeaderProps>`
  color: ${(props) => props.$theme.colors.primary};
  font-size: 2rem;
  padding-bottom: 1rem;
`;

const Portfolio = () => {
  const { $theme } = useThemeContext();
  const { library } = useLang();

  return (
    <Main>
      <StyledHeader $theme={$theme}>{library.portfolioHeader}</StyledHeader>
      <ProjectSection title="Front-End" sub="React.js">
        <i>{library.reactJSDescription}</i>
        <Section $direction="row" $justify="center" $width="100%" $custom="max-width: 100%; gap: 1rem; flex-wrap: wrap;">
          <ProjectSpreader projects={ReactProjects}/>
        </Section>
      </ProjectSection>
      <ProjectSection title="Front-End" sub="vanilla.js">
        <i>{library.vanillaJSDescription}</i>
        <Section $direction="row" $justify="center" $width="100%" $custom="max-width: 100%; gap: 1rem; flex-wrap: wrap;">
          <ProjectSpreader projects={VanillaProjects}/>
        </Section>
      </ProjectSection>
    </Main>
  );
};

export default Portfolio;
