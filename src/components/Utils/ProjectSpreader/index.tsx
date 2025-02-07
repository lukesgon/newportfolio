import ProjectCard from "../../box/ProjectCard";
import { useLang } from "../../../contexts/LangContext";

type Project = {
  id: string;
  name: string;
  description: string; // <- Contém a key da tradução
  img: string;
  imgAlt: string;
  techs: string[];
  repo: string;
  preview: string;
};

type Props = {
  projects: Project[];
};

export default function ProjectSpreader({ projects }: Props) {
  const { library } = useLang();

  return (
    <>
      {projects.map((e) => (
        <ProjectCard
          key={e.id}
          projectTitle={e.name}
          imgAlt={e.imgAlt}
          imgSrc={e.img}
          imgCaption={library[e.description]}
          projectHref={"/"}
        />
      ))}
    </>
  );
}
