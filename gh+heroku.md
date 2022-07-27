# Hospedagem no GitHub Pages e Heroku

O código do cliente, estático, está hospedado no [GitHub Pages](https://cliente.ifsc.cloud/). Já o código do servidor, de WebSocket, roda no Heroku. Esta decisão foi uma das [tarefas deste projeto](https://github.com/boidacarapreta/adcipt20221/issues/25).

## Heroku: criação do serviço

Para rodar a aplicação no Heroku (baseado na [documentação oficial do Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)):

- Caso ainda não tenha criado uma conta no Heroku, [fazê-lo](https://signup.heroku.com/).
- Criar um ambiente de trabalho (_workspace_) no Gitpod. Exemplo: https://gitpod.io/#https://github.com/boidacarapreta/adcipt20221
- Executar no terminal do Gitpod:

  - Fazer o login de forma interativa (usuário e senha):

    ```sh
    heroku login -i
    ```

  - Criar uma aplicação no Heroku:

    ```sh
    heroku create
    ```

  - Enviar o código:

    ```sh
    git push heroku main
    ```

Observação: se o ramo de origem (_branch_) não for `main` ou `master`, é preciso informar o seu nome. Exemplo: assumindo que o ramo de origem é `dev`, informar que esse ramo será enviado para `main` remoto:

```sh
git push heroku dev:main
```

## Heroku: manutenção de um serviço já criado

Para atualizar uma aplicação do Heroku, o processo é semelhante:

- Criar um ambiente de trabalho (_workspace_) no Gitpod. Exemplo: https://gitpod.io/#https://github.com/boidacarapreta/adcipt20221
- Executar no terminal do Gitpod:

  - Fazer o login de forma interativa (usuário e senha):

    ```sh
    heroku login -i
    ```

  - Localizar o nome da aplicação:

    ```sh
    heroku apps
    ```

  - Associar como repositório remoto de git a aplicação do Heroku. Assumindo que a aplicação tem o nome `adcipt-20221` (visualizada com o comando anterior):

    ```sh
    heroku git:remote -a adcipt-20221

    ```

  - Enviar o código:

    ```sh
    git push heroku main
    ```

Vale a mesma observação, da seção anterior, sobre o uso de ramos (_branches_) diferentes de `main` e `master`.
