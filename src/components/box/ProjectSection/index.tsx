import Section from "../Section";
import { useThemeContext } from "../../../contexts/ThemeContext";
import styled from "styled-components";

interface ProjectSectionProps {
  children: React.ReactNode,
  title: string
};

const StyledHeader = styled.h3`
  font-size: 1.8rem;
`;


const ProjectSection = ({children, title}:ProjectSectionProps)=> {
  const {$theme} = useThemeContext();

  return(
    <Section $width="1024px" $custom="@media (orientation:portrait) {max-width: 92vw;}">
      <Section $width="100%" $color={$theme.colors.tertiary} $custom="border-bottom: solid 3px var(--color-3);">
        <StyledHeader>{title}</StyledHeader>
      </Section>
      <Section $padding="1rem 0" $width="100%" $custom="flex-wrap: wrap;">
        {children}
      </Section>
    </Section>
  )
};

export default ProjectSection;