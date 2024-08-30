// src/components/ExperienceWithJava.js
import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ExperienceWithJava = () => (
  <ExperienceContainer>
    <Title>Minha Vivência com Java e Spring Boot</Title>
    <Description>
      Tenho uma sólida vivência com Java, desenvolvendo aplicações robustas e escaláveis.
      Utilizando Spring Boot, criei APIs RESTful eficientes e seguras para diversos projetos,
      integrando com bancos de dados como MySQL e PostgreSQL. A prática com Java me permitiu 
      aprimorar minhas habilidades em resolução de problemas, arquitetura de software e 
    desenvolvimento ágil, entregando soluções de alta qualidade.
    </Description>
</ExperienceContainer>
);

export default ExperienceWithJava;
