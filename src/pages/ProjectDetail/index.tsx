import Main from "../../components/box/Main";
import { useParams } from "react-router-dom";
import projects from '../../content/Projects/index.json';
import { useLang } from "../../contexts/LangContext";
import Section from "../../components/box/Section";
import ImgBox from "../../components/box/ImgBox";

const ProjectDetail = ()=> {
  const {library} = useLang();
  const {id} = useParams();
  const project = projects.find((p)=>p.id === id);

  if (!project) {
    return(
      <Main>
      <p>{library.unknownProject}</p>
      </Main>
    )
  };

  return(
    <Main>
      <Section $width='100%'$custom="border-bottom: solid 3px var(--color-3);">
        <h1>{project.name}</h1>
      </Section>
      <Section $direction="row" $width="100%" $padding="1rem 0" $custom="flex-wrap: wrap;">
        <Section $width="65%">
          Test
        </Section>
        <Section $width="35%">
          <ImgBox src={project.img} alt="" $width="100%" $height="auto" $custom="border: solid 3px var(--color-3)"/>
        </Section>
      </Section>
    </Main>
  )
};

export default ProjectDetail;