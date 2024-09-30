# Sistema de Cadastro e Consulta de Clientes, Produtos, Vendedores e Pedidos

Este projeto é um sistema simples que permite o cadastro de clientes, produtos, vendedores e pedidos, utilizando o `localStorage` para armazenar os dados no navegador. Além disso, permite realizar consultas específicas e listar todos os pedidos cadastrados.

## Funcionalidades

- **Cadastro de Clientes**: Cadastra clientes com nome, data de nascimento, CPF, origem e score.
- **Cadastro de Produtos**: Cadastra produtos com nome, valor e categoria.
- **Cadastro de Vendedores**: Cadastra vendedores com nome e matrícula.
- **Cadastro de Pedidos**: Cadastra pedidos associando um cliente, vendedor, produto, data e valor do pedido.
- **Consulta Específica por CPF**: Realiza a consulta de um pedido específico pelo CPF do cliente.
- **Exibir Todos os Pedidos**: Exibe uma lista com todos os pedidos cadastrados.
- **Excluir Todos os Dados**: Permite limpar todos os dados do `localStorage`.

## Tecnologias Utilizadas

- **HTML**: Estrutura do site.
- **CSS**: Estilização básica para a exibição das informações.
- **JavaScript**: Manipulação de dados e interação com o `localStorage` para armazenar, consultar e exibir as informações.

## Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ```

2. Abra o arquivo `index.html` no navegador para visualizar e testar o sistema.

## Estrutura do Projeto

- **index.html**: Contém a estrutura HTML e formulários para cadastrar clientes, produtos, vendedores e pedidos.
- **style.css**: Estilos básicos para as seções de exibição de dados.
- **dom.js**: Arquivo JavaScript que contém a lógica para manipular os dados e realizar as consultas e cadastros no `localStorage`.

## Exemplo de Uso

### Cadastro de Clientes

1. Preencha os campos no formulário de clientes: nome, data de nascimento, CPF, origem e score.
2. Clique em "Cadastrar Cliente".

### Consulta Específica

1. Insira o CPF no campo de consulta.
2. Clique no botão "Consultar Pedido".
3. As informações do pedido associado ao CPF inserido serão exibidas, caso existam.

### Exibir Todos os Pedidos

1. Clique no botão "Consultar Dados" para listar todos os pedidos registrados.

### Excluir Todos os Dados

1. Clique no botão "Limpar Todos os Dados" para excluir todos os dados do `localStorage`.

## Melhorias Futuras

- Implementar um banco de dados para armazenamento de dados persistente.
- Adicionar validação de campos.
- Melhorar o layout e design da interface.

---

Desenvolvido por [Herick Akio Yoshii Kumata](https://github.com/haykCAKI)
