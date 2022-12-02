# Exercício de fixação sobre Tests

## Sobre o exercício

Projeto: https://github.com/devsuperior/bds09

No projeto acima, a função countClientsMatching(partialName: string), retorna quantos dos clientes possuem em seu nome o partialName, informado como argumento. Para isto, esta função faz a chamada de uma outra função requestClients(), responsável por obter os clientes cadastrados no sistema. Você deve escrever os testes para os dois cenários abaixo da função countClientsMatching, mockando a função requestClients para especificar cada um dos cenários no próprio teste.

```
"should return 0 when 0 out of 2 clients match"
```

```
"should return 2 when 2 out of 4 clients match"
```

## Tecnologias utilizadas

- JEST e Testing Library
  - Testes de funções JS/TS
  - Execução de testes, modo watch
  - Bloco describe e suíte de testes
  - Mock de funções com spyOn

## Como executar os testes

Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/santosediego/bds-09-exerciciosTests.git

# entrar na pasta do projeto front end web
cd bds-09-exerciciosTests

# instalar dependências
yarn install

# executar o test
yarn test:whatch
```

## Aluno

Diego Santos
