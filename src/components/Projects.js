import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProjectItem = styled.div`
  margin-bottom: 1rem;
`;

const ProjectItemTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Projects = () => (
  <ProjectsContainer id="projects">
    <ProjectTitle>Projetos Relevantes</ProjectTitle>
    <ProjectList>
      <ProjectItem>
        <ProjectItemTitle>Calculadora Aritmética com VueJS</ProjectItemTitle>
        <ProjectDescription>
          Desenvolvimento de uma calculadora aritmética utilizando VueJS. Implementação de vários campos para inserção de números e seleção de operação aritmética. Cálculo automático dos valores inseridos.
        </ProjectDescription>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>Aplicação de Agenda de Contatos</ProjectItemTitle>
        <ProjectDescription>
          Desenvolvimento de um formulário para inserção de contatos, salvando em um banco de dados e disponibilizando para visualização. Utilização de HTML, CSS e Javascript.
        </ProjectDescription>
      </ProjectItem>
      <ProjectItem>
        <ProjectItemTitle>Lista de Contatos com React e Redux</ProjectItemTitle>
        <ProjectDescription>
          Desenvolvimento de uma aplicação para gerenciamento de lista de contatos utilizando React. Uso de Redux para gestão de dados e Styled Components para o design.
        </ProjectDescription>
      </ProjectItem>
    </ProjectList>
  </ProjectsContainer>
);

export default Projects;
