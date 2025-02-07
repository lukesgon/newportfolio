import Main from "../../components/box/Main";
import { useParams } from "react-router-dom";
import projects from '../../content/Projects/index.json';
import { useLang } from "../../contexts/LangContext";

const ProjectDetail = ()=> {
  const {library} = useLang();
  const {id} = useParams();
  const project = projects.find((p)=>p.id === id);

  if (!project) {
    return(
      <p>{library.unknownProject}</p>
    )
  };

  return(
    <Main>
      Project Template
    </Main>
  )
};

export default ProjectDetail;