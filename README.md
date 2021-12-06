


<h1 align="center">
Ailos Front-End Challenge
</h1>


<p align="center">
  <a href="#computer-instalação">Instalação</a> •
  <a href="#-tecnologias-utilizadas">Tecnologias utilizadas</a>  •
  <a href="#-estrutura-do-código">Estrutura do Código</a>  •
  <a href="#%EF%B8%8F-demonstração">Demonstração</a>
</p>  

Este é um desafio proposto pela Ailos. O desafio consiste em desenvolver duas páginas as quais devem permitir o usuário consultar dados de um cliente, através de seu CPF. 

Para este projeto, utilizamos o framework [Angular](https://angular.io/). Além disso, utilizamos um banco de dados Firebase, para simular uma API REST, o qual a nossa aplicação consulta dados.

<div align="center">
	<img src="https://i.imgur.com/MP4Fnia.png" width=650/>
	<img src="https://i.imgur.com/OTB1iin.gif" width=650/>
</div>

## :computer: Instalação

```shell
# Clonando o projeto
$ git clone https://github.com/vitorshinohara/AilosChallenge

# Navegar até a pasta raiz do projeto
$ cd AilosChallenge

# Instalar dependências
$ sudo npm install

# Iniciar servidor
$ npm start
```

Ao executar o comando `npm start`, o servidor front-end estará disponível na URL `http://localhost:4200`.

##  🚀 Tecnologias utilizadas 

  Para o desenvolvimento deste projeto, as seguintes tecnologias e bibliotecas foram utilizados:

- [Typescript](https://www.typescriptlang.org/)
- [Angular](https://angular.io/)
- [Firebase](https://firebase.google.com/)
- [Font-Awesome](https://github.com/FortAwesome/angular-fontawesome)


## 📜 Estrutura do Código

```
src 
├───app
│   │   
│   ├───layout                          # Componentes que toda a aplicação utiliza
│   │   ├───footer
│   │   ├───header
│   │   │   └───components              # Componentes utilizados dentro do header
│   │   └───sidebar
│   │           
│   ├───onboarding
│   │   ├───components                  # Componentes utilizados na página onboarding
│   │   │   ├───card
│   │   │   │   ├───account-data-card
│   │   │   │   └───user-data-card
│   │   │   │
│   │   │   ├───form
│   │   │   └───stepper
│   │   │           
│   │   ├───models                      # Interfaces utilizadas na página de onboarding
│   │   └───services                    # Serviços utilizados na página de onboarding
│   │           
│   └───shared                          # Pasta para organizar elementos comuns na aplicação
│       └───validators                  # Métodos para validação de formulários
│               
├───assets
│   ├───images                          # Imagens utilizadas na aplicação
│   │   └───icons                       # Ícones utilizados na aplicação
│   └───json-server                     # Arquivos de dados para API REST do Firebase / JSON Server
│           
└───environments                        # Arquivos de configuração de variáveis de ambiente

``` 

## ✔️ Demonstração

Hospedamos nossa aplicação através do Firebase, a qual está disponível através do link:

https://ailos-39b5a.web.app/
