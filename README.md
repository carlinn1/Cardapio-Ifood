# 🍽️ Cardápio Digital - Full Stack Application

Uma aplicação full stack moderna para gerenciamento de cardápio digital, desenvolvida com as melhores práticas e tecnologias do mercado, apenas para estudo.

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-green)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Latest-blue)

## 📋 Sobre o Projeto

Sistema completo de gerenciamento de cardápio digital que permite cadastrar, visualizar e gerenciar itens do menu de forma intuitiva e eficiente. A aplicação demonstra a implementação de uma arquitetura moderna com separação clara entre frontend e backend, seguindo os princípios de Clean Architecture e boas práticas de desenvolvimento.

## 🚀 Tecnologias Utilizadas

### Backend
- **Java 17** - Linguagem de programação
- **Spring Boot 4.x** - Framework para desenvolvimento de aplicações Java
- **Spring Data JPA** - Abstração para persistência de dados
- **PostgreSQL** - Banco de dados relacional
- **Maven** - Gerenciador de dependências

### Frontend
- **React 18** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **TanStack Query (React Query)** - Gerenciamento de estado assíncrono
- **Axios** - Cliente HTTP para requisições
- **CSS Modules** - Estilização componentizada

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Java JDK 17** ou superior
- **Node.js 18** ou superior
- **PostgreSQL 12** ou superior
- **Maven 3.8** ou superior (ou use o Maven Wrapper incluído)
- **Git**

## 🔧 Instalação e Configuração

### 1. Clone o Repositório

```bash
git clone https://github.com/carlinn1/Frontend.git
cd frontend
npm run dev
```

### 2. Configuração do Banco de Dados

Crie um banco de dados PostgreSQL:

```sql
CREATE DATABASE food;
```

Atualize as credenciais em `src/main/resources/application.properties` se necessário:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/food
spring.datasource.username=postgres
spring.datasource.password=postgres
```

### 3. Executando o Backend

```bash
# Usando Maven Wrapper (recomendado)
./mvnw spring-boot:run

# Ou usando Maven instalado
mvn spring-boot:run
```

O servidor backend estará disponível em `http://localhost:8080`

### 4. Executando o Frontend

```bash
cd Frontend
npm install
npm run dev
```

O frontend estará disponível em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
cardapio/
├── src/main/java/com/ifood/cardapio/
│   ├── controller/          # Controladores REST
│   ├── dtos/                # Data Transfer Objects
│   ├── entity/              # Entidades JPA
│   ├── model/               # Models de domínio
│   └── repository/          # Repositórios JPA
├── Frontend/
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   ├── hooks/           # Custom Hooks
│   │   ├── interface/       # Interfaces TypeScript
│   │   └── assets/          # Recursos estáticos
│   └── public/              # Arquivos públicos
└── pom.xml                  # Configuração Maven
```

## 🔌 Endpoints da API

### Foods

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/foods` | Lista todos os itens do cardápio |
| POST | `/foods` | Cria um novo item no cardápio |

### Exemplo de Request Body (POST)

```json
{
  "title": "Pizza Margherita",
  "image": "https://example.com/pizza.jpg",
  "price": 35.90
}
```

### Exemplo de Response (GET)

```json
[
  {
    "id": 1,
    "title": "Pizza Margherita",
    "image": "https://example.com/pizza.jpg",
    "price": 35.90
  }
]
```

## ✨ Funcionalidades

- ✅ Listagem de itens do cardápio
- ✅ Cadastro de novos itens
- ✅ Visualização em cards responsivos
- ✅ Integração com banco de dados PostgreSQL
- ✅ API RESTful seguindo boas práticas
- ✅ Tipagem forte com TypeScript
- ✅ Gerenciamento de estado com React Query
- ✅ CORS configurado para desenvolvimento

## 🎯 Decisões Técnicas

### Backend
- **Spring Boot**: Escolhido pela maturidade, robustez e ampla adoção no mercado
- **PostgreSQL**: Banco de dados relacional confiável e performático
- **JPA/Hibernate**: Simplifica o mapeamento objeto-relacional

### Frontend
- **React + TypeScript**: Combinação que garante type safety e produtividade
- **Vite**: Build extremamente rápida comparada a ferramentas tradicionais
- **React Query**: Simplifica cache, sincronização e gerenciamento de estado do servidor
- **Arquitetura por features**: Organização que facilita escalabilidade

## 🔒 CORS

A aplicação está configurada para aceitar requisições de qualquer origem durante o desenvolvimento. Para produção, é recomendado configurar apenas as origens permitidas:

```java
@CrossOrigin(origins = "https://seu-dominio.com")
```

## 🧪 Testes

```bash
# Backend
./mvnw test

# Frontend
cd Frontend
npm test
```

## 📈 Melhorias Futuras

- [ ] Implementar autenticação e autorização
- [ ] Adicionar paginação na listagem
- [ ] Implementar busca e filtros
- [ ] Adicionar categorias de produtos
- [ ] Criar painel administrativo
- [ ] Implementar upload de imagens
- [ ] Adicionar testes unitários e de integração
- [ ] Deploy em cloud (AWS/Azure/GCP)
- [ ] Implementar CI/CD

## 👨‍💻 Autor

**Seu Nome**

- LinkedIn: [Linkedin](https://www.linkedin.com/in/carlos-henrique-souza-bispo-29931231b/)
- GitHub: [Github](https://github.com/carlinn1)
- Email: carlos_-425@hotmail..com

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
