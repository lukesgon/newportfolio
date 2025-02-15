import Section from "../Section";
import { useThemeContext } from "../../../contexts/ThemeContext";
import styled from "styled-components";

const StyledSectionTitle = styled.h3`
  color: var(--color-3);

  font-size: 1.3rem;
  font-weight: bold;
  width: 100%;
  padding: 0.3rem 0;
`

interface ResumeSectionProps {
  children: React.ReactNode,
  title: string,
  $custom?: string,
};

const ResumeSection = ({children, title, $custom}:ResumeSectionProps)=> {
  const {$theme} = useThemeContext();
  return(
    <Section
      $width="100%"
      $padding="0 0 0.5rem 0"
      $color={$theme.colors.tertiary}
    >
      <Section
        $width="100%"
        $custom="border-bottom: solid 3px var(--color-3);"
      >
        <StyledSectionTitle>
          {title}
        </StyledSectionTitle>
      </Section>
      <Section $padding="1rem 0" $width="100%" $custom={$custom}>
        {children}
      </Section>
    </Section>
  )
};

export default ResumeSection;