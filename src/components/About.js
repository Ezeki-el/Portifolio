import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const AboutText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const About = () => (
  <AboutContainer id="about">
    <AboutTitle>Sobre Mim</AboutTitle>
    <AboutText>
      Sou desenvolvedor fullstack em formação pela EBAC e estou cursando ciência da computação. Tenho experiência em HTML, CSS, JavaScript, e conhecimentos sólidos em C#, Angular, NodeJS, Bootstrap, SASS, SQL e .Net. Sou um profissional organizado e dedicado, com habilidades em ambientes corporativos e inglês avançado.
    </AboutText>
  </AboutContainer>
);

export default About;
