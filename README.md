<img align="center" src="./public/toolkit_readme_capa.png" alt="Blue background with a demonstration of the web view in a notebook and a desktop computer">

# LCGBR Toolkit
Aplicação Web para validar experiências do Adobe Target

<br />

# Frontend

## Descrição
Este projeto é uma aplicação React que visa facilitar o processo de QA ao trabalhar com o Adobe Target. Apresentando os dados que a Adobe disponibiliza via API de forma visual e amigável para o usuário.

Uma das principais funcionalidades é a renderização das experiências oferecidas pelo Adobe Target, permitindo que o usuário visualize facilmente todo o conteúdo do JSON que compõe essas experiências. Isso é feito de maneira organizada e legível, proporcionando uma compreensão clara das atividades e ofertas disponíveis.

Além disso, possui a funcionalidade de selecionar um espaço específico, o que permite ao usuário visualizar não apenas a atividade live desse espaço, mas também todas as atividades agendadas associadas a ele. Isso simplifica significativamente o processo de QA do trabalho operacional realizado no Adobe Target, fornecendo uma interface intuitiva e eficiente para navegar e revisar todas as experiências em um ambiente controlado.

Em resumo, este projeto oferece uma ferramenta que torna mais fácil e eficiente o processo de avaliação e validação das experiências criadas no Adobe Target.

## Tecnologias
O frontend deste projeto foi desenvolvido utilizando:

- `React`: Uma biblioteca `JavaScript` de código aberto para criar interfaces de usuário, que permite o desenvolvimento de aplicações web escaláveis e reativas.
- `Styled-Components`: Uma biblioteca que permite escrever estilos `CSS` de forma mais dinâmica e modular, utilizando JavaScript para estilizar componentes React.

Além disso, foram utilizadas as seguintes dependências de desenvolvimento:
- `Eslint`: Ferramenta de linting para manter um código JavaScript consistente e de alta qualidade.
- `Vite`: Uma ferramenta de construção de aplicações web rápida e minimalista que utiliza ESM (ECMAScript Modules) nativo para desenvolvimento de frontend.

Essas tecnologias foram escolhidas para proporcionar uma experiência de desenvolvimento moderna, eficiente e escalável para o projeto.

## Iniciando
1. Clone o repositório
2. Instale as dependências, com `npm i`
3. Inicie o servidor com `npm run dev`
>Aviso: O frontend estará disponível na porta **5173**. Certifique-se de acessar esta porta para visualizar a aplicação.

---

# Backend
[Repositório do backend do projeto](https://github.com/marcelo-mls/banco-pan-qa-target-api)

## Descrição
Este projeto é uma aplicação `Node.js` com `Express` que interage com as APIs da Adobe.

Ele realiza requisições HTTP para obter informações sobre atividades, ofertas e audiências dentro do ambiente do Adobe Target. Posteriormente, ele processa, manipula e organiza os dados recebidos, mesclando, ordenando e refinando os resultados conforme necessário. Esses dados são então disponibilizados de forma mais organizada e estruturada através de uma outra API HTTP para consumo externo.

Em suma, o projeto atua como uma ponte entre as APIs do Adobe Target e outros sistemas, entregando informações de maneira mais acessível e organizada.

## Tecnologias
Este projeto foi desenvolvido utilizando `Node.js` juntamente com as seguintes tecnologias e bibliotecas:

- `Express`: Utilizado como framework web para criar e gerenciar as rotas da API, facilitando o desenvolvimento de aplicativos web e APIs RESTful.
- `Cors`: Usado para habilitar o controle de acesso HTTP, permitindo que este aplicativo web seja acessado por outros domínios.
- `Dotenv`: Utilizado para carregar variáveis de ambiente a partir de um arquivo .env, facilitando a configuração de informações sensíveis, como chaves de acesso e segredos do cliente.

Além disso, foram utilizadas as seguintes dependências de desenvolvimento:

- `Nodemon`: Ferramenta de desenvolvimento usada para monitorar as alterações nos arquivos do projeto e reiniciar automaticamente o servidor quando necessário durante o desenvolvimento.
- `Eslint`: Utilizado como uma ferramenta de linting para manter um código JavaScript consistente e de alta qualidade.

Essas tecnologias e bibliotecas foram escolhidas para oferecer uma base sólida e eficiente para o desenvolvimento da aplicação, garantindo desempenho e facilidade de manutenção.

## Iniciando
1. Clone o repositório
2. Instale as dependências, com `npm i`
4. Informe as variáveis de ambiente
3. Inicie o servidor com `npm run dev`
>Aviso: O backend estará disponível na porta **3001**. Certifique-se de acessar esta porta para visualizar a aplicação.

## Variáveis de Ambiente
Importante lembrar de criar um arquivo `.env` e preencher com as variáveis de ambiente conforme indicado no arquivo `.env.example`

## Rotas
> Todas as rotas retornam JSON.
> Em caso de sucesso, o status de resposta é 200 (OK).
> Lembre-se de informar os parâmetros adequados

### Atividades
- `GET`: /activities/
>Retorna uma lista de todas as atividades.
- `GET`: /activities/:activityId
>Retorna os detalhes de uma atividade específica com base no seu ID.

### Audiências
- `GET`: /audiences/
>Retorna uma lista de todas as audiências.
- `GET`: /audiences/:audienceId
>Retorna os detalhes de uma audiência específica com base no seu ID.

### Ofertas
- `GET`: /offers/:offerId
>Retorna os detalhes de uma oferta específica com base no seu ID.

### Espaços
- `GET`: /space/clean/:spaceName
>Retorna todo o conteúdo de um espaço, incluindo atividades, ofertas e audiências.
