import { StyledStack } from "../FrontStack";
import Section from "../Section";
import Article from "../Article";
import GitIcon from "../../icons/StackIcons/GitIcon";
import FigmaIcon from "../../icons/StackIcons/FigmaIcon";
import FirebaseIcon from "../../icons/StackIcons/FireBaseIcon";
import GitHubIcon from "../../icons/StackIcons/GitHubIcon";
import IconBox from "../IconBox";

const ToolStack = ()=> {
  return(
    <StyledStack>
      <Section $align="center" $justify="space-evenly" $height="100%">
        <Article $justify="center" $align="center" $custom="font-weight: bold; gap: 3px;">
          <IconBox $width={8} $height={8}>
            <GitIcon $width="100%" $height="100%" />
          </IconBox>
          <small>Git</small>
        </Article>
        <Article $justify="center" $align="center" $custom="font-weight: bold; gap: 3px;">
          <IconBox $width={8} $height={8}>
            <GitHubIcon $width="100%" $height="100%" />
          </IconBox>
          <small>GitHub</small>
        </Article>
      </Section>
      
      <Section $align="center" $justify="space-evenly" $height="100%">
        <Article $justify="center" $align="center" $custom="font-weight: bold; gap: 3px;">
          <IconBox $width={8} $height={8}>
            <FirebaseIcon $width="100%" $height="100%" />
          </IconBox>
          <small>FireBase</small>
        </Article>
        <Article $justify="center" $align="center" $custom="font-weight: bold; gap: 3px;">
          <IconBox $width={8} $height={8}>
            <FigmaIcon $width="100%" $height="100%" />
          </IconBox>
          <small>Figma</small>
        </Article>
      </Section>
    </StyledStack>
  )
};

export default ToolStack;