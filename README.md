# Heroku

Para rodar a aplicação no Heroku (baseado na [documentação oficial do Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)):

1. Caso ainda não tenha criado uma conta no Heroku, [fazê-lo](https://signup.heroku.com/).
1. Fazer o login de forma interativa no CLI: `heroku login -i`
1. Criar uma aplicação: `heroku create`
1. Enviar o código: `git push heroku main`

Observação: caso o ramo de origem (_branch_) não seja `main` ou `master`, é preciso informar o seu nome. Exemplo: assumindo que o ramo de origem é `dev`, informar que esse ramo será enviado para `main` remoto: `git push heroku dev:main`
