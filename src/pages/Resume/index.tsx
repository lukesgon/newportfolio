import Main from "../../components/box/Main";
import Section from "../../components/box/Section";
import styled from "styled-components";
import { useLang } from "../../contexts/LangContext";
import ResumeSection from "../../components/box/ResumeSection";
import CVLink from "../../components/buttons/CVLink";
import { useThemeContext } from "../../contexts/ThemeContext";
import InfoResumeBox from "../../components/box/InfoResumeBox";
import { useDetailsContext } from "../../contexts/DetailContext";
import SkillBox from "../../components/box/SkillBox";
import SoftSkill from "../../components/box/SoftSkill";
import StyledAnchor from "../../components/buttons/StyledAnchor";
import ImgBox from "../../components/box/ImgBox";
import bgdImg from "/img/bdgproject.webp";
import tesseractImg from "/img/tesseract.webp";

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
      <ResumeSection $detailed={false} title={library.aboutMeSection}>
        <p>{library.aboutMe}</p>
      </ResumeSection>
      <ResumeSection
        $detailed={false}
        title={library.educationSection}
        $custom="gap: 1rem;"
      >
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

      <ResumeSection
        $detailed={false}
        title={library.professionalSection}
        $custom="gap: 1rem;"
      >
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
            <StyledAnchor
              $detailed={false}
              $theme={$theme}
              href="https://chaveirogelson.com.br"
              target="_blank"
            >
              Chaveiro Gelson
            </StyledAnchor>{" "}
            (2024)
          </em>
          <p>{library.gelsonProjectDetail}</p>
        </InfoResumeBox>

        {details && (
          <InfoResumeBox
            $theme={$theme}
            $title={library.gelsonCompany}
            $instituition={library.gelsonCompanyCompany}
            $year={library.gelsonCompanyYear}
            $detail
          >
            <p>{library.gelsonCompanyDetail}</p>
          </InfoResumeBox>
        )}

        <InfoResumeBox
          $theme={$theme}
          $title={library.internUrbanMetrics}
          $instituition={library.internUrbanMetricsCompany}
          $year={library.internUrbanMetricsYear}
          $detail={false}
        >
          <p>{library.internUrbanMetricsDetail}</p>
          <small>
            <StyledAnchor
              $theme={$theme}
              $detailed={false}
              href="https://wp.ufpel.edu.br/urbanmetrics/files/2021/03/Help_UrbanMetrics.pdf"
              target="_blank"
            >
              {library.helpAccess}
            </StyledAnchor>
          </small>
        </InfoResumeBox>

        {details && (
          <>
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

      <ResumeSection
        $detailed={false}
        title={library.freeEducationSection}
        $custom="gap: 1rem"
      >
        <InfoResumeBox
          $theme={$theme}
          $title={library.origamidUIBegin}
          $instituition={library.origamidUIBeginCompany}
          $year={library.origamidUIBeginYear}
          $detail={false}
        >
          <p>{library.origamidUIBeginDetail}</p>
          <small>
            <StyledAnchor
              $theme={$theme}
              $detailed={false}
              href="https://drive.google.com/drive/folders/1g0acb-cxCWVqvVaoJGc7A2aBRXvyM6tR?usp=sharing"
              target="_blank"
            >
              {library.certificateAccess}
            </StyledAnchor>
          </small>
        </InfoResumeBox>

        <InfoResumeBox
          $theme={$theme}
          $title={library.adaTech}
          $instituition={library.adaTechCompany}
          $year={library.adaTechYear}
          $detail={false}
        >
          <p>{library.adaTechDetail}</p>
          <small>
            <StyledAnchor
              $theme={$theme}
              $detailed={false}
              href="https://drive.google.com/drive/folders/1cEAbow3Sn4Sxp1uKWRLFNr-to6CKemJR?usp=drive_link"
              target="_blank"
            >
              {library.certificateAccess}
            </StyledAnchor>
          </small>
        </InfoResumeBox>

        <InfoResumeBox
          $theme={$theme}
          $title={library.descomplica}
          $instituition={library.descomplicaCompany}
          $year={library.descomplicaYear}
          $detail={false}
        >
          <p>{library.descomplicaDetail}</p>
          <small>
            <StyledAnchor
              $theme={$theme}
              $detailed={false}
              href="https://drive.google.com/drive/folders/1DNH8drmk9n9zQWlHO6IHhkvS6h5AuJH8?usp=sharing"
              target="_blank"
            >
              {library.certificateAccess}
            </StyledAnchor>
          </small>
        </InfoResumeBox>
      </ResumeSection>

      <ResumeSection
        $detailed={false}
        title={library.skillsSection}
        $custom="gap:1rem;"
      >
        <InfoResumeBox
          $title={library.hardSkills}
          $theme={$theme}
          $detail={false}
        >
          <Section $custom="gap: 0.2rem" $width="100%">
            <Section
              $direction="row"
              $custom="flex-wrap: wrap; gap: 1rem;"
              $justify="start"
              $align="center"
              $width="100%"
              $padding="0.5rem"
              $border="solid 3px transparent"
            >
              <SkillBox $bgColor="#E7622A" $color="white">
                HTML
              </SkillBox>
              <SkillBox $color="white" $bgColor="purple">
                CSS
              </SkillBox>
              <SkillBox $color="black" $bgColor="#E8D34B">
                JavaScript
              </SkillBox>
              <SkillBox $color="white" $bgColor="#0074C6">
                TypeScript
              </SkillBox>
              <SkillBox $color="black" $bgColor="#04CDEF">
                React
              </SkillBox>
              <SkillBox $color="white" $bgColor="purple">
                BootStrap
              </SkillBox>
              <SkillBox $color="white" $bgColor="fuchsia">
                Styled Components
              </SkillBox>
              <SkillBox $color="white" $bgColor="#77B542">
                Node.js
              </SkillBox>
              <SkillBox $color="#F6C83C" $bgColor="#326894">
                Python
              </SkillBox>
              <SkillBox $color="#F4C025" $bgColor="#EC7813">
                Firebase
              </SkillBox>
              <SkillBox $color="white" $bgColor="#E74D30">
                GIT
              </SkillBox>
              <SkillBox $color="orange" $bgColor="purple">
                Figma
              </SkillBox>
            </Section>
            {details && (
              <Section
                $direction="row"
                $custom="flex-wrap: wrap; gap: 1rem;"
                $justify="start"
                $align="center"
                $width="100%"
                $padding="0.5rem"
                $border="solid 3px var(--color-5);"
              >
                <SkillBox $bgColor="black" $color="white">
                  GIMP
                </SkillBox>

                <SkillBox $bgColor="black" $color="white">
                  TwinMotion
                </SkillBox>

                <SkillBox $bgColor="#DC0E4C" $color="white">
                  AutoCAD
                </SkillBox>

                <SkillBox $bgColor="#004D8A" $color="white">
                  Sketchup
                </SkillBox>

                <SkillBox $bgColor="#DF7200" $color="#255382">
                  Blender
                </SkillBox>

                <SkillBox $bgColor="#86A522" $color="white">
                  QGIS
                </SkillBox>

                <SkillBox $bgColor="#5DA105" $color="white">
                  CorelDraw
                </SkillBox>

                <SkillBox $bgColor="#4390D6" $color="white">
                  Office365
                </SkillBox>

                <SkillBox $bgColor="#40081D" $color="#E94868">
                  InDesign
                </SkillBox>
              </Section>
            )}
          </Section>
        </InfoResumeBox>

        <InfoResumeBox
          $title={library.softSkills}
          $theme={$theme}
          $detail={false}
        >
          <Section>
            <SoftSkill
              $theme={$theme}
              $detailed={false}
              $title={library.softSkillResilience}
            >
              {library.softSkillResilienceDetail}
            </SoftSkill>
            <SoftSkill
              $theme={$theme}
              $detailed={false}
              $title={library.softSkillTeamWork}
            >
              {library.softSkillTeamWorkDetail}
            </SoftSkill>
            <SoftSkill
              $theme={$theme}
              $detailed={false}
              $title={library.softSkillGeneralism}
            >
              {library.softSkillGeneralismDetail}
            </SoftSkill>
            <SoftSkill
              $theme={$theme}
              $detailed={false}
              $title={library.softSkillOrganization}
            >
              {library.softSkillOrganizationDetail}
            </SoftSkill>
            <SoftSkill
              $theme={$theme}
              $detailed={false}
              $title={library.softSkillAccountability}
            >
              {library.softSkillAccountabilityDetail}
            </SoftSkill>
            <SoftSkill
              $theme={$theme}
              $detailed={false}
              $title={library.softSkillsLanguage}
            >
              {library.softSkillsLanguageDetail}
            </SoftSkill>
          </Section>
        </InfoResumeBox>
      </ResumeSection>

      {details && (
        <ResumeSection
          $detailed={true}
          title={library.personalProjects}
          $custom="gap:1rem;"
        >
          <InfoResumeBox $theme={$theme} $title="BordGameDay!" $detail>
            <Section>
              <p>{library.bgdProjectDetail1}</p>
              <p>{library.bgdProjectDetail2}</p>
              <ImgBox
                src={bgdImg}
                alt="BoardGameDay Img"
                $width="70%"
                $height="auto"
                $custom="margin: 0.5rem 0 0 0; border: solid 3px var(--color-5)"
                $figcaption={library.bgdFigCaption}
              />
              <p>{library.bgdProjectDetail3}</p>
              <p>{library.bgdProjectDetail4}</p>
            </Section>
          </InfoResumeBox>

          <InfoResumeBox $theme={$theme} $title="Tesseract_Lab" $detail>
            <Section>
              <p>{library.tesseractProjectDetail1}</p>
              <p>{library.tesseractProjectDetail2}</p>
              <p>{library.tesseractProjectDetail3}</p>
              <ImgBox
                src={tesseractImg}
                alt="Tesseract_3D Image"
                $width="70%"
                $height="auto"
                $custom="margin: 0.5rem 0 0 0; border: solid 3px var(--color-5)"
                $figcaption={library.tesseractFigCaption}
              />
              <p>{library.tesseractProjectDetail4}</p>
              <p>{library.tesseractProjectDetail5}</p>
              <p>
                {library.tesseractProjectDetail6}{" "}
                <StyledAnchor
                  href="https://instagram.com/tesseract_3d/"
                  target="_blank"
                  $theme={$theme}
                  $detailed
                >
                  {library.tesseractClickHere}
                </StyledAnchor>
                .
              </p>
            </Section>
          </InfoResumeBox>
        </ResumeSection>
      )}
    </Main>
  );
};

export default Resume;
