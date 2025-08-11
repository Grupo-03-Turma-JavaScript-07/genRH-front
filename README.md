# genRH - Frontend

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoCo
lor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typ
escript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=F
FD62E)
![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor
=white)
![License MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=for-the-ba
dge) ---

##

�
�
Sobre o Projeto
O **genRH** é uma aplicação web para gestão de Recursos Humanos, desenvolvida como
parte do projeto acadêmico do **Grupo 03 - Turma JavaScript 07**.  
A aplicação permite que equipes de RH gerenciem colaboradores e processos internos de
forma prática e eficiente.
Este repositório contém o **frontend**, desenvolvido com **React**, **TypeScript** e
**Vite** para garantir alta performance e uma experiência de usuário moderna. ---

##

�
�
Funcionalidades - Cadastro de colaboradores - Edição e exclusão de colaboradores - Listagem e busca de funcionários - Visualização detalhada dos dados de colaboradores - Autenticação e login de usuários - Integração com o backend via API RESTful ---

##

�
�
Integração Frontend e Backend
O frontend consome a API do backend para realizar operações CRUD e autenticação,
utilizando os seguintes endpoints principais: - `GET /colaboradores` - listar colaboradores - `POST /colaboradores` - cadastrar colaborador - `PUT /colaboradores/{id}` - atualizar colaborador - `DELETE /colaboradores/{id}` - excluir colaborador

- `POST /login` - autenticar usuário ---

##

�
�
Tecnologias Utilizadas - React + TypeScript - Vite - Yarn - Axios - React Router DOM - CSS Modules / Styled Components ---

##

�
�
Como Executar o Projeto

### Pré-requisitos - Node.js (versão 18 ou superior) - Yarn instalado globalmente

### Passos

```bash
git clone https://github.com/Grupo-03-Turma-JavaScript-07/genRH-front.git
cd genRH-front
yarn
yarn dev
```
