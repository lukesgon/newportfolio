import { StyledStack } from "../FrontStack";
import Section from "../Section";
import Article from "../Article";
import JavaScriptIcon from "../../icons/StackIcons/JavaScriptIcon";
import TypeScriptIcon from "../../icons/StackIcons/TypeScriptIcon";
import PythonIcon from "../../icons/StackIcons/PythonIcon";
import NodeIcon from "../../icons/StackIcons/NodeIcon";
import IconBox from "../IconBox";

const BackStack = () => {
  return (
    <StyledStack>
      <Section $align="center" $justify="space-evenly" $height="100%" $custom="min-height: 100%; max-height:100%; overflow:hidden;">
        <Article $justify="center" $align="center" $custom="font-weight: bold; overflow:hidden; gap: 3px;">
          <IconBox $width={8} $height={8}>
            <JavaScriptIcon $width="100%" $height="100%" />
          </IconBox>
          <small>JavaScript</small>
        </Article>
        <Article $justify="center" $align="center" $custom="font-weight: bold; overflow:hidden; gap: 3px;">
          <IconBox $width={8} $height={8}>
            <TypeScriptIcon $width="100%" $height="100%" />
          </IconBox>
          <small>TypeScript</small>
        </Article>
      </Section>
      <Section $align="center" $justify="space-evenly" $height="100%" $custom="overflow:hidden; gap: 3px;">
        <Article $justify="center" $align="center" $custom="font-weight: bold; overflow:hidden; gap: 3px;">
          <IconBox $width={8} $height={8}>
            <NodeIcon $width="100%" $height="100%" />
          </IconBox>
          <small>Node.JS</small>
        </Article>
        <Article $justify="center" $align="center" $custom="font-weight: bold; overflow:hidden; gap: 3px;">
          <IconBox $width={8} $height={8}>
            <PythonIcon $width="100%" $height="100%" />
          </IconBox>
          <small>Python</small>
        </Article>
      </Section>
    </StyledStack>
  );
};

export default BackStack