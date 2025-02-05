import styled from "styled-components";
import Article from "../Article";
import Section from "../Section";
import HTMLIcon from "../../icons/StackIcons/HTMLIcon";
import CSSIcon from "../../icons/StackIcons/CSSIcon";
import JavaScriptIcon from "../../icons/StackIcons/JavaScriptIcon";
import TypeScriptIcon from "../../icons/StackIcons/TypeScriptIcon";
import BootStrapIcon from "../../icons/StackIcons/BootStrapIcon";
import ReactIcon from "../../icons/StackIcons/ReactIcon";
import IconBox from "../IconBox";

export const StyledStack = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.3rem 0.5rem;
  width: 100%;
  height: 100%;
  gap: 1rem;
  overflow: hidden;
`;

const FrontStack = () => {
  return (
    <StyledStack>
      <Section $align="center" $justify="space-evenly" $height="100%">
        <Article
          $justify="center"
          $align="center"
          $custom="font-weight: bold; gap: 3px;"
        >
          <IconBox $width={8} $height={8}>
            <HTMLIcon $width="100%" $height="100%" />
          </IconBox>
          <small>HTML5</small>
        </Article>
        <Article
          $justify="center"
          $align="center"
          $custom="font-weight: bold; gap: 3px;"
        >
          <IconBox $width={8} $height={8}>
            <CSSIcon $width="100%" $height="100%" />
          </IconBox>
          <small>CSS</small>
        </Article>
      </Section>
      <Section $align="center" $justify="space-evenly" $height="100%">
        <Article
          $justify="center"
          $align="center"
          $custom="font-weight: bold; gap: 3px;"
        >
          <IconBox $width={8} $height={8}>
            <JavaScriptIcon $width="100%" $height="100%" />
          </IconBox>
          <small>JavaScript</small>
        </Article>
        <Article
          $justify="center"
          $align="center"
          $custom="font-weight: bold; gap: 3px;"
        >
          <IconBox $width={8} $height={8}>
            <TypeScriptIcon $width="100%" $height="100%" />
          </IconBox>
          <small>TypeScript</small>
        </Article>
      </Section>
      <Section $align="center" $justify="space-evenly" $height="100%">
        <Article
          $justify="center"
          $align="center"
          $custom="font-weight: bold; gap: 3px;"
        >
          <IconBox $width={8} $height={8}>
            <BootStrapIcon $width="100%" $height="100%" />
          </IconBox>
          <small>BootStrap</small>
        </Article>
        <Article
          $justify="center"
          $align="center"
          $custom="font-weight: bold; gap: 3px;"
        >
          <IconBox $width={8} $height={8}>
            <ReactIcon $width="100%" $height="100%" />
          </IconBox>
          <small>React</small>
        </Article>
      </Section>
    </StyledStack>
  );
};

export default FrontStack;
