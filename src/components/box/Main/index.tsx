import styled from "styled-components";

interface MainProps {
  children: React.ReactNode;
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  width: 1024px;
  max-width: 100%;

  
  padding: 5rem 1rem;
  
  @media (orientation: portrait) {
    width: 100dvw;
  }

`;

const Main = ({children}:MainProps)=> {
  return(
    <StyledMain>
      {children}
    </StyledMain>
  )
};

export default Main;