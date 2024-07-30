import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
`;

const HeroTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Hero = () => (
  <HeroContainer>
    <HeroTitle>Desenvolvedor Java</HeroTitle>
    <HeroSubtitle>Criando soluções robustas e escaláveis</HeroSubtitle>
  </HeroContainer>
);

export default Hero;
