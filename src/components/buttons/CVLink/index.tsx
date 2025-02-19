import styled from "styled-components";
import { useLang } from "../../../contexts/LangContext";

const StyledLink = styled.a`
  border: none;
  text-decoration: none;
  color: var(--color-2);
  background-color: var(--color-4);
  cursor: pointer;
  font-weight: bold;

  padding: 0.5rem 1rem;

  &:visited {
    color: var(--color-2);
  }

  &:hover {
    background-color: var(--color-3);
    color: var(--color-1);
  }
`

const CVLink = ()=> {
  const {library} = useLang();

  return(
    <StyledLink href={library.cvLink} target="_blank">
      CV Download
    </StyledLink>
  )
};

export default CVLink;