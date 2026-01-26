# 🎬 Movie App - TMDB

Aplicação web desenvolvida em **React** com o objetivo de aprimorar habilidades no consumo de APIs de terceiros, gerenciamento de estado e boas práticas de desenvolvimento front-end.

O projeto consome a API do **The Movie Database (TMDB)** para exibir uma lista de filmes populares e permite visualizar detalhes completos de cada filme.

---

## 📌 Funcionalidades

- Listagem de filmes populares
- Página de detalhes do filme
- Consumo de API externa (TMDB)
- Navegação entre páginas
- Layout responsivo
- Gerenciamento de estado global

---

## 🛠 Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Redux**
- **React Router**
- **Axios**
- **Tailwind CSS**
- **API The Movie Database (TMDB)**
- **GitHub Pages**

---

## 🚀 Demonstração

🔗 [Acesse a aplicação](#)  
*(adicione aqui o link do GitHub Pages)*

---

## ⚙️ Como executar o projeto localmente

### Pré-requisitos
- Node.js (versão 16 ou superior)
- Gerenciador de pacotes (npm ou yarn)

### Passos

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install
# ou
yarn install

# Execute a aplicação
npm run dev
# ou
yarn dev
```

##Configuração da API TMDB

###Para utilizar a API do TMDB, é necessário criar uma conta e gerar uma chave de acesso.
1.Acesse: https://www.themoviedb.org/
2.Gere sua API Key
3.Crie um arquivo .env na raiz do projeto:
4.VITE_TMDB_API_KEY= sua_api_key_aqui

##📚 Aprendizados
###Este projeto teve como foco:

- **Consumo de APIs REST**
- **Organização de componentes**
- **Tipagem com TypeScript**
- **Gerenciamento de estado com Redux**
- **Navegação com React Router**
- **Estilização com Tailwind CSS**

## 🧠 Arquitetura do Projeto

Este projeto foi estruturado para ser simples, funcional e de fácil compreensão, servindo como um **MVP de consumo de API externa com React + TypeScript**.  
A organização favorece uma separação lógica entre **renderização**, **chamadas de API**, **rotas** e **estilos**, seguindo boas práticas comuns em aplicações React escaláveis.

---

## 📂 Estrutura de Pastas

```text
React_externalAPI/
├── public/                # Arquivos estáticos (HTML, imagens, favicon, etc.)
├── src/                   # Código-fonte da aplicação
│   ├── assets/            # Recursos (imagens, ícones etc.)
│   ├── components/        # Componentes reutilizáveis de UI
│   ├── pages/             # Páginas da aplicação (cada rota principal)
│   ├── routes/            # Configuração de rotas com React Router
│   ├── services/          # Código para consumir a API TMDB (e.g., Axios)
│   ├── store/             # Redux / gerenciamento de estado
│   ├── styles/            # Estilos globais e utilitários Tailwind CSS
│   ├── types/             # Tipos TypeScript utilizados na aplicação
│   ├── App.tsx            # Componente raiz, define layout e rotas
│   └── main.tsx           # Ponto de entrada da aplicação
├── .gitignore
├── package.json           # Dependências e scripts
├── vite.config.ts         # Configuração do Vite.js
├── tsconfig.json          # Configuração do TypeScript
└── README.md
```

## 🔄 Como os Blocos se Relacionam

### 📌 `src/main.tsx`
Responsável por inicializar a aplicação React e montar o componente raiz (`App`), incluindo o provedor de estado (**Redux**) e o roteador.

### 📌 `src/App.tsx`
Define a estrutura geral da UI e as **rotas principais** (ex.: Home, Detalhes de Filme).  
Cada rota renderiza um componente presente em `pages/`.

### 📌 `src/routes/`
Contém a configuração das rotas da aplicação, utilizando **React Router** para navegação entre páginas.

### 📌 `src/services/`
Local onde está a lógica de consumo da **API do TMDB** — inclui a configuração do **Axios** (base URL, headers) e funções responsáveis pelas requisições HTTP.

### 📌 `src/store/`
Gerencia o **estado global** da aplicação usando **Redux**, centralizando dados que podem ser compartilhados entre múltiplos componentes (ex.: lista de filmes, filme selecionado).

### 📌 `src/components/`
Abriga componentes de UI reutilizáveis (cards de filmes, botões, cabeçalhos etc.), promovendo reutilização e melhor organização do código.

### 📌 `src/pages/`
Cada página representa uma **visualização completa** da aplicação (ex.: página de listagem de filmes, página de detalhes do filme).

---

## 💡 Benefícios dessa Arquitetura

✔ **Separação de responsabilidades:** UI, lógica de negócio e consumo de API bem distribuídos.  
✔ **Escalabilidade:** facilidade para adicionar novas funcionalidades sem comprometer a estrutura.  
✔ **Clareza para contribuidores:** estrutura intuitiva e fácil de entender.

---

## 📌 Boas práticas aplicadas

✅ Uso de **TypeScript** para tipagem estática e maior segurança.  
✅ Modularização clara por responsabilidade.  
✅ Gerenciamento de estado com **Redux**.  
✅ Consumo de API externalizado em serviços específicos com **Axios**.


##📄 Licença

**Este projeto está sob a licença MIT.**

👨‍💻 Desenvolvido por Lucas Henrique Bonamigo Oliveira.
