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
  width: fit-content;
  height: fit-content;
  border: solid 3px var(--color-4);

  &:hover {
    border-color: var(--color-3);
  }

  @media (orientation: portrait) {
    width: 99%;
    max-width: 358px;
  }
`;

const StyledHeader = styled.h4`
  font-size: 1.5rem;
`;

const ProjectCard = ({
  projectTitle,
  imgSrc,
  imgAlt,
  imgCaption,
  projectHref,
}: ProjectCardProps) => {
  const { library } = useLang();

  return (
    <StyledAnchor href={projectHref}>
      <Article
        $direction="column"
        $width="100%"
        $backgroundColor="var(--color-4)"
        $color="var(--color-2)"
        $padding="0.5rem 0 1rem"
        $custom="min-height: 490px; max-width: 300px; gap: 10px; &:hover {background-color:var(--color-3); color: var(--color-1)} @media (orientation:portrait) {max-width: 100%}"
        $align="center"
        $justify="space-between"
      >
        <Section $align="center" $width="100%" $custom="gap:10px;">
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
        </Section>
        <Section
          $custom="font-size: 0.9rem; text-align: center; overflow: hidden;"
          $width="100%"
          $justify="center"
          $align="center"
        >
          <strong>{library.projectDetails}</strong>
        </Section>
      </Article>
    </StyledAnchor>
  );
};

export default ProjectCard;
