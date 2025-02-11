import Main from "../../components/box/Main";
import ImgBox from "../../components/box/ImgBox";
import Thumb from '../../img/lucas-dev.webp';
// import { useLang } from "../../contexts/LangContext";
// import { useDetailsContext } from "../../contexts/DetailContext";
import Section from "../../components/box/Section";
import AutoCode from "../../components/Utils/AutoCode";
import MyStack from "../../components/box/MyStack";

const Home = ()=> {
  // const { library } = useLang();
  // const { details } = useDetailsContext();

  return(
    <Main>
      <Section $padding='0 0 2rem 0'$direction="row" $justify="space-around" $width="100%" $height="260px" $align="center" $custom="@media (orientation: portrait) {flex-direction:column; gap: 1rem; min-height: 260px; justify-content: start; height: 260px; padding: 0}">
        <ImgBox src={Thumb} $width="200px" $height="200px" alt='Foto de Lucas' $custom='border-radius: 50%; border: solid 3px var(--color-3); @media (orientation: portrait){ max-width: 15vh; max-height: 15vh; }'/>
        <Section $direction='row' $width="60%" $custom="@media (orientation:portrait) {width: 100%; justify-content: center; align-items: center;}">
          <AutoCode />
        </Section>
      </Section>
      <MyStack />
    </Main>
  )
};

export default Home;