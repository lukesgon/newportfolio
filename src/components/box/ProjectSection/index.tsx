import Section from "../Section";
import { useThemeContext } from "../../../contexts/ThemeContext";
import styled from "styled-components";

interface ProjectSectionProps {
  children: React.ReactNode;
  title: string;
  sub?: string;
}

const StyledHeader = styled.h3`
  font-size: 1.5rem;
`;

const StyledIntensify = styled.i`
  color: var(--color-3);
`;

const ProjectSection = ({ children, title, sub }: ProjectSectionProps) => {
  const { $theme } = useThemeContext();

  return (
    <Section
      $width="1024px"
      $custom="@media (orientation:portrait) {max-width: 92vw;}"
      $padding="0 0 2rem 0"
    >
      <Section
        $direction="row"
        $align="center"
        $width="100%"
        $color={$theme.colors.tertiary}
        $custom="border-bottom: solid 3px var(--color-3); gap:10px;"
      >
        <StyledHeader>{title}</StyledHeader>
        {sub && <StyledIntensify>{sub}</StyledIntensify>}
      </Section>
      <Section
        $padding="1rem 0"
        $width="100%"
        $custom="flex-wrap: wrap; gap:24px;"
        $justify="center"
      >
        {children}
      </Section>
    </Section>
  );
};

export default ProjectSection;
