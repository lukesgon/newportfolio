import styled from "styled-components";

interface StackSectionProps {
  $title: string,
  $isHover: boolean,
  children: React.ReactNode,
  onMouseEnter: (section:string)=> void,
  onMouseLeave: ()=> void,
};

const StyledSection = styled.section<Partial<StackSectionProps>>`
  display: flex;
  flex-direction: row;

  background-color: transparent;
  overflow: hidden;

  width: ${props=> props.$isHover ?'100%' :'2.1rem' };
  height: 445px;

  cursor: default;

  transition: ${props=> props.$isHover ?'300ms' :'300ms'} ;

  @media (orientation: portrait) {
    flex-direction: column;
    width: 100%;
    height: ${props=> props.$isHover ?'360px' :'2.2rem' };
  }
`;

const StyledHeader = styled.section<Partial<StackSectionProps>>`
  background-color: ${props=> props.$isHover ? 'var(--color-4)' : 'var(--color-3)'};
  padding: 0.3rem 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  border: solid 3px ${props=> props.$isHover ?'var(--color-4)':'var(--color-3)'};
  color: var(--color-2);

  

  @media (orientation: portrait) {
    flex-direction: row;
  }
`

const StyledH4 = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  writing-mode: vertical-rl;
  text-orientation: upright;
  height: 60%;
  width: 100%;
  @media (orientation: portrait) {
    writing-mode: horizontal-tb;
  }
`

const StyledLib = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 0.3rem 0.5rem;
  width: 100%;
  height: 100%;
`

const StackSection = ({$title, $isHover, children, onMouseEnter, onMouseLeave}:StackSectionProps)=> {
  return(
    <StyledSection $isHover={$isHover} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <StyledHeader $isHover={$isHover}>
        {$isHover ?'· ' :'+ '}
        <StyledH4>
          {$title}
        </StyledH4>
      </StyledHeader>
      <StyledLib>
        {children}
      </StyledLib>
    </StyledSection>
  )
};

export default StackSection;