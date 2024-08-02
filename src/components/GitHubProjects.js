import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.div`
padding: 2rem;
`;

const ProjectItem = styled.div`
margin-bottom: 1rem;
padding: 1rem;
background-color: ${({ theme }) => theme.colors.light};
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const ProjectLink = styled.a`
color: ${({ theme }) => theme.colors.primary};
text-decoration: none;
&:hover {
    text-decoration: underline;
}
`;

const GitHubProjects = () => {
const [repos, setRepos] = useState([]);

useEffect(() => {
    const fetchRepos = async () => {
    try {
        const response = await fetch('https://api.github.com/users/Ezeki-el/repos');
        const data = await response.json();
        setRepos(data);
    } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
    }
    };

    fetchRepos();
}, []);

return (
    <ProjectsContainer>
    {repos.map((repo) => (
        <ProjectItem key={repo.id}>
        <ProjectLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
        </ProjectLink>
        <p>{repo.description}</p>
        </ProjectItem>
    ))}
    </ProjectsContainer>
);
};

export default GitHubProjects;
