# ADC + IPT 2022.1

[Mais uma edição de desenvolvimento de um jogo Web](https://boidacarapreta.github.io) para integrar as disciplinas de redes de computadores (ADC) e telefonia IP (IPT). Para documentar progresso do projeto, há o [kanban](//github.com/boidacarapreta/adcipt20221/projects/1?fullscreen=true), [milestones](//github.com/boidacarapreta/adcipt20221/milestones?direction=asc&sort=due_date&state=open) e as [versões (_releases_) publicadas](https://github.com/boidacarapreta/adcipt20221/releases).
 O resultado está em: [https://cliente.ifsc.cloud](https://cliente.ifsc.cloud).

## Referências

Muitas referências foram importadas do [repositório de 2020.2](https:////github.com/boidacarapreta/arc20202), em especial a [lista de vídeos com todo o (início do) desenvolvimento de um jogo Web feito com Phaser 3 e WebRTC](https://www.youtube.com/watch?v=fx4JN1QqtPc&list=PLje9mMro7hT0pDZWroVNyg-YbBGhJNsxU).

- Mapa e _assets_:
  - [OpenGameArt.org](https://opengameart.org/): _assets_ para sprites, músicas etc.
  - [Dungeon Scrawl](https://dungeonscrawl.com/): gerador de mapas e labirintos.
  - [Tiled Map Editor](https://www.mapeditor.org/): editor de _tilemaps_.
  - [Phaser Editor 2D](https://github.com/PhaserEditor2D/PhaserEditor): criador de cenas 2D para Phaser 3.
- Música e efeitos sonoros:
  - [Sonic Pi](https://sonic-pi.net/): sintetizador de música programável em código.
  - [ZzXFM](https://keithclark.co.uk/articles/zzfxm/): mini gerador de música para Javascript.
  - [Buildbox](https://www.buildbox.com/13-places-to-find-free-game-sound-effects/): coletânea de sites com efeitos sonoros grátis.
- Tutoriais:
  - [GitHub Skills](https://skills.github.com/): série de tutoriais para dominar git e GitHub.
  - [GameDev Academy](https://gamedevacademy.org/): tutoriais para desenvolvimento de jogos Web, como por exemplo [jogos multijogador com Socket.IO](https://gamedevacademy.org/create-a-basic-multiplayer-game-in-phaser-3-with-socket-io-part-1/) e [MMORPGs](https://phasertutorials.com/how-to-create-a-phaser-3-mmorpg-part-1/).
  - [Emanuele Feronato](https://www.emanueleferonato.com/): dicas de desenvolvimento de jogos Web, como por exemplo [mapas procedurais](https://www.emanueleferonato.com/2019/01/29/javascript-procedural-dungeon-generator-found-on-github-fixed-a-bit-and-about-to-be-expanded/).
  - [Michael Hadley](https://medium.com/@michaelwesthadley): tutorial de como [criar mundos modulares usando _tilemaps_](https://medium.com/@michaelwesthadley/modular-game-worlds-in-phaser-3-tilemaps-1-958fc7e6bbd6).

## Para jogar e experimentar

- [Catálogo de jogos](https://github.com/boidacarapreta/catalogo-de-jogos): coletânea dos jogos desenvolvidos nas disciplinas do Integrado e da Engenharia.
- [Itchio: Top Games made with Phaser](https://itch.io/games/made-with-phaser): coletânea de jogos feitos com Phaser 3 na plataforma de jogos _indie_.

## Hospedagem no GitHub Pages e Heroku

O código do cliente, estático, está hospedado no [GitHub Pages](https://cliente.ifsc.cloud/). Já o código do servidor, de WebSocket, roda no Heroku. Esta decisão foi uma das [tarefas deste projeto](https://github.com/boidacarapreta/adcipt20221/issues/25).

### Heroku: criação do serviço

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

### Heroku: manutenção de um serviço já criado

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
