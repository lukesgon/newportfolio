import Section from "../Section";
import Article from "../Article";
import CloseButton from "../../buttons/CloseButton";
import styled from "styled-components";
import { useLang } from "../../../contexts/LangContext";
import IconBox from "../IconBox";
import GitHubContactIcon from "../../icons/Contact/GitHubContactIcon";
import WhatsAppContactIcon from "../../icons/Contact/WhatsAppContactIcon";
import LinkedInContactIcon from "../../icons/Contact/LinkedInContactIcon";
import EmailContactIcon from "../../icons/Contact/EmailContactIcon";
import TelContactIcon from "../../icons/Contact/TelContactIcon";
import { useState } from "react";

interface ContactBoxProps {
  $setIsOpen: () => void;
}

const StyledHeader = styled.h3`
  display: flex;
  padding: 0 0.5rem 0 2.5rem;
  width: 100%;
  justify-content: center;
`;
const StyledContactAnchor = styled.a`
  border: none;
  background-color: transparent;
  color: var(--color-2);
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;
`;

const StyledSimpleButton = styled.button`
  border: none;
  background-color: transparent;
  color: var(--color-2);
  text-decoration: underline;
  cursor: pointer;

  &:active,
  &:focus {
    text-decoration: none;
    color: var(--color-3);
  }
`;
const StyledSmall = styled.small`
  @media (orientation: portrait) {
    display: none;
  }
`;

const ContactBox = ({ $setIsOpen }: ContactBoxProps) => {
  const { library } = useLang();
  const [emailCopied, setEmailCopied] = useState(false);
  const [telCopied, setTelCopied] = useState(false)

  function handleSetIsOpen() {
    $setIsOpen();
  }

  function copyText(texto: string) {
    navigator.clipboard
      .writeText(texto)
      .then(function () {
        console.log("Texto copiado para a área de transferência: " + texto);
      })
      .catch(function (error) {
        console.error("Erro ao copiar texto: ", error);
      });
  }

  return (
    <Section
      $custom="position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 899;"
      $backgroundColor="rgba(0, 0, 0, 0.7);"
      $width="1000%"
      $height="1000%"
    >
      <Article
        $width="100%"
        $backgroundColor="var(--color-4)"
        $margin="0 1rem 0 1rem"
        $padding="1rem"
        $align="center"
        $custom="position: fixed; top: 4rem; right: 0; z-index: 500; max-width: 640px; gap: 8px; @media (orientation: portrait) { right: 0; left: 0; max-width: 92%;}"
        $color="var(--color-2)"
        $border="solid 3px var(--color-4)"
      >
        <Section $justify="space-between" $width="100%" $direction="row">
          <StyledHeader>{library.contact}</StyledHeader>
          <CloseButton onClick={handleSetIsOpen} />
        </Section>
        <Section
          $direction="row"
          $justify="center"
          $width="100%"
          $height="fit-content"
          $custom="flex-wrap: wrap; @media(orientation:portrait){width: 70%}"
        >
          <Section $padding="0.5rem">
            <StyledContactAnchor
              href="https://github.com/lukesgon"
              target="_blank"
            >
              <IconBox $width={4} $height={5}>
                <GitHubContactIcon />
              </IconBox>
              <small>GitHub</small>
            </StyledContactAnchor>
          </Section>
          <Section $padding="0.5rem">
            <StyledContactAnchor
              href="https://linkedin.com/in/lucasdasgoncalves"
              target="_blank"
            >
              <IconBox $width={4} $height={5}>
                <LinkedInContactIcon />
              </IconBox>
              <small>LinkedIn</small>
            </StyledContactAnchor>
          </Section>
          <Section $padding="0.5rem">
            <StyledContactAnchor
              href="mailto:lucasSG.dev@gmail.com"
              target="_blank"
            >
              <IconBox $width={4} $height={5}>
                <EmailContactIcon />
              </IconBox>
              <small>E-mail</small>
            </StyledContactAnchor>
          </Section>
          <Section $padding="0.5rem">
            <StyledContactAnchor href="tel:+5553984688644" target="_blank">
              <IconBox $width={4} $height={5}>
                <TelContactIcon />
              </IconBox>
              <small>{library.phone}</small>
            </StyledContactAnchor>
          </Section>
          <Section $padding="0.5rem">
            <StyledContactAnchor
              href="https://wa.me/+53984688644"
              target="_blank"
            >
              <IconBox $width={4} $height={5}>
                <WhatsAppContactIcon />
              </IconBox>
              <small>WhatsApp</small>
            </StyledContactAnchor>
          </Section>
        </Section>
        <StyledSmall>
          {library.contactFragment1}{" "}
          <StyledSimpleButton
            onClick={() => {
              copyText("lucasSG.dev@gmail.com")
              setEmailCopied(true);
              setTelCopied(false);
            }}
          >
            {emailCopied ?library.copied :'E-mail'}
          </StyledSimpleButton>{" "}
            {library.contactFragment2}{" "}
          <StyledSimpleButton onClick={() =>{
            copyText("+5553984688644");
            setTelCopied(true);
            setEmailCopied(false);
            }
          }>
            {telCopied ?library.copied :library.phone}
          </StyledSimpleButton>
          .
        </StyledSmall>
      </Article>
    </Section>
  );
};

export default ContactBox;
