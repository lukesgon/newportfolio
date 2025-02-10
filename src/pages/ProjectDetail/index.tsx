import Main from "../../components/box/Main";
import { useParams } from "react-router-dom";
import projects from "../../content/Projects/index.json";
import { useLang } from "../../contexts/LangContext";
import Section from "../../components/box/Section";
import ImgBox from "../../components/box/ImgBox";
import TechBox from "../../components/box/TechBox";

const ProjectDetail = () => {
  const { library } = useLang();
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Main>
        <p>{library.unknownProject}</p>
      </Main>
    );
  }

  const portraitStyle = `
    @media (orientation: portrait) {
      flex-wrap: wrap;
      flex-direction: column-reverse;
      justify-content: start;
      align-items: center
    }
  `;

  return (
    <Main>
      <Section $width="100%" $custom="border-bottom: solid 3px var(--color-3);">
        <h1>{project.name}</h1>
      </Section>
      <Section
        $direction="row"
        $width="100%"
        $padding="1rem 0"
        $custom={portraitStyle}
      >
        <Section
          $width="65%"
          $padding="0 1.5rem 0 0"
          $custom="@media (orientation: portrait){width: 100%;}"
        >
          {project.fullDescription}
        </Section>
        <Section
          $width="35%"
          $custom="@media (orientation: portrait){width: 100%;}"
        >
          <ImgBox
            src={project.img}
            alt={project.imgAlt}
            $width="100%"
            $height="auto"
            $custom="border: solid 3px var(--color-3)"
          />
          <TechBox project={project} />
        </Section>
      </Section>
    </Main>
  );
};

export default ProjectDetail;
