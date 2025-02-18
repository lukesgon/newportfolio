import Article from "../Article";
import Section from "../Section";
import SwitchButton from "../../buttons/SwitchButton";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { useDetailsContext } from "../../../contexts/DetailContext";
import { useLang } from "../../../contexts/LangContext";
import BrIcon from "../../icons/BrIcon";
import UsIcon from "../../icons/UsIcon";
import DarkThemeIcon from "../../icons/DarkThemeIcon";
import LightThemeIcon from "../../icons/LightThemeIcon";
import TipIcon from "../../icons/TipIcon";
import SetDetailIcon from "../../icons/SetDetailIcon";
import UnsetDetailIcon from "../../icons/UnsetDetailIcon";

const SettingBox = () => {
  const { $theme, $themeData, $toggleTheme } = useThemeContext();
  const { handleDetails, details } = useDetailsContext();
  const { lang, setLang, library } = useLang();

  return (
    <Section $custom="position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 899;" $backgroundColor="rgba(0, 0, 0, 0.7);" $width="1000%" $height="1000%">
      <Article
        $custom="position: fixed; bottom: 1.5rem; right: 1rem; z-index: 900; min-height: 240px;"
        $backgroundColor="var(--color-4)"
        $width="240px"
        $height="fit-content"
        $padding="0.5rem 1rem"
        $color="var(--color-2)"
        $border="solid 3px var(--color-4)"
      >
        <Section
          $justify="center"
          $width="100%"
          $custom="h3{text-align:center; width: 100%}"
        >
          <h3>{library.settingTitle}</h3>
        </Section>

        <Section>
          <Section $custom="gap: 3px">
            <span>{library.language}</span>

            <Section
              $direction="row"
              $custom="gap: 3px"
              $justify="center"
              $align="center"
            >
              <BrIcon $width="30px" $height="20px" />
              <SwitchButton $isActive={lang} onClick={setLang} />
              <UsIcon $width="30px" $height="20px" />
            </Section>
          </Section>

          <Section>
            <span>{library.theme}</span>

            <Section $direction="row" $custom="fill: var(--color-2); gap: 3px;">
              <DarkThemeIcon
                $width="30px"
                $height="30px"
                $theme={$theme}
                $themeData={$themeData}
              />
              <SwitchButton
                $isActive={$theme === $themeData[1]}
                onClick={$toggleTheme}
              />
              <LightThemeIcon
                $width="30px"
                $height="30px"
                $theme={$theme}
                $themeData={$themeData}
              />
            </Section>
          </Section>

          <Section $custom="fill: var(--color-2); &:hover {fill:var(--color-5)};">
            <span>
              {library.detail}
              <TipIcon $width="18px" $tip={library.detailHelpText} />
            </span>
            <Section $direction="row" $custom="gap: 3px;">
              <UnsetDetailIcon $width="30px" $height="30px" />
              <SwitchButton $isActive={details} onClick={handleDetails} />
              <SetDetailIcon $width="30px" $height="30px" />
            </Section>
          </Section>
        </Section>
      </Article>
    </Section>
  );
};

export default SettingBox;
