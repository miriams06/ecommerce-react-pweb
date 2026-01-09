# Loja Online React - Projeto PWEB

Este projeto é uma aplicação de E-commerce desenvolvida em React que consome a FakeStoreAPI. Permite listar produtos, filtrar por categorias, ver detalhes e gerir um carrinho de compras com persistência de dados.

## Autores
* **Aluno 1:** Íris Nunes (Nº A047325)
* **Aluno 2:** Miriam Silva (Nº A046587)

## Como Executar o Projeto

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/miriams06/ecommerce-react-pweb.git
   cd ecommerce-react-pweb

2.  **Instalar dependências:**
    ```bash
    npm install
    ```

3.  **Executar o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Aceder:** Abra o browser em `http://localhost:5173/` (ou a porta indicada no terminal).

---

## Funcionalidades Implementadas

O projeto cumpre todos os requisitos obrigatórios e inclui melhorias de UX:

### 1. Listagem e Navegação
* Listagem de produtos em grelha responsiva (Material UI Grid v2).
* Interface adaptada a Mobile e Desktop.
* Layout "Full Width" na página inicial.
* Navegação entre páginas usando `React Router` (Home, Detalhe, Carrinho).

### 2. Filtros e Pesquisa
* **Pesquisa por nome:** Filtra produtos em tempo real.
* **Filtro por Categoria:** Dropdown dinâmico carregado via API.
* **Mensagens de Estado:** Feedback visual quando a pesquisa não retorna resultados.

### 3. Detalhe do Produto
*  Página dedicada com imagem grande, descrição, categoria e rating.
*  Botão para voltar à listagem.
*  Botão de adicionar ao carrinho com feedback imediato.

### 4. Carrinho de Compras (Gestão de Estado)
* **Context API:** Estado global acessível em toda a aplicação.
* **Persistência:** O carrinho mantém-se gravado no `localStorage` após refresh.
* Adicionar, Remover e Alterar quantidades de produtos.
* Cálculo automático de Subtotal e Total.
* Botão para esvaziar carrinho (Clear Cart).

### 5. Interface e UX (Extra)
* **Feedback Visual (Snackbars):** Notificações "Toast" ao adicionar produtos ao carrinho.
* **Loading States:** Indicadores de carregamento (Spinners) enquanto a API responde.
* **Tratamento de Erros:** Mensagens amigáveis caso a API falhe.
* **Idioma:** Interface totalmente traduzida para Inglês.

---

## API e Endpoints

A API escolhida foi a **FakeStoreAPI** (https://fakestoreapi.com).
O consumo é centralizado no serviço `src/services/api.ts`.

**Endpoints utilizados:**
* `GET /products` - Obter todos os produtos (Home).
* `GET /products/categories` - Obter lista de categorias (Filtros).
* `GET /products/:id` - Obter detalhes de um único produto (Página de Detalhe).

---

## Tecnologias Usadas

* **Core:** React, TypeScript, Vite.
* **UI Framework:** Material UI (MUI) v6 + Emotion.
* **Routing:** React Router Dom.
* **Icons:** Material UI Icons.