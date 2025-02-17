import Section from "../Section";
import Article from "../Article";
import { ThemeProps } from "../../../contexts/ThemeContext";

interface InfoResumeBoxProps {
  children: React.ReactNode;
  $theme: ThemeProps;
  $title: string;
  $instituition?: string;
  $year?: string;
  $detail: boolean;
}

const InfoResumeBox = ({
  children,
  $theme,
  $title,
  $instituition,
  $year,
  $detail,
}: InfoResumeBoxProps) => {
  return (
    <Article
      $backgroundColor={$detail ? "transparent" : $theme.colors.background}
      $color={$detail ? $theme.colors.detailColor : $theme.colors.tertiary}
      $border={
        $detail ? "solid 3px var(--color-5)" : "solid 3px var(--color-3)"
      }
      $width="100%"
      $padding="0.5rem 1rem"
    >
      <Section $color={$detail ? $theme.colors.detailColor : "var(--color-3)"}>
        <h4>{$title}</h4>
      </Section>
      <Section $width="100%">
        { ($instituition || $year )&& 
        <Section $width='100%'$direction="row" $custom="gap: 10px;" $padding="0 0 0.5rem 0">
          <small>
            <em>
              {$instituition} {$year}
            </em>
          </small>
        </Section>}
        <Section $custom="gap: 1rem;" $width="100%">
          {children}
        </Section>
      </Section>
    </Article>
  );
};

export default InfoResumeBox;
