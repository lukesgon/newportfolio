import techList from "../../../content/Techs/TechList";
import { ProjectProps } from "../ProjectSpreader";
import IconBox from "../../box/IconBox";
import Section from "../../box/Section";
import { useThemeContext } from "../../../contexts/ThemeContext";

interface TechSpreaderProps {
  project: ProjectProps;
}

const TechSpreader = ({ project }: TechSpreaderProps) => {
  const {$theme} = useThemeContext();
  const stack = techList.filter((e) => project.techs.includes(e.name));

  if (stack.length) {
    return stack.map((e) => (
      <Section key={e.name} $align="center" $custom="gap:5px; font-weight: bold;" $color={$theme.colors.tertiary}>
        <IconBox $width={4} $height={4}>
          <e.component /> {/* aqui ele está buscando o component contido dentro do tech, la do techlist.ts, para então renderiza-lo diretamente */}
        </IconBox>
        <small>{e.name}</small>
      </Section>
    ));
  }

  return (
    <Section $color={$theme.colors.tertiary}>
      <p>Nenhuma tecnologia apresentada.</p>
    </Section>
  );
};

export default TechSpreader;
