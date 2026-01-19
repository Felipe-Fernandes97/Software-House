# React Bits - Componentes para o CRM

React Bits é uma biblioteca open-source de componentes React animados, interativos e totalmente customizáveis. Contém 110+ animações gratuitas para textos, backgrounds e UI.

## Sobre o React Bits

- **Licença:** MIT (100% gratuito, sem limites)
- **Tecnologias:** React, Next.js, Tailwind CSS, Framer Motion
- **Website:** https://reactbits.dev
- **GitHub:** https://github.com/DavidHDev/react-bits

## Componentes Úteis para CRM

### 1. Dashboard & Analytics

**Gráficos e Visualizações:**
- Animated Counter - Contadores animados para métricas
- Progress Bars - Barras de progresso para metas de vendas
- Stat Cards - Cards de estatísticas com animações
- Chart Components - Componentes de gráficos interativos

**Uso no CRM:**
- Dashboard principal com KPIs
- Métricas de performance de vendas
- Progresso de metas mensais
- Análise de funil de vendas

### 2. Forms & Inputs

**Componentes de Formulário:**
- Animated Input Fields - Campos de input com animações
- Search Bars - Barras de busca animadas
- Select/Dropdown - Dropdowns customizáveis
- Toggle Switches - Switches para configurações

**Uso no CRM:**
- Formulários de cadastro de clientes
- Campos de busca de leads
- Filtros avançados
- Configurações de usuário

### 3. Cards & Containers

**Cards Interativos:**
- Hover Cards - Cards com efeitos de hover
- Flip Cards - Cards que giram ao clicar
- Animated Containers - Containers com transições suaves
- Grid Layouts - Layouts em grade responsivos

**Uso no CRM:**
- Cards de clientes/leads
- Lista de oportunidades
- Pipelines visuais
- Galeria de produtos

### 4. Navigation

**Navegação:**
- Animated Tabs - Abas com transições
- Sidebar Navigation - Menu lateral animado
- Breadcrumbs - Migalhas de pão
- Pagination - Paginação com animações

**Uso no CRM:**
- Menu principal do sistema
- Navegação entre módulos
- Histórico de navegação
- Listas paginadas de registros

### 5. Feedback & Notifications

**Alertas e Notificações:**
- Toast Notifications - Notificações temporárias
- Alert Boxes - Caixas de alerta
- Loading Spinners - Indicadores de carregamento
- Progress Indicators - Indicadores de progresso

**Uso no CRM:**
- Notificações de ações realizadas
- Alertas de tarefas pendentes
- Loading de dados
- Progresso de importações

### 6. Data Display

**Exibição de Dados:**
- Tables - Tabelas animadas
- Lists - Listas com animações
- Timeline - Linha do tempo
- Accordions - Componentes expansíveis

**Uso no CRM:**
- Tabela de clientes
- Lista de atividades
- Histórico de interações
- FAQs e documentação

### 7. Buttons & Actions

**Botões e Ações:**
- Animated Buttons - Botões com efeitos
- Icon Buttons - Botões com ícones
- Button Groups - Grupos de botões
- Floating Action Button - FAB animado

**Uso no CRM:**
- Ações principais (Adicionar, Editar, Deletar)
- Botões de filtro
- Ações rápidas
- Atalhos de funcionalidades

### 8. Text & Typography

**Texto Animado:**
- Text Reveal - Texto que aparece com animação
- Gradient Text - Texto com gradiente
- Typewriter Effect - Efeito de digitação
- Animated Headlines - Títulos animados

**Uso no CRM:**
- Títulos de seções
- Mensagens de boas-vindas
- Destaques importantes
- Call-to-actions

## Como Integrar no Projeto

### Instalação

React Bits usa `jsrepo` para instalação via CLI:

```bash
# Exemplo de instalação de um componente
npx jsrepo add react-bits/animated-button
```

### Alternativa - Copy/Paste

Você também pode:
1. Acessar https://reactbits.dev
2. Navegar até o componente desejado
3. Copiar o código diretamente
4. Colar no projeto e adaptar conforme necessário

### Customização

Todos os componentes suportam:
- **Props customizáveis** para ajustar comportamento
- **Tailwind CSS** para estilização
- **Variantes TypeScript/JavaScript**
- **Variantes CSS/Tailwind**

## Exemplos de Uso

### Dashboard Card

```tsx
import { StatCard } from '@/components/react-bits/stat-card';

<StatCard
  title="Total de Clientes"
  value={1234}
  increase={12.5}
  icon={<Users />}
/>
```

### Animated Input

```tsx
import { AnimatedInput } from '@/components/react-bits/animated-input';

<AnimatedInput
  label="Nome do Cliente"
  placeholder="Digite o nome..."
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### Toast Notification

```tsx
import { toast } from '@/components/react-bits/toast';

toast.success('Cliente cadastrado com sucesso!');
```

## Próximos Passos

1. Explorar o catálogo completo em https://reactbits.dev
2. Selecionar componentes específicos para cada módulo do CRM
3. Instalar componentes conforme necessário
4. Adaptar tema e cores ao design do projeto
5. Documentar componentes customizados criados

## Recursos

- [React Bits Website](https://reactbits.dev)
- [GitHub Repository](https://github.com/DavidHDev/react-bits)
- [All Shadcn - React Bits](https://allshadcn.com/components/react-bits/)
- [Component Libraries - React Bits](https://componentlibraries.com/item/react-bits)
