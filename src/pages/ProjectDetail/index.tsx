import Main from "../../components/box/Main";
import { useParams } from "react-router-dom";
import vanillaProjects from '../../content/Projects/Vanilla/index.json'
import reactProjects from '../../content/Projects/React/index.json';
import { useLang } from "../../contexts/LangContext";
import Section from "../../components/box/Section";
import ImgBox from "../../components/box/ImgBox";
import TechBox from "../../components/box/TechBox";
import ProjectLink from "../../components/buttons/ProjectLink";

const ProjectDetail = () => {
  const { library } = useLang();
  const { id } = useParams();
  const mergedJson = [...vanillaProjects, ...reactProjects]
  const project = mergedJson.find((p) => p.id === id);

  if (!project) {
    return (
      <Main>
        <p>{library.unknownProject}</p>
      </Main>
    );
  }

  return (
    <Main>
      <Section $color="var(--color-3)"$width="100%" $custom="border-bottom: solid 3px var(--color-3);">
        <h1>{project.name}</h1>
      </Section>
      <Section $custom="@media (orientation: portrait) {flex-direction: column-reverse;}" $width="100%" $align="center">
        <Section $custom="gap: 1rem;" $width="100%" $align="center">
          <Section $custom="padding-top: 1rem;">
            {library[project.fullDescription]}
          </Section>
          <Section $width="100%" $height="fitcontent" $align="center">
            <TechBox project={project} $width="fit-content" />
            <Section $direction="row" $justify="center" $align="center" $width="100%" $custom="gap: 1rem;" $padding="1rem 0">
              <ProjectLink href={project.preview} target="_blank">{library.previewButton}</ProjectLink>
              <ProjectLink href={project.repo} target="_blank">{library.repoButton}</ProjectLink>
            </Section>
          </Section>
        </Section>
        <Section $padding="1rem 0">
          <ImgBox src={project.img} alt={project.imgAlt} $custom="border: solid 3px var(--color-3); @media (orientation:landscape) {width: 70%; height: auto;}"/>
        </Section>
      </Section>
    </Main>
  );
};

export default ProjectDetail;
