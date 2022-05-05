# Heroku

Para rodar a aplicação no Heroku (baseado na [documentação oficial do Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)):

- Caso ainda não tenha criado uma conta no Heroku, [fazê-lo](https://signup.heroku.com/).
- Criar um ambiente de trabalho (_workspace_) no Gitpod. Exemplo: criar a partir do ramo (_branch_) `dev` com a URL https://gitpod.io/#https://github.com/boidacarapreta/adcipt20221/tree/dev
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
