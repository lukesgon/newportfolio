import Article from "../Article";

interface DetailTipBoxProps {
  $tip: string;
  $position: DOMRect;
}

const DetailTipBox = ({ $tip, $position }: DetailTipBoxProps) => {
  return (
    <Article
      $backgroundColor="var(--color-5)"
      $border="solid 3px var(--color-5)"
      $padding="0.3rem 0.5rem"
      $width="200px"
      $height="fit-content"
      $color="var(--color-0)"
      $custom={`position: fixed;  left:${$position?.left - 200}px; top: ${$position?.bottom - 280}px; z-index: 4000;`}
    >
      <p>{$tip}</p>
    </Article>
  );
};

export default DetailTipBox;
