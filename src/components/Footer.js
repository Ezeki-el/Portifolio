import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>© 2024 Ezequiel Oliveira Barboza. Todos os direitos reservados.</FooterText>
  </FooterContainer>
);

export default Footer;
