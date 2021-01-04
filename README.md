<h1 align="center">
    Desafio 02 de Docker do curso da Code Education
</h1>
<p align="center">  
  <img alt="Made by Rui" src="https://img.shields.io/badge/Made%20by-ruiblaese-%2304D361">
  
  <img alt="Made with Docker" src="https://img.shields.io/badge/Made%20with-Docker-%1f425f">     

<img alt="Project top programing language" src="https://img.shields.io/github/languages/top/ruiblaese/codeeducation-desafio-docker-02">  

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ruiblaese/codeeducation-desafio-docker-02">
</p>

<p align="center">
    <a href="#descricao">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;    
    <a href="#como-executar">Como Executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;    
    <a href="#contato">Contato</a>
</p>

## Descrição

### Nginx com Node.js
Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

\<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

## Como executar: 
```sh
git clone https://github.com/ruiblaese/codeeducation-desafio-docker-02
cd codeeducation-desafio-docker-02
docker-compose up --build
```

## Contato

<a href="https://www.linkedin.com/in/ruiblaese/" target="_blank" >
  <img alt="Linkedin - Rui Richard Blaese" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:ruiblaese@gmail.com" target="_blank" >
  <img alt="Email - Rui Richard Blaese" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 
