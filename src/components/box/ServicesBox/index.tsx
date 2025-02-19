import Section from "../Section";
import styled from "styled-components";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { ThemeProps } from "../../../contexts/ThemeContext";

interface ServicesBoxProps {
  children: React.ReactNode,
  $title: string,
}

type StyledHeaderProps = {
  $theme: ThemeProps,
};

const StyledHeader = styled.h3<StyledHeaderProps>`
  color: ${props=> props.$theme.colors.primary};
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
`

const ServicesBox =({children, $title}:ServicesBoxProps)=> {
  const {$theme} = useThemeContext();

  return(
    <Section $width="100%" $height="fit-content" $margin="2rem 0">
      <Section $custom="border-bottom: solid 3px var(--color-3);" $width="100%">
        <StyledHeader $theme={$theme}>
          {$title}
        </StyledHeader>
      </Section>
      <Section $width="100%" $direction="row" $justify="center" $custom="flex-wrap: wrap; gap: 1rem;" $padding="1rem 0">
        {children}
      </Section>
    </Section>
  )
};

export default ServicesBox;