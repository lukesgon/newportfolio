import Main from "../../components/box/Main";
import styled from "styled-components";
import { useThemeContext } from "../../contexts/ThemeContext";
import { ThemeProps } from "../../contexts/ThemeContext";
import { useLang } from "../../contexts/LangContext";
import ProjectSection from "../../components/box/ProjectSection";
import ProjectCard from "../../components/box/ProjectCard";
import Section from "../../components/box/Section";
import iFoodImg from '../../img/projects/vanilla/iFoodLandingPage.png'

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
        <Section>
          <ProjectCard projectTitle="iFood Landing Page" imgCaption="Este projeto foi desenvolvido durante a trilha de Desenvolvimento Front-End do curso Ada.Tech." imgAlt="Preview Ifood Landing Page" imgSrc={iFoodImg} projectHref="/"/>
        </Section>
      </ProjectSection>
    </Main>
  );
};

export default Portfolio;
