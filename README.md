
<h1 align="center">
 Ailos Front-End Challenge
</h1>

<p align="center">
  <a href="#">Instalação</a> •
  <a href="#">Tecnologias utilizadas</a>  •
  <a href="#">Estrutura do Código</a>  •
</p>  

Este é um desafio proposto pela Ailos. O desafio consiste em desenvolver duas páginas as quais devem permitir o usuário consultar dados de um cliente, através de seu CPF. 

Para este projeto, utilizamos o framework [Angular](https://angular.io/). Além disso, simulamos um servidor back-end através da biblioteca [json-server](https://www.npmjs.com/package/json-server).

<h1 align="center">
	<img src="https://i.imgur.com/MP4Fnia.png" width=650/>
	<img src="https://i.imgur.com/mQd0MmU.gif" width=650/>
</h1>

## Instalação

```shell
# Clonando o projeto
$ git clone https://github.com/vitorshinohara/AilosChallenge

# Navegar até a pasta raiz do projeto
$ cd AilosChallenge

# Instalar dependências
$ sudo npm install
$ sudo npm install -g json-server

# Iniciar servidor
$ npm start
```

Ao executar o comando `npm start`, o servidor front-end estará disponível na URL `http://localhost:4200`.
 
Como mencionado anteriormente, utilizamos o `json-server` para simulação de um servidor de back-end, para consulta dos dados.

Para iniciar o servidor back-end, basta executar o comando na raiz do projeto:

```shell
$ json-server --watch ./src/assets/json-server/db.json
```

## Tecnologias utilizadas

  Para o desenvolvimento deste projeto, as seguintes tecnologias e bibliotecas foram utilizados:

- [Typescript](https://www.typescriptlang.org/)
- [Angular](https://angular.io/)
- [JSON-Server](https://www.npmjs.com/package/json-server)
- [Font-Awesome](https://github.com/FortAwesome/angular-fontawesome)


## Estrutura do Código

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
│   └───json-server                     # Configurações do pacote json-server
│           
└───environments                        # Arquivos de configuração de variáveis de ambiente
        environment.prod.ts
        environment.ts
``` 
