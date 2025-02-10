import Article from "../Article";
import StackSection from "../StackSection";
import { useState, useRef, useEffect } from "react";
import FrontStack from "../FrontStack";
import Section from "../Section";
import { useLang } from "../../../contexts/LangContext";
import BackStack from "../BackStack";
import ToolStack from "../ToolStack";

const MyStack = () => {
  const { library } = useLang();
  const [section, setSection] = useState("front");
  const [isHover, setIsHover] = useState(false);
  const currentTime = useRef(0);

  function handleSetSection(section: string) {
    setSection(section);
  }

  function autoChangeSection($isHover:boolean) {
    if($isHover) {
      clearInterval(currentTime.current);
    } else {
      const section = ['front', 'back', 'util'];
      let i = 0;
      currentTime.current = setInterval(()=> {
        if(i>= 2) {
          i = 0
        } else {
          i++
        };

        setSection(section[i])
      },5000)
    }
  };

  useEffect(()=> {
    setIsHover(false)
  },[])

  useEffect(()=>{
    autoChangeSection(isHover);

    return () => {
      if (currentTime.current) {
        clearInterval(currentTime.current);
      }
    }
  },[isHover])

  return (
    <Article $custom="@media (orientation:portrait){min-height: 450px}">
      <Section
        $direction="row"
        $backgroundColor="var(--color-3)"
        $width="100%"
        $justify="center"
        $padding="0.3rem 0.5rem"
        $color="var(--color-2)"
      >
        <h3>{library.stack}</h3>
      </Section>
      <Section
        $direction="row"
        $justify="center"
        $width="1024px"
        $backgroundColor="transparent"
        $border="solid 3px var(--color-3)"
        $height="450px"
        $custom="min-height:fit-content; @media (orientation:portrait){flex-direction: column; height: 50vh; max-height: 450px }"
      >
        <StackSection
          $title="FRONT-END"
          $isHover={section === "front"}
          onMouseEnter={() => {
            handleSetSection("front");
            setIsHover(true);
          }}
          onMouseLeave={()=> setIsHover(false)}
        >
          <FrontStack />
        </StackSection>
        <StackSection
          $title="BACK-END"
          $isHover={section === "back"}
          onMouseEnter={()=> {
            handleSetSection("back")
            setIsHover(true);
          }}
          onMouseLeave={()=> setIsHover(false)}
        >
          <BackStack />
        </StackSection>
        <StackSection
          $title={library.tools}
          $isHover={section === "util"}
          onMouseEnter={()=> {
            handleSetSection("util");
            setIsHover(true);
          }}
          onMouseLeave={()=> setIsHover(false)}
        >
          <ToolStack />
        </StackSection>
      </Section>
    </Article>
  );
};

export default MyStack;
