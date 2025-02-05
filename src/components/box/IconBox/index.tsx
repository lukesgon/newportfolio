import styled from "styled-components";

interface IconBoxProps {
  $width?: number,
  $height?: number,
  children: React.ReactNode
};

const StyledBox = styled.section<Partial<IconBoxProps>>`
  width: ${props=> `${props.$width}vw` || '100px'};
  height: ${props=> `${props.$height}vw` || '100px'};
  overflow: hidden;

  @media (orientation:portrait) {
    width: ${props=> `${props.$width}vh` || '100px'};
    height: ${props=> `${props.$height}vh` || '100px'};
  }
`

const IconBox = ({children, $width, $height}:IconBoxProps)=> {
  return(
    <StyledBox $height={$height} $width={$width}>
      { children }
    </StyledBox>
  )
};

export default IconBox;