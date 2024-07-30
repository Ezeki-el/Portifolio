import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.light};
`;

const Nav = styled.nav`
  & > a {
    margin-left: 1rem;
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>Meu Portfólio</Logo>
    <Nav>
      <a href="#about">Sobre</a>
      <a href="#projects">Projetos</a>
      <a href="#experience">Experiência</a>
      <a href="#contact">Contato</a>
    </Nav>
  </HeaderContainer>
);

export default Header;
