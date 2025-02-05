import TypeIt from "typeit-react";
import styled from "styled-components";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { ThemeProps } from "../../../contexts/ThemeContext";

interface TypeItProps {
  $theme: ThemeProps
};

const StyledTypeIt = styled(TypeIt)<TypeItProps>`
  --color-primary: ${props=> props.$theme.colors.tertiary}

  font-size: 2vh;
  width: 80%;
  display: block;
  text-align: start;

  @media (orientation: portrait) {
    font-size: 0.65rem;
    width: 70%;
  }
`;

const AutoCode = ()=> {
  const {$theme} = useThemeContext();

  return(
    <StyledTypeIt
    $theme={$theme}
    options={{lifeLike: true, speed:10}}
    getBeforeInit={(instance) => {
      instance
        .type("<span style='color: var(--color-3)'>function<span> ")
        .pause(350)
        .type("<span style='color: var(--color-primary)'>introduction</span><span style='color:var(--color-3)'>()</span><span style='color: var(--color-primary)'>{</span>")
        .pause(350)
        .move(-1,{speed:50})
        .pause(350)
        .type(" ")
        .pause(350)
        .move(1)
        .type("<br>")
        .type("&nbsp;&nbsp;")
        .type("<span style='color: var(--color-3)'>const</span> intro<span style='color:var(--color-3)'> =</span> `dev.Lucas SG`<span style='color:var(--color-3)'>;</span><br>")
        .pause(650)
        .type("&nbsp;&nbsp;")
        .type("<span style='color: var(--color-3)'>const</span> subtitle<span style='color:var(--color-3)'> =</span> `Web Developer`<span style='color:var(--color-3)'>;</span><br>")
        .pause(350)
        .type("&nbsp;&nbsp;")
        .type("<span style='color: var(--color-3)'>return</span> `${intro}\\n${subtitle}`<span style='color:var(--color-3)'><span style='color:var(--color-3)'>;</span></span>")
        .pause(550)
        .type("&nbsp;&nbsp;")
        .type("<br /><span style='color:var(--color-primary)'>}</span><span style='color:var(--color-3)'>;</span>")
        .pause(550)
        .type("<br><br><span style='color:var(--color-primary)'>introduction</span><span style='color:var(--color-3)'>();</span><br>")
        .pause(350) 
        .empty()
        .type("<span style='color:var(--color-primary)'>introduction</span><span style='color:var(--color-3)'>();</span><br>",{instant: true})
        .pause(350)
        .type(
          "<br><span style='color:var(--color-3)'>>> </span><span class='auto-code-name-output'>dev.Lucas SG<span style='color:var(--color-3)'>;</span></span>", {instant: true}
        )
        .type(
          "<br><span style='color:var(--color-3)'>>> </span><span class='auto-code-role-output'>Web Developer<span style='color:var(--color-3)'>;</span></span><br>", {instant: true}
        );
        return instance;
      }}
    />
  )
};

export default AutoCode;