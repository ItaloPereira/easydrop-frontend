# Estrutura de Organização de pastas e arquivos

A estrutura de pastas e arquivos do projeto em seu `Source` ficará da seguinte forma:

```markdown
├── src
│ ├── @types
│ ├── assets
│ ├── components
│ ├── helpers
│ ├── hooks
│ ├── layouts
│ ├── pages
│ ├── routes
│ ├── services
│ ├── store
│ ├── themes
│ ├── config.ts
│ ├── index.ts
│ ├── react-app-env.d.ts
│ ├── serviceWorker.ts
└── └── setupTests.ts
```

Para melhor explicar e exemplificar, falaremos das responsabilidades de cada pasta abaixo:

### @types

**Responsabilidades:**

Essa pasta tem como responsabilidades manter e organizar todos os **tipos globais** e os **tipos que sobrescrevem** **os tipos do** **node_modules**. Os **tipos globais**, são acessíveis por mais de um escopo.

_Exemplo_:

Dentro de `/src/@types/store` contém a interface `InterfaceRootState` a qual é importada dentro de `pages` , `helpers` e `store` .

**Regras:**

- Ao criar um pasta (Módulo) para um novo conjunto de types, nomear conforme o seu escopo.

  _Exemplo_:

  - `/src/@types/store` → pasta/módulo **store**
  - `/src/@types/routes` → pasta/módulo **routes**
  - `/src/@types/ui/dateFilters` → pasta/módulo **ui/dateFilters**

- Quando for declarar o módulo do tipo, seguir o template `@portal-types/{pasta/modulo}` . Convenientemente, costuma ser o mesmo path após a pasta **@types**.

  _Exemplo_:

  ```tsx
  declare module '@portal-types/store' {
    ...
  }
  ```

---

### Assets

**Responsabilidades:**

Essa pasta tem como responsabilidades, manter e organizar todos os assets do nosso projeto como, fotos.

---

### Components

**Responsabilidades:**

Essa pasta tem como responsabilidades manter e organizar todos os componentes e seus respectivos containers, os quais na maioria das vezes são **Presentation Components** ou detém de um **Container Components** para ditar regras de estado (e em último caso, possívelmente se conectar na `store`, como no caso do `SideMenu`) do próprio componente (exemplo: mostrar e ocultar um valor de um component filho).

Para estudos: [https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)

**Regras:**

- Agrupamos nossos componentes por **módulo/feature**.
- Mantemos componentes genéricos e reutilizáveis por mais de um **módulo/feature** dentro da pasta `src/components/UI`
- Pastas são nomeadas sem a repetição dos níveis acima.

  _Exemplo:_

  ```markdown
  ├── components
  │ ├── Transaction
  │ │ ├── Skeleton
  ```

- Arquivos são nomeados herdando os nomes dos seus níveis acima.

  _Exemplo:_

  ```markdown
  ├── components
  │ ├── Transaction
  │ │ ├── Skeleton
  │ │ │ ├── TransactionSkeleton.tsx
  ```

---

### Helpers

**Responsabilidades:**

Essa pasta tem como responsabilidades manter e organizar todas as funções puras que são reutilizadas pelos demais arquivos do projeto.

**Regras:**

- Todas as funções que entrarem nesta pasta precisam ser puras e estar sendo reutilizadas por mais de um ponto do projeto.

### Hooks

**Responsabilidades:**

Essa pasta tem como responsabilidades manter e organizar todos os métodos hooks customizados que serão utilizados pelos demais pontos do projeto.

**Regras:**

- Todos os hooks que entrarem nesta pasta precisam estar sendo reutilizados por mais de um ponto do projeto.
- Cada hook terá sua própria pasta.

### Layouts

**Responsabilidades:**

Essa pasta tem como responsabilidades manter e organizar todos os layouts usados para montar uma tela no nosso projeto. Um Layout consiste em um **Presentational Component** com o único objetivo de organizar a disposição dos seus _children components_ na página.

### Pages

**Responsabilidades:**

Essa pasta tem como responsabilidades manter e organizar todas as páginas dentro do nosso projeto. Uma página tem como responsabilidade orquestrar um conjunto de _children components_ que precisam de dados e comportamentos, os quais, não cabem a eles essa responsabilidade.

**Regras:**

- Agrupamos nossas **pages** de acordo com a definição de rotas.

  _Exemplo:_

  - Para uma rota `/auth/login/password` teríamos a page localizada em `/src/pages/Auth/Login/Password.tsx`.

### Routes

**Responsabilidades:**

Essa pasta tem como responsabilidades, manter e organizar todas as rotas do nosso projeto e componentes que ajudam nas condições de qual rota seguir.

### Services

**Responsabilidades:**

Essa pasta tem como responsabilidades, manter e organizar todos as chamadas feitas para a API.

**Regras:**

- Agrupamos nossos _services_ por **módulo/feature**.

### Store

**Responsabilidades:**

Essa pasta tem como responsabilidades, manter e organizar todo nosso gerenciador de estado global, redux.

**Regras:**

- Nossa pasta **store** será agrupada por **module**;
- Dentro de cada **module** deverá conter os arquivos **actions.ts**, **reducers.ts**, **selectors.ts**, **index.ts**;
  - **actions.ts**, esse arquivo servirá para conter todas as funções `createAsyncThunks` e `createActions` do escopo do **module** em que está;
  - **reducers.ts**, esse arquivo servirá para conter o `createReducer` escopo do **module** em que está;
  - **selectors.ts**, esse arquivo servirá para conter os selectors do escopo do **module** em que está;
  - **index.ts**, esse arquivo servirá para conter o agrupamento dos **exports** necessário para que esse **module** seja consumida no projeto;

### Theme

**Responsabilidades:**

Essa pasta tem como responsabilidades, manter e organizar todos os temas base criados a partir do Material-UI.

### Organização Geral

- Todas as pastas poderão conter alguns arquivos que auxiliarão em sua organização, os quais são: \***\*mocks**.ts**, **types.d.ts** e **constants.ts\*\*
  - \***\*mocks**.ts**, esse arquivo servirá para conter os **mocks\*\* (constantes) dos testes do escopo em que está, não podendo ser exportado para outro escopo. Importante tomar cuidado para não confundir o dado que estará aqui e o que deverá estar em costants;
  - **types.d.ts**, esse arquivo servirá para conter os **types** dos componentes e arquivos do escopo em que está, não podendo ser consumido por outro escopo, a não ser que o index desse escopo exporte por ele;
  - **constants.ts**, esse arquivo servirá para conter as constants dos componentes e arquivos (que não seja seu teste) do escopo em que está, não podendo ser exportado para outro escopo. Importante tomar cuidado para não confundir o dado que estará aqui e o que deverá estar em mocks;

### Modelo de como as coisas poderão ficar dispostas:

```markdown
├── components
│ ├── UI
│ │ └── DateFilters
│ ├── Auth
│ │ ├── Login
│ │ │ └── index.tsx
│ │ ├── Password
│ │ │ └── index.tsx
│ │ └── ForgotPassword
│ │ └── index.tsx
│ ├── Transaction
│ │ ├── List
│ │ │ ├── TransactionList.tsx
│ │ │ ├── TransactionList.test.tsx
│ │ │ ├── index.tsx
│ │ └── Skeleton
│ │ ├── **mocks**.ts
│ │ ├── TransactionSkeleton.test.tsx
│ │ ├── constants.ts
│ │ ├── types.d.ts
│ │ ├── TransactionSkeleton.tsx
│ │ └── index.ts
│ └── SideMenu
│ ├── SideMenu.tsx
│ └── LogoutButton
│ ├── SideMenuLogoutButton.tsx
│ ├── SideMenuLougoutButton.test.tsx
│ └── index.tsx
├── layouts
│ ├── Auth.tsx
│ └── Main.tsx
├── pages
│ ├── Transaction
│ │ ├── constants.ts
│ │ ├── index.ts
│ │ └── Transaction.tsx
│ ├── Auth
│ │ ├── Login
│ │ │ ├── index.ts
│ │ │ ├── AuthLogin.tsx
│ │ │ └── Password
│ │ │ ├── index.ts
│ │ │ └── AuthLoginPassword.tsx
│ │ └── ForgotPassword
│ │ │ ├── index.ts
│ │ │ └── AuthForgotPassword.tsx
│ └── Home
│ ├── index.ts
│ └── Home.tsx
├── store
│ ├── transactions
│ │ ├── **mocks**.ts
│ │ ├── actions.ts
│ │ ├── constants.ts
│ │ ├── index.test.ts
│ │ ├── index.ts
│ │ ├── reducers.ts
│ │ ├── selectors.ts
│ │ └── types.d.ts
│ ├── index.ts
│ └── reducers.ts
├── services
│ └── transactions
│ ├── **mocks**.ts
│ ├── constants.ts
│ ├── index.test.ts
│ ├── index.ts
│ └── types.d.ts
├── routes
│ ├── AuthGuardian
│ │ ├── index.ts
│ │ ├── constants.ts
│ │ ├── AuthGuardian.tsx
│ │ └── AuthGuardian.test.tsx
│ ├── private.tsx
│ ├── public.tsx
│ └── index.tsx
├── theme
│ └── index.ts
├── helpers
│ ├── formatters
│ │ ├── formatters.ts
│ │ ├── formatters.test.ts
│ │ └── index.ts
│ ├── dates.ts
│ │ ├── dates.ts
│ │ ├── dates.test.ts
└──└──└── index.ts
```
