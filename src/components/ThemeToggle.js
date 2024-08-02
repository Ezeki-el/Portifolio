import React from 'react';
import styled from 'styled-components';

const ToggleButton = styled.button`
padding: 0.5rem 1rem;
font-size: 1rem;
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.light};
border: none;
cursor: pointer;
&:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
}
`;

const ThemeToggle = ({ toggleTheme }) => {
return <ToggleButton onClick={toggleTheme}>Alternar Tema</ToggleButton>;
};

export default ThemeToggle;
