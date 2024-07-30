import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.text};
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactItem = styled.div`
  margin-bottom: 1rem;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => (
  <ContactContainer id="contact">
    <ContactTitle>Contato</ContactTitle>
    <ContactList>
      <ContactItem>
        <strong>Email:</strong> <ContactLink href="mailto:ezequieloliveirabarboza@gmail.com">ezequieloliveirabarboza@gmail.com</ContactLink>
      </ContactItem>
      <ContactItem>
        <strong>Telefone:</strong> 79 98140-3143
      </ContactItem>
      <ContactItem>
        <strong>LinkedIn:</strong> <ContactLink href="https://www.linkedin.com/ezequiel-barboza/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/ezequiel-barboza/</ContactLink>
      </ContactItem>
      <ContactItem>
        <strong>GitHub:</strong> <ContactLink href="https://github.com/Ezeki-el" target="_blank" rel="noopener noreferrer">https://github.com/Ezeki-el</ContactLink>
      </ContactItem>
    </ContactList>
  </ContactContainer>
);

export default Contact;
