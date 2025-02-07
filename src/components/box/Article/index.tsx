import styled from "styled-components";

interface ArticleProps {
  children: React.ReactNode,
  $display?: string,
  $direction?: string,
  $justify?: string,
  $align?: string,
  $padding?: string,
  $margin?: string,
  $border?: string,
  $width?: string,
  $height?: string,
  $backgroundColor?: string,
  $color?: string,
  $custom?: string,
};


const StyledArticle = styled.article<ArticleProps>`
  display: ${props=> props.$display && props.$display || 'flex'};
  flex-direction: ${props=> props.$direction && props.$direction || 'column'};
  justify-content: ${props=> props.$justify && props.$justify || 'start'};
  align-items: ${props=> props.$align && props.$align || 'start'};
  padding: ${props=> props.$padding && props.$padding || '0'};
  margin: ${props=> props.$margin && props.$margin || '0'};
  border: ${props=> props.$border && props.$border || 'none'};
  width: ${props=> props.$width && props.$width || 'fit-content'};
  height: ${props=> props.$height && props.$height || 'fit-content'};
  background-color: ${props=> props.$backgroundColor && props.$backgroundColor || 'inherit'};
  color: ${props=> props.$color && props.$color || 'inherit'};
  max-width: 100%;

  ${props=> props.$custom && props.$custom}
`

const Article = ({children, $display, $direction, $justify, $align, $padding, $margin, $border, $width, $height, $backgroundColor, $color, $custom}:ArticleProps)=> {
  return (
    <StyledArticle
      $display={$display}
      $direction={$direction}
      $justify={$justify}
      $align={$align}
      $padding={$padding}
      $margin={$margin}
      $border={$border}
      $width={$width}
      $height={$height}
      $backgroundColor={$backgroundColor}
      $color={$color}
      $custom={$custom}>
      {children}
    </StyledArticle>
  )
};

export default Article;