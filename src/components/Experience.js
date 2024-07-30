import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const ExperienceTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1rem;
`;

const ExperienceItemTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ExperienceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Experience = () => (
  <ExperienceContainer id="experience">
    <ExperienceTitle>Experiência Profissional</ExperienceTitle>
    <ExperienceList>
      <ExperienceItem>
        <ExperienceItemTitle>AlmavivA do Brasil</ExperienceItemTitle>
        <ExperienceDescription>
          <strong>Representante de Atendimento ao Cliente</strong><br/>
          Dezembro/2021 - Junho/2024<br/>
          Atendimento ao cliente no SAC receptivo. Resolução de problemas e oferta de serviços residenciais. Desenvolvimento de habilidades de comunicação e resolução de conflitos.
        </ExperienceDescription>
      </ExperienceItem>
      <ExperienceItem>
        <ExperienceItemTitle>Torre Empreed. Rural e Const. LTDA</ExperienceItemTitle>
        <ExperienceDescription>
          <strong>Aprendiz Agente de Saúde e Meio Ambiente</strong><br/>
          Julho/2019 - Março/2021<br/>
          Gerenciamento de documentação de transporte de resíduos. Auxílio na organização e planejamento de planilhas administrativas. Cumprimento rigoroso de prazos e procedimentos.
        </ExperienceDescription>
      </ExperienceItem>
    </ExperienceList>
  </ExperienceContainer>
);

export default Experience;
