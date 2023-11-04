# Zoológico Virtual

Este é um projeto de exemplo que demonstra como criar um sistema de gerenciamento de zoológico fictício com uma API RESTful. A aplicação é desenvolvida em Nest.js com TypeScript e oferece funcionalidades para criar animais, recintos, alimentar animais e atrair visitantes para o zoológico.

## Configuração e Uso

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/yagoar45/ponderada-semana3-prog.git
    cd zoo-api
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Inicie o servidor:**

    ```bash
    npm run start
    ```

A API estará disponível em `http://localhost:3000`.

## Endpoints da API

### Criação de Animais

- **URL:** `/zoo/animal`
- **Método:** POST
- **Corpo da Solicitação:**

    ```json
    {
      "name": "Leão",
      "species": "Felino",
      "happiness": 80
    }
    ```

### Criação de Recintos

- **URL:** `/zoo/enclosure/:species`
- **Método:** POST

### Adição de Animal a Recinto

- **URL:** `/zoo/enclosure/:species/animal/:animalId`
- **Método:** POST

### Alimentação de Animais

- **URL:** `/zoo/animal/:animalId/feed/:happinessBoost`
- **Método:** POST
- **Corpo da Solicitação:**

    ```json
    {
      "animalId": 1,
      "happinessBoost": 10
    }
    ```

### Recebimento de Visitantes

- **URL:** `/zoo/visitors`
- **Método:** GET


## Testes

Este projeto inclui testes unitários e testes de integração para garantir o funcionamento correto da API. Aqui estão os tipos de testes e como eles funcionam:

- **Testes Unitários:** Os testes unitários verificam cada unidade isoladamente, como funções e métodos individuais, para garantir que eles produzam os resultados esperados. Os testes unitários são executados sem depender de recursos externos, como bancos de dados ou servidores.

- **Testes de Integração:** Os testes de integração verificam o funcionamento de componentes maiores, como a interação entre diferentes partes da aplicação, a comunicação com bancos de dados e a resposta correta a solicitações HTTP. Os testes de integração podem depender de recursos externos.

Para executar os testes unitários e de integração, utilize o seguinte comando:

```bash
npm run test
```

## Contribuição

Fique à vontade para contribuir com melhorias ou personalizações neste projeto. Basta fazer um fork e enviar suas solicitações pull.