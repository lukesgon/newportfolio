import Main from "../../components/box/Main";
import Section from "../../components/box/Section";
import styled from "styled-components";
import { useLang } from "../../contexts/LangContext";
import ResumeSection from "../../components/box/ResumeSection";
import CVLink from "../../components/buttons/CVLink";
import { useThemeContext } from "../../contexts/ThemeContext";
import InfoResumeBox from "../../components/box/InfoResumeBox";
import { useDetailsContext } from "../../contexts/DetailContext";

const StyledHeader = styled.h1`
  color: var(--color-3);
  font-size: 2rem;
  font-weight: bold;
`;

const Resume = () => {
  const { library } = useLang();
  const { $theme } = useThemeContext();
  const { details } = useDetailsContext();

  return (
    <Main>
      <Section
        $direction="row"
        $justify="space-between"
        $width="100%"
        $custom="position: sticky; top:3.68rem"
        $backgroundColor={$theme.colors.background}
        $padding="0.3rem 0"
      >
        <StyledHeader>{library.resumeTitle}</StyledHeader>
        <CVLink />
      </Section>
      <ResumeSection title={library.aboutMeSection}>
        <p>{library.aboutMe1}</p>
        <p>{library.aboutMe2}</p>
        <p>{library.aboutMe3}</p>
        <p>{library.aboutMe4}</p>
        <p>{library.aboutMe5}</p>
      </ResumeSection>
      <ResumeSection title={library.educationSection} $custom="gap: 1rem;">
        <InfoResumeBox
          $theme={$theme}
          $title={library.educationDegree}
          $instituition={library.educationDegreeInstituition}
          $year={library.educationDegreeYear}
          $detail={false}
        >
          <p>{library.educationDegreeDetail}</p>
        </InfoResumeBox>
        <InfoResumeBox
          $theme={$theme}
          $title={library.educationTechnical}
          $instituition={library.educationTechnicalInstituition}
          $year={library.educationTechnicalYear}
          $detail={false}
        >
          <p>{library.educationTechnicalDetail}</p>
        </InfoResumeBox>
      </ResumeSection>

      <ResumeSection title={library.professionalSection} $custom="gap: 1rem;">
        {details && (
          <>
            <InfoResumeBox
              $theme={$theme}
              $title={library.itTechnician}
              $instituition={library.itTechnicianCompany}
              $year={library.itTechnicianYear}
              $detail
            >
              <p>{library.itTechnicianDetail}</p>
            </InfoResumeBox>

            <InfoResumeBox
              $theme={$theme}
              $title={library.operationalAssistant}
              $instituition={library.operationalAssistantCompany}
              $year={library.operationalAssistantYear}
              $detail
            >
              <p>{library.operationalAssistantDetail}</p>
            </InfoResumeBox>

            <InfoResumeBox
              $theme={$theme}
              $title={library.mailCarrier}
              $instituition={library.mailCarrierCompany}
              $year={library.mailCarrierYear}
              $detail
            >
              <p>{library.mailCarrierDetail}</p>
            </InfoResumeBox>

            <InfoResumeBox
              $theme={$theme}
              $title={library.pontoX}
              $instituition={library.pontoXCompany}
              $year={library.pontoXYear}
              $detail
            >
              <p>{library.pontoXDetail}</p>
            </InfoResumeBox>
          </>
        )}

        <InfoResumeBox
          $theme={$theme}
          $title={library.gelsonProject}
          $detail={false}
        >
          <em>
            <a href="https://chaveirogelson.com.br" target="_blank">
              Chaveiro Gelson
            </a>{" "}
            (2024)
          </em>
          <p>{library.gelsonProjectDetail}</p>
        </InfoResumeBox>

        {details && (
          <>
            <InfoResumeBox
              $theme={$theme}
              $title={library.gelsonCompany}
              $instituition={library.gelsonCompanyCompany}
              $year={library.gelsonCompanyYear}
              $detail
            >
              <p>{library.gelsonCompanyDetail}</p>
            </InfoResumeBox>

            <InfoResumeBox
              $theme={$theme}
              $title={library.internUrbanMetrics}
              $instituition={library.internUrbanMetricsCompany}
              $year={library.internUrbanMetricsYear}
              $detail
            >
              <p>{library.internUrbanMetricsDetail}</p>
            </InfoResumeBox>

            <InfoResumeBox
              $theme={$theme}
              $title={library.gersonZaffalon}
              $instituition={library.gersonZaffalonCompany}
              $year={library.gersonZaffalonYear}
              $detail
            >
              <p>{library.gersonZaffalonDetail}</p>
            </InfoResumeBox>

            <InfoResumeBox
              $theme={$theme}
              $title={library.hervalPlanning}
              $instituition={library.hervalPlanningCompany}
              $year={library.hervalPlanningYear}
              $detail
            >
              <p>{library.hervalPlanningDetail}</p>
            </InfoResumeBox>

            <InfoResumeBox
              $theme={$theme}
              $title={library.fuelStation}
              $instituition={library.fuelStationCompany}
              $year={library.fuelStationYear}
              $detail
            >
              <p>{library.fuelStationDetail}</p>
            </InfoResumeBox>

            <InfoResumeBox
              $theme={$theme}
              $title={library.candiotaPlanning}
              $instituition={library.candiotaPlanningCompany}
              $year={library.candiotaPlanningYear}
              $detail
            >
              <p>{library.candiotaPlanningDetail}</p>
            </InfoResumeBox>

            <InfoResumeBox
              $theme={$theme}
              $title={library.chuyPlanning}
              $instituition={library.chuyPlanningCompany}
              $year={library.chuyPlanningYear}
              $detail
            >
              <p>{library.chuyPlanningDetail}</p>
            </InfoResumeBox>

            <InfoResumeBox
              $theme={$theme}
              $title={library.internLab}
              $instituition={library.internLabCompany}
              $year={library.internLabYear}
              $detail
            >
              <p>{library.internLabDetail}</p>
            </InfoResumeBox>

            <InfoResumeBox
              $theme={$theme}
              $title={library.atelieIntern}
              $instituition={library.atelieInternCompany}
              $year={library.atelieInternYear}
              $detail
            >
              <p>{library.atelieInternDetail}</p>
            </InfoResumeBox>

            <InfoResumeBox
              $theme={$theme}
              $title={library.martinsIntern}
              $instituition={library.martinsInternCompany}
              $year={library.martinsInternYear}
              $detail
            >
              <p>{library.martinsInternDetail}</p>
            </InfoResumeBox>
          </>
        )}
      </ResumeSection>
      
      <ResumeSection title={library.freeEducationSection} $custom="gap: 1rem">
        <InfoResumeBox
        $theme={$theme}
        $title={library.origamidUIBegin}
        $instituition={library.origamidUIBeginCompany}
        $year={library.origamidUIBeginYear}
        $detail={false}>
          <p>{library.origamidUIBeginDetail}</p>
        </InfoResumeBox>

        <InfoResumeBox
        $theme={$theme}
        $title={library.adaTech}
        $instituition={library.adaTechCompany}
        $year={library.adaTechYear}
        $detail={false}>
          <p>{library.adaTechDetail}</p>
        </InfoResumeBox>
        
        <InfoResumeBox
        $theme={$theme}
        $title={library.descomplica}
        $instituition={library.descomplicaCompany}
        $year={library.descomplicaYear}
        $detail={false}>
          <p>{library.descomplicaDetail}</p>
        </InfoResumeBox>
      </ResumeSection>

      <Section>Cursos Livres</Section>
      <Section>Habilidades</Section>
      <Section>Projetos Pessoais</Section>
    </Main>
  );
};

export default Resume;
