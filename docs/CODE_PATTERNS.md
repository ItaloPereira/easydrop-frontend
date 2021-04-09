# Padrões de Código do Projeto

## Componentes (components/pages/layout)

- Usar FunctionalComponents;
- Padrão para nome dos componentes:
  - Componentes são nomeados de acordo com a sua localização. Sendo assim, um componente localizado em `/src/components/Transaction/Skeleton.tsx` seria nomeado como **`TransactionSkeleton`**. Um componente localizado em `/src/pages/Auth/Login/Password.tsx` seria nomeado como **`AuthLoginPassword`**. Como exceção, temos a pasta **UI**. Um componente localizado em `/src/components/UI/Snackbar` é apenas **`Snackbar`**.
  - Componentes que estão em uma pasta de mesmo nome, não precisam repetir o nome no componente. Sendo assim, um componente localizado em `/src/components/Transaction/List/List.tsx` seria nomeado como **`TransactionList`** e não como **`TransactionListList`**.
- Manter o _Type_ das Props dentro do componente;
  - Todos os componentes que tiverem um **type** para suas propriedades não precisam de um arquivo separado para elas, sendo declaradas antes da definição do componente.
- Padrão para o componente se conectar com o gereciador de estado (redux):

  **Quando quiser consumir um valor da store:**

  Para consumir um valor da store dentro de um _component_, não usamos mais o _connect_ do redux. Hoje criamos um selector, e através do hook _useSelector_ conseguimos acesso ao dado específico da store. Ex.:

  ```tsx
  // store/account/selectors.ts
  import type { RootState } from '@portal-types/store';

  export const userPismoMerchantIdSelector = (state: RootState) => state.account.data?.pismoMerchantId;
  export const userDocumentNumberSelector = (state: RootState) => state.account.data?.documentNumber;
  export const userNameSelector = (state: RootState) => state.account.data?.name;
  ```

  ```tsx
  // components/SideMenu/SideMenu.tsx

  import React from 'react';
  import { useSelector } from 'react-redux';

  import { AccountSelectors } from 'store/accounts';

  [...]

  const SideMenu: FunctionComponent = () => {
    const accountUserName = useSelector(AccountSelectors.userNameSelector);
    const documentNumber =
  		useSelector(AccountSelectors.userDocumentNumberSelector);

  [...]
  }

  export default SideMenu;
  ```

  **Quando quiser disparar uma ação:**

  Para disparar uma ação dentro de um _component_, que alterará valores na store, não usamos mais o _connect_ do redux. Hoje usamos o hook (se tornou _custom_ para inferência de _types_) _useAppDispatch_. Ex.:

  ```tsx
  // components/SideMenu/SideMenu.tsx

  import React from 'react';
  import { useAppDispatch } from 'store';

  import { ReceivablesActions } from 'store/receivables';

  [...]

  const SideMenu: FunctionComponent = () => {
    const dispatch = useAppDispatch();

    useDidMount(() => {
      dispatch(ReceivablesActions.getTodaysBalance());
    });

  [...]
  }

  export default SideMenu;
  ```

## Store

- Padrão para criar reducer;

  - Para criação de um reducer, utilizar o _createReducer_ juntamente com o parâmetro _builder_, que nos permite utilizar a função _addCase_ para definir as ações que o reducer vai lidar.

    Exemplo 1 (reducer de uma ação síncrona):

    ```tsx
    // store/auth/reducer.ts

    import { createReducer } from '@reduxjs/toolkit';

    import { logout, clearError } from './actions';
    import { initialState } from './constants';

    export default createReducer(initialState, (builder) =>
      builder
    		[...]
        .addCase(logout, (state) => ({ ...initialState, rememberMe: state.rememberMe }))
        .addCase(clearError, (state) => ({ ...state, error: undefined }))
    );
    ```

    Exemplo 2 (reducer de uma ação assincrona):

    ```tsx
    // store/auth/reducer.ts

    import { createReducer } from '@reduxjs/toolkit';

    import { recoverPassword } from './actions';
    import { initialState } from './constants';

    export default createReducer(initialState, (builder) =>
      builder
    		[...]
        .addCase(recoverPassword.pending, (state) => {
          state.loading = Loading.PENDING;
          state.recoverPasswordStatus = undefined;
          state.error = undefined;
        })
        .addCase(recoverPassword.fulfilled, (state) => {
          state.loading = Loading.IDLE;
          state.recoverPasswordStatus = 'success';
          state.error = undefined;
        })
        .addCase(recoverPassword.rejected, (state, action) => {
          state.loading = Loading.IDLE;
          state.recoverPasswordStatus = 'failed';
          state.error = action.error.message;
        })
    );
    ```

