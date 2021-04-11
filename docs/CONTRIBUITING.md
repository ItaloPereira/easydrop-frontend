# Como contribuir para o projeto

## Principais branches

- `main`.
  **_O que é_**: Essa branch roda código estável e é diretamente relacionada à produção. Cada push nessa branch envia o código para uma versão em produção.

## Branches

**Nome de branch**

`$tipoDaBranch/$descrição-da-branch`

**Linguagem**

Branches são escritas em inglês.

**$tipoDaBranch**

- `fix`: Corrige uma falha/bug;
- `feat`: Adiciona um novo recurso/feature;
- `refactor`: Refatorar/Melhorar um recurso existente;
- `chore`: mudanças na configuração, atualizações de ferramentas/bibliotecas, ajustes de construção/build, e coisas correlacionadas;
- `docs`: atualizações de documentação, nenhum código de produção atualizado.

**$descrição-da-branch**

Um pequeno vestígio de uma mensagem, descrevendo o que será desenvolvido.

**_Bons exemplos de nomes de branches_**

- `feat/user-preferences`
- `refactor/product-creation`
- `fix/organization-update`
- `chore/remote-signer-secrets`

**_Maus exemplos de nomes de branches_**

- `feat/user-preferences-fields-with-validations`: Muito longo. Especificações deverão ser colocadas nos commits;
- `refactor/product`: Muito curto e não diz nada a respeito do que sera melhorado;
- `fix/add-new-user`: Pode parecer ambíguo. Devemos tomar cuidado em não fazer parecer que o tipo não está relacionado à ação/descrição;
- `feat-user-preferences`: Está fora da convenção, o tipo `feat` e a descrição `user-preferences` deveriam ser separadas por uma barra `/`

## Mensagens do Commit

```jsx
$ação($escopo): $tituloDoCommit

$corpoDoCommit
```

**Linguagem**

Commits são escritos em inglês.

**$ação**

Tipos de ações feitas no contexto do commit:

- `fix`: Corrigi falhas/bugs;
- `hotfix`: Correções urgentes passivas de serem enviadas para as principais branches (veja na seção Principais Branches) Pull Request para main;
- `refactor`: Melhoria de um recurso existente;
- `feat`: Quando é adicionado um novo recurso, ou especificação pertencente à um recurso já em desenvolvimento; não deve estar correlacionado à nenhuma correção, melhoria na aplicação;
- `chore`: Mudanças de configurações, atualizações de ferramentas/bibliotecas, ajustes nas construções/build, e coisas correlacionadas;
- `doc`: Mudanças ou melhorias em documentação; nenhum código de produção atualizado;
- `style`: formatação, falta de ponto e vírgula, etc; nenhum código de produção atualizado;

**$escopo**

O escopo em que está trabalhando. Bons exemplos de escopo são:

- user
- database
- Product Component
- config
- proxy
- server

**$tituloDoCommit**

A primeira linha não pode ter mais que 70 caracteres, a segunda linha sempre estará em branco; O tipo e o escopo deverão sempre estar minúsculos como mostrado acima;

**$corpoDoCommit**

Virá logo após a linha em branco e deverá conter no máximo 80 caracteres;

**Observações importantes:**

- Use sempre nos títulos o modo imperativo, e no máximo um indicativo no presente: "Change" não "Changed" ou "Changes";
- No corpo, adicionar a motivação para aquela mudança ou implementação descrita no título;

**_Bons exemplos de nomes de commits_**

- `docs(readme): initial readme to the project`
- `feat(config): allow provided config object to extend other configs`
- `refactor(auth): receive token through authorization header`
- `chore(env var): add main pub key env var`
- `style(architecture): change folder organization`

**_Maus exemplos de nomes de commits_**

- `docs-readme: initial readme to the project`: Fora do padrão de commit. Escopo deveria estar dentro de parênteses;
- `feat(config): permitir objeto de configuração provido extender a outras configurações` : Fora do padrão de commit. A linguagem usada deveria ser inglês;
- `change folder organization` : Fora do padrão de commit. Não fala que tipo de commit é esse;
- `refactor(Cart): Add algorithm which transform the cart component into a generic component to use in several projects without troubles` : Fora do padrão de commit. O commit está muito grande, e está explicando coisas demais. Caso sinta necessidade de explicar muitas coisas utilize o corpo do commit;

## Criando um Pull Request

**Linguagem**

Pull Request são escritos em português.

**Título do Pull Request**

O título do Pull Request ficará assim:

`#$KANBANIZE-CARD | [$AÇÃO] $mensagem`

**$KANBANIZE-CARD**

Você poderá encontrar o KANBANIZE-CARD dentro da sua task. Corresponde ao ID do card.

**$AÇÃO**

As possíveis ações são:

- `FIX`
- `HOTFIX`
- `FEAT`
- `REFACTOR`
- `DOCS`
- `CHORE`

**$mensagem**

Uma mensagem simples para o título do Pull Request. Deverá ser concisa e curta

Exemplo:

**_#267 | [REFACTOR] Carregamento do estado do carrinho_**

**Pull Request body**

Aqui é algo mais aberto para cada um, mas seria bom conter as seguintes informações:

- O que foi feito;
- Porque foi feito (Se necessário);
- Como foi feito (Se necessário);
- Como ficou;
- Como testar;

**Exemplo:**

**_CAN-267 | [CORREÇÃO] Carregamento do estado do carrinho_**

### O que foi feito:

Nesse PR foi corrigido o cenário onde o carregamento do carrinho não estava acontecendo, ao tentar adicionar o primeiro produto; o cenário não acontecia a partir do segundo produto adicionado.

### Como ficou:

Agora na primeira ação de adicionar um produto no carrinho, o mesmo já carrega.

fotinhas, fotinhas, fotinhas

### Como testar:

1. Entrar na branch desse PR;
2. yarn install && yarn start;
3. Entrar na página de produtos;
4. Adicionar um novo produto;
5. Verificar se o carrinho carregou;
6. Pronto 🙂

## Git flow in a row

Cria sua branch a partir de `main` ‚ → Commit ‚ → Abra um Pull Request para a `main` ‚ → entregue 😄

## Referências (ou copy/paste)

[https://karma-runner.github.io/1.0/dev/git-commit-msg.html](https://karma-runner.github.io/1.0/dev/git-commit-msg.html)

[https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

[https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/)

[https://medium.com/@roalcantara/a-guide-to-improve-the-git-hub-flow-and-commits-messages-b495461e1115](https://medium.com/@roalcantara/a-guide-to-improve-the-git-hub-flow-and-commits-messages-b495461e1115)

[https://www.atlassian.com/git/tutorials/merging-vs-rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)

[https://www.atlassian.com/git/articles/git-team-workflows-merge-or-rebase](https://www.atlassian.com/git/articles/git-team-workflows-merge-or-rebase)
