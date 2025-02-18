import Section from "../Section";
import { useThemeContext } from "../../../contexts/ThemeContext";
import styled from "styled-components";
import { ThemeProps } from "../../../contexts/ThemeContext";

interface ResumeSectionProps {
  children: React.ReactNode,
  title: string,
  $custom?: string,
  $detailed: boolean,
  $theme?: ThemeProps
};

  const StyledSectionTitle = styled.h3<Partial<ResumeSectionProps>>`
    color: ${props=> props.$detailed ?props.$theme?.colors.detailColor :'var(--color-3)'};
  
    font-size: 1.3rem;
    font-weight: bold;
    width: 100%;
    padding: 0.3rem 0;
  `

const ResumeSection = ({children, title, $custom, $detailed}:ResumeSectionProps)=> {
  const {$theme} = useThemeContext();
  return(
    <Section
      $width="100%"
      $padding="0 0 0.5rem 0"
      $color={$detailed ?$theme.colors.detailColor :$theme.colors.tertiary}
    >
      <Section
        $width="100%"
        $custom={$detailed ?"border-bottom: solid 3px var(--color-5);" :"border-bottom: solid 3px var(--color-3);"}
      >
        <StyledSectionTitle $detailed={$detailed}>
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