import ProjectCard from "../../box/ProjectCard";
import { useLang } from "../../../contexts/LangContext";

export type ProjectProps = {
  id: string;
  name: string;
  description: string;
  img: string;
  imgAlt: string;
  techs: string[];
  repo: string;
  preview: string;
  detail: string;
};

type Props = {
  projects: ProjectProps[];
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
          projectHref={e.detail}
        />
      ))}
    </>
  );
}
