import styled from "styled-components";
import Section from "../Section";
import { ThemeProps } from "../../../contexts/ThemeContext";

interface SoftSkillProps {
  $theme: ThemeProps,
  $detailed: boolean,
  $title?: string,
  $custom?: string,
  children?: React.ReactNode,
};

const StyledSoftSkillBox =  styled.article<SoftSkillProps>`
  width: 100%;
  color: ${props=> props.$detailed ? props.$theme.colors.detailColor : props.$theme.colors.tertiary};
  border: ${props=> props.$detailed ? "solid 3px var(--color-5)" :"solid 3px transparent"};
  padding: 0.3rem;

  ${props=> props.$custom};
`

const SoftSkill = ({children, $theme, $title, $detailed, $custom}:SoftSkillProps)=> {
  return(
    <StyledSoftSkillBox $detailed={$detailed} $theme={$theme} $custom={$custom}>
      <Section $color={$detailed ?$theme.colors.detailColor :$theme.colors.tertiary} $width="100%">
        <h4>{$title}</h4>
      </Section>
      <Section $width="100%" >
        <em>
          {children}
        </em>
      </Section>
    </StyledSoftSkillBox>
  )
};

export default SoftSkill;