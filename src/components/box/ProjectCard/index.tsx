import styled from "styled-components";
import ImgBox from "../ImgBox";
import Article from "../Article";
import Section from "../Section";
import { useLang } from "../../../contexts/LangContext";

interface ProjectCardProps {
  projectTitle: string;
  imgSrc: string;
  imgAlt: string;
  imgCaption: string;
  projectHref: string;
}

const StyledAnchor = styled.a`
  border: none;
  background-color: transparent;
  text-decoration: none;
  width: 33%;
  height: fit-content;
  border: solid 3px var(--color-4);

  &:hover {
    border-color: var(--color-3);
  }

  @media (orientation: portrait) {
    width: 100%;
    max-width: 360px;
  }
`;

const StyledHeader = styled.h4`
  font-size: 1.5rem;
`

const ProjectCard = ({
  projectTitle,
  imgSrc,
  imgAlt,
  imgCaption,
  projectHref,
}: ProjectCardProps) => {
  
  const {library} = useLang();
  
  return (
    <StyledAnchor href={projectHref}>
      <Article
        $direction="column"
        $width="100%"
        $backgroundColor="var(--color-4)"
        $color="var(--color-2)"
        $padding="0.5rem 0 1rem"
        $custom="gap: 10px; &:hover {background-color:var(--color-3); color: var(--color-1)}"
        $align="center"
      >
        <Section>
          <StyledHeader>{projectTitle}</StyledHeader>
        </Section>
        <ImgBox
          src={imgSrc}
          alt={imgAlt}
          $figcaption={imgCaption}
          $width="100%"
          $height="fit-content"
          $custom="border: solid 3px var(--color-3);"
        />
        <Section $custom="font-size: 0.9rem">
          <strong>{library.projectDetails}</strong>
        </Section>
      </Article>
    </StyledAnchor>
  );
};

export default ProjectCard;
