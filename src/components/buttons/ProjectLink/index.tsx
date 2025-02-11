import styled from "styled-components";

const StyledAnchor = styled.a`
  background-color: var(--color-4);
  color: var(--color-2);
  
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;

  padding: 0.5rem 1rem;

  border: none;

  cursor: pointer;

  &:visited {
    color: var(--color-2);
  }

  &:hover {
    background-color: var(--color-3);
    color: var(--color-1);
  }
`

interface ProjectLinkProps {
  children: string,
  href: string,
  target: string,
};

const ProjectLink = ({children, href, target}:ProjectLinkProps)=> {
  return(
    <StyledAnchor
      href={href}
      target={target}
    >
      {children}
    </StyledAnchor>
  )
};

export default ProjectLink
