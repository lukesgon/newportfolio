import Section from "../Section";
import TechSpreader from "../../Utils/TechSpreader";
import { ProjectProps } from "../../Utils/ProjectSpreader";

interface TechBoxProps {
  project: ProjectProps
}

const TechBox = ({project}:TechBoxProps)=> {

  return(
    <Section $direction="row" $padding="0.5rem 1rem" $margin="1rem 0" $width="100%" $justify="center">
      <TechSpreader project={project}/>
    </Section>
  )
};

export default TechBox;