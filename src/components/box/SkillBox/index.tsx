import styled from "styled-components";

interface SkillBoxProps {
  $color: string,
  $bgColor: string,
  children: React.ReactNode
};

const StyledSpan = styled.span<SkillBoxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: ${props=> props.$color};
  background-color: ${props=> props.$bgColor};
  font-weight: bold;
  padding: 0.1rem 0.5rem;
  min-width: 4rem;
`

const SkillBox = ({$color, $bgColor, children}:SkillBoxProps)=> {
  return(
    <StyledSpan $color={$color} $bgColor={$bgColor}>
      {children}
    </StyledSpan>
  )
};

export default SkillBox;