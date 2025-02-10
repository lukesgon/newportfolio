import Section from "../Section";
import TechSpreader from "../../Utils/TechSpreader";
import { ProjectProps } from "../../Utils/ProjectSpreader";
import { useLang } from "../../../contexts/LangContext";

interface TechBoxProps {
  project: ProjectProps
}

const TechBox = ({project}:TechBoxProps)=> {
  const {library} = useLang();

  return(
    <Section $direction="column" $margin="1rem 0" $width="100%" $justify="center" $border="solid 3px var(--color-3)">
      <Section $width="100%" $align="center" $color="var(--color-2)" $backgroundColor="var(--color-3)" $padding="0.3rem 0.5rem">
        <h4>{library.projectTechs}</h4>
      </Section>
      <Section $direction="row" $width="100%" $justify="center" $custom="gap: 1rem; flex-wrap: wrap;" $padding="0.5rem 1rem">
        <TechSpreader project={project}/>
      </Section>
    </Section>
  )
};

export default TechBox;