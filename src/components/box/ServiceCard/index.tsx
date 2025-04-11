import Section from "../Section";
import Article from "../Article";
import IconBox from "../IconBox";
import styled from "styled-components";

interface ServiceCardProps {
  children?: React.ReactNode
  $title: string,
  $width?: number,
  $height?: number,
}

const StyledTitle = styled.h4`
  font-weight: bold;
  font-size: 1.2rem;
`

const ServiceCard = ({ children, $width, $height, $title }: ServiceCardProps) => {
  return (
    <Article
    $width="49%"
    $height="fit-content"
    $color="var(--color-3)"
    $backgroundColor="transparent"
    $padding="0 0 1rem 0"
    $custom="@media (orientation:portrait){width:100%}"
    $align="center"
    >
      <IconBox $width={$width} $height={$height}>
        {children}
      </IconBox>

      <Section
      $width="100%"
      $direction="row"
      $justify="center">
        <StyledTitle>
          {$title}
        </StyledTitle>
      </Section>
    </Article>
  );
};

export default ServiceCard;
