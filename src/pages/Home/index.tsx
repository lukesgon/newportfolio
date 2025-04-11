import Main from "../../components/box/Main";
import ImgBox from "../../components/box/ImgBox";
import Thumb from '/img/lucas-dev.webp';
import { useLang } from "../../contexts/LangContext";
import Section from "../../components/box/Section";
import AutoCode from "../../components/Utils/AutoCode";
import MyStack from "../../components/box/MyStack";
import ServicesBox from "../../components/box/ServicesBox";
import ServiceCard from "../../components/box/ServiceCard";
import WebSiteIcon from "../../components/icons/WebSiteIcon";
import FreelancerIcon from "../../components/icons/FreelancerIcon";
import DocIcon from "../../components/icons/DocIcon";
import MaintenanceIcon from "../../components/icons/MaintenanceIcon";

const Home = ()=> {
  const { library } = useLang();

  return(
    <Main>
      <Section $padding='0 0 2rem 0'$direction="row" $justify="space-around" $width="100%" $height="260px" $align="center" $custom="@media (orientation: portrait) {flex-direction:column; gap: 1rem; min-height: 260px; justify-content: start; height: 260px; padding: 0}">
        <ImgBox src={Thumb} $width="200px" $height="200px" alt='Foto de Lucas' $custom='border-radius: 50%; border: solid 3px var(--color-3); @media (orientation: portrait){ max-width: 15vh; max-height: 15vh; }'/>
        <Section $direction='row' $width="60%" $custom="@media (orientation:portrait) {width: 100%; justify-content: center; align-items: center;}">
          <AutoCode />
        </Section>
      </Section>
      <MyStack />

      <ServicesBox $title={library.myServices}>
        <ServiceCard $title={library.makeSiteService} $width={13} $height={15}>
          <WebSiteIcon fill="var(--color-3)" />
        </ServiceCard>
        <ServiceCard $title={library.freeLanceService} $width={15} $height={15}>
          <FreelancerIcon fill="var(--color-3)" />
        </ServiceCard>
        <ServiceCard $title={library.makeDocService} $width={13} $height={15}>
          <DocIcon fill="var(--color-3)" />
        </ServiceCard>
        <ServiceCard $title={library.maintenanceService} $width={13} $height={15}>
          <MaintenanceIcon fill="var(--color-3)" />
        </ServiceCard>
      </ServicesBox>
    </Main>
  )
};

export default Home;