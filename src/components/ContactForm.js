import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
display: flex;
flex-direction: column;
max-width: 600px;
margin: auto;
padding: 1rem;
background-color: ${({ theme }) => theme.colors.light};
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
margin-bottom: 1rem;
padding: 0.5rem;
font-size: 1rem;
border: 1px solid #ccc;
border-radius: 4px;
`;

const TextArea = styled.textarea`
margin-bottom: 1rem;
padding: 0.5rem;
font-size: 1rem;
border: 1px solid #ccc;
border-radius: 4px;
`;

const Button = styled.button`
padding: 0.5rem 1rem;
font-size: 1rem;
color: #fff;
background-color: ${({ theme }) => theme.colors.primary};
border: none;
border-radius: 4px;
cursor: pointer;
&:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
}
`;

const ContactForm = () => {
const [formData, setFormData] = useState({ name: '', email: '', message: '' });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada!');
    setFormData({ name: '', email: '', message: '' });
};

return (
    <FormContainer onSubmit={handleSubmit}>
    <Input
        type="text"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
        required
    />
    <Input
        type="email"
        name="email"
        placeholder="Seu email"
        value={formData.email}
        onChange={handleChange}
        required
    />
    <TextArea
        name="message"
        placeholder="Sua mensagem"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
    />
    <Button type="submit">Enviar</Button>
    </FormContainer>
);
};

export default ContactForm;