## Types

- Usaremos apenas _Type_. Hoje no typescript _Interfaces_ e _Types_ andam muito lado a lado em funcionalidades, porém, as interfaces nos trazem maiores abordagens para paradigmas **OO** (Orientado à Objeto) e types abordagens de paradigmas de Programação Funcional;
- Quando o tipo for de um escopo específico e apenas para ele, chamaremos de **Tipo Local**, e seus tipos ficarão contidos dentro de sua respectiva pasta;
- Quando o tipo for de uma estrutura de dados, a qual navega pelo projeto inteiro, chamaremos de **Tipo Global**, e seus tipos ficarão em um escopo acima, no caminho `/src/@types/` ;

  - Quando for declarar o módulo do tipo, seguir o template `@portal-types/{pasta/modulo}`. Convenientemente, costuma ser o mesmo path após a pasta **@types**.

    _Exemplo_:

    ```tsx
    declare module '@portal-types/store' {
      ...
    }
    ```

## Gerais

**Arquivos comuns:**

Geralmente, num mesmo escopo podemos nos deparar com cenários que necessitem de constantes, types locais e mocks. A ideia é criá-los em arquivos separados para que sejam exclusivamente consumidos pelo próprio escopo, onde:

- constants.ts, contém valores imutáveis;
- types.d.ts, são definições de tipos;
- **mocks**.ts, contém valores constantes para serem usados dentro de testes

**Imports**:

Para alguns casos, teremos um padrão de imports. A premissa é trazer mais organização e legibilidade para nossos arquivos.

- **Types**: serão importados separadamente, utilizando **import type**.

  Exemplo:

  ```tsx
  import type { PickSelect } from '../@types';
  // ou
  import type { ReactElement } from 'react';
  ```

- **Imports do Material-UI (excluindo Icons)**: serão agrupados conforme seus grupos.

  Exemplo 1:

  ```tsx
  import { Box, Button, Container, TextField } from '@material-ui/core';
  import { Alert } from '@material-ui/lab';
  ```

  - Para estilos, importamos diretamente de `@material-ui/core/styles`.

    Exemplo 2:

    ```tsx
    import { makeStyles, createStyles } from '@material-ui/core/styles';
    ```

- **Icons do Material-UI**: como citado na (documentação do material-ui)[[https://material-ui.com/pt/guides/minimizing-bundle-size/#when-and-how-to-use-tree-shaking](https://material-ui.com/pt/guides/minimizing-bundle-size/#when-and-how-to-use-tree-shaking)], para evitar a lentidão desnecessária na compilação manter a importação diretamente do caminho correspondente dos ícones, separadamente.

  Exemplo:

  ```tsx
  import HomeIcon from '@material-ui/icons/Home';
  ```

- **Componentes de Pages e UI**: na ocasião de algum componente em pages e/ou UI tiver um **conflito** na importação, temos o caso de adicionar o prefixo **Page** no import. É um caso bem específico, mas será adicionada a redundância se necessário.

  Exemplo:

  ```tsx
  // caso o componente com este nome tenha conflito
  import AuthLoginPassword from 'pages/Auth/Login/Password';
  // ajustado
  import PageAuthLoginPassword from 'pages/Auth/Login/Password';
  ```
