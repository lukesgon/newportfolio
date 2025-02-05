import styled from "styled-components";

interface ImgBoxProps {
  $figcaption?: string;
  src: string;
  alt: string;
  $width?: string,
  $height?: string,
  $custom?: string,
}

const StyledFigure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  width: fit-content;
  height: fit-content;
`;

const StyledImg = styled.img<Partial<ImgBoxProps>>`
  width: ${props=> props.$width || '100px'};
  height: ${props=> props.$height || '100px'};
  
  ${props=> props.$custom};
`

const ImgBox = ({ $figcaption, src, alt, $width, $height, $custom }: ImgBoxProps) => {
  return (
    <StyledFigure>
      <StyledImg src={src} alt={alt} $width={$width} $height={$height} $custom={$custom}/>
      {$figcaption && <figcaption>{$figcaption}</figcaption>}
    </StyledFigure>
  );
};

export default ImgBox;
