# CRM System - Sistema de Gestão de Relacionamento com Cliente

Sistema CRM moderno e completo desenvolvido com as mais recentes tecnologias do mercado.

## Tecnologias Utilizadas

### Frontend

- **Next.js 16.1.3** - Framework React com Server-Side Rendering
- **React 19.2.3** - Biblioteca JavaScript para interfaces
- **TypeScript 5+** - Superset JavaScript com tipagem estática
- **Tailwind CSS 4** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones moderna
- **React Hook Form 7.71.1** - Gerenciamento de formulários
- **TanStack Query 5.90.19** - Gerenciamento de estado assíncrono
- **Axios 1.13.2** - Cliente HTTP
- **Zod 4.3.5** - Validação de schemas TypeScript-first

### Backend

- **NestJS** - Framework Node.js progressivo
- **Prisma 7.2.0** - ORM moderno para Node.js
- **PostgreSQL** - Banco de dados relacional
- **JWT (@nestjs/jwt 11.0.2)** - Autenticação via JSON Web Tokens
- **Bcrypt 6.0.0** - Criptografia de senhas
- **TypeScript 5+** - Desenvolvimento backend type-safe

## Estrutura do Projeto

```
.
├── frontend/          # Aplicação Next.js
│   ├── src/
│   │   ├── app/      # Pages e layouts (App Router)
│   │   ├── components/  # Componentes React reutilizáveis
│   │   └── contexts/    # Contextos React (Theme, etc)
│   └── public/       # Arquivos estáticos
│
└── backend/          # API NestJS
    ├── src/
    │   ├── modules/  # Módulos da aplicação
    │   └── prisma/   # Schema e migrations
    └── prisma/       # Configuração Prisma
```

## Funcionalidades Planejadas

- Sistema de autenticação e autorização
- Gestão de clientes
- Gestão de leads
- Pipeline de vendas
- Dashboard analytics
- Relatórios personalizados
- Tema claro/escuro
- Interface responsiva

## Começando

### Pré-requisitos

- Node.js 20+
- PostgreSQL
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd heuristic-banach
```

2. Instale as dependências do frontend
```bash
cd frontend
npm install
```

3. Instale as dependências do backend
```bash
cd ../backend
npm install
```

### Configuração

#### Frontend

1. Configure as variáveis de ambiente:
```bash
cd frontend
cp .env.example .env.local
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

O frontend estará disponível em `http://localhost:3000`

#### Backend

1. Configure as variáveis de ambiente:
```bash
cd backend
cp .env.example .env
```

2. Configure a URL do banco de dados no `.env`:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/crm"
JWT_SECRET="sua-chave-secreta"
```

3. Execute as migrations do Prisma:
```bash
npx prisma migrate dev
```

4. Inicie o servidor:
```bash
npm run start:dev
```

O backend estará disponível em `http://localhost:3001`

## Scripts Disponíveis

### Frontend

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa o linter

### Backend

- `npm run start:dev` - Inicia o servidor em modo desenvolvimento
- `npm run build` - Compila o projeto
- `npm run start:prod` - Inicia servidor de produção
- `npx prisma studio` - Abre interface visual do banco de dados

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.
