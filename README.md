# Desafio Cypress - Automation Exercise

 Descrição:
Projeto de automação de testes UI e API utilizando Cypress, Cucumber (BDD) e Page Object Model (POM).

O objetivo do projeto é validar:
- Cadastro de usuário via interface web
- Adição de de produto no carrinho
- Criação de usuário via API
- Validações de resposta

Tecnologias utilizadas:
- Cypress
- Cucumber (BDD)
- Faker
- Page Object Model (POM)


Estrutura do projeto:
```txt
cypress
│
├── e2e
│   ├── ui
│   │   └── ecommerce.feature
│   │
│   └── api
│       └── createAccount.feature
│
├── support
│   │
│   ├── pages
│   │   ├── HomePage.js
│   │   ├── SignupPage.js
│   │   ├── ProductPage.js
│   │   └── CartPage.js
│   │
│   └── step_definitions
│       ├── ecommerceSteps.js
│       └── createAccountSteps.js
│
├── cypress.config.js
└── cypress.env.json
```

Cenários automatizados:

UI - Fluxo E-commerce:
- Acessar site Automation Exercise
- Realizar cadastro de usuário
- Validar criação da conta
- Localizar produto
- Adicionar produto ao carrinho
- Validar produto e preço no carrinho

API - Criar usuário:
- Criar usuário via endpoint /api/createAccount
- Validar status code
- Validar mensagem de sucesso
- Validar estrutura da resposta


Boas práticas aplicadas:
- Estrutura por camadas
- Separação entre UI e API
- Utilização de Cucumber (BDD)
- Aplicação de Page Object Model (POM)
- Dados dinâmicos com Faker
- Uso de variáveis sensíveis no cypress.env.json
- Requisições reutilizáveis e organizadas
- Massa de teste dinâmica

Instalação do projeto:
Clonar repositório:
git clone <url-do-repositorio>

Instalar dependências:
npm install

Dependências principais:
```bash
npm install cypress --save-dev
npm install @badeball/cypress-cucumber-preprocessor --save-dev
npm install @bahmutov/cypress-esbuild-preprocessor esbuild --save-dev
npm install @faker-js/faker --save-dev
```

Executar testes:
Abrir Cypress:
npx cypress open

Executar todos os testes:
npx cypress run

Executar somente testes API:
npx cypress run --spec "cypress/e2e/api/**/*"

Executar somente testes UI:
npx cypress run --spec "cypress/e2e/ui/**/*"

Configuração de variáveis:
cypress.env.json

Padrões utilizados:
BDD

Os testes foram escritos utilizando:
Given
When
Then
Page Object Model (POM)

A camada de UI foi estruturada utilizando Page Objects para:
reutilização
manutenção
legibilidade
Faker

Utilizado para geração dinâmica de:
nome
email
senha
endereço
telefone
empresa
