# Prova  de desenvolvedor Junior CBMSE

Para concorrer a vaga o candidato terá que desenvolver uma aplicação web seguindo as recomendações abaixo.
## Sinta-se a vontade para utilizar a tecnologia que desejar. 

## Instruções da prova
 - O candidato deve fazer um **fork** desse repositório e criar sua estrutura de pastas contendo o projeto e o **schema** do banco de dados.
 - Após o projeto pronto o candidato deve fazer o *commit e push* para o seu repositório **não sendo necessário** solicitar um **pull-request**
 - O limite de entrega da prova é até as 9:30 do dia 19/10/2020.
 - Ao concluir o desafio, enviar um e-mail para francisco.azevedo@cbm.se.gov.br contendo o curriculo.
 - Prototipo como exemplo das telas: https://ninjamock.com/s/33517Gx (Não obrigatório).
 - Utilizar o SQL sugerido no projeto (Não obrigatório).

## Descrição do desafio
 O objetivo do projeto é criar uma especie de agenda, onde o usuário poderá cadastrar informações (e-mail e telefone) de outras pessoas seguindo os requisitos básicos abaixo.
 - RF01 - O usuário deve ser capaz de adicionar pessoas com seus contatos, por exemplo, email, telefone, celular.
 - RF02 - O usuário pode ser capaz de cadastrar mais de um tipo de contato (ex: e-mail, telefone, celular) para a mesma pessoa.
 - RF03 - O usuário pode cadastrar mais de um contato para o mesmo tipo.
 - RF04 - O sistema deve validar se o contato ja existe.
 - RF05 - Se o contato ja existir, exibi-lo.
 - RF06 - O usuário deve ser capaz de editar os contatos quando desejar.
 - RF07 - O usuario deve ser capaz de deletar o contato.
 - RF08 - O usuário pode visualizar todos os contatos cadastrados.
 
## Oque será avaliado?
O desafio será avaliado através dos seguintes critérios.
 - Habilidade em estilização de pagina HTML
 - Programação Orientada a Objetos
 - Código bem comentado
 - Código limpo
 - Cumprimento das funcionalidades

## Documentação
 - O código foi entregue com um arquivo de README claro de como se guiar?
 - O código possui comentários pertinentes?
 - Os commits são pequenos e consistentes?
 - As mensagens de commit são claras?

# Duvidas: jonas.nascimento@cbm.se.gov.br ou abrir uma issue


# Como rodar :
- O projeto utiliza o gerenciador de pacotes yarn, então é necessário baixar.
- Vá até o site https://nodejs.org/en/, e baixe a versão LTS do Node.js (recomendo baixar com os gerenciadores de pacotes de cada sistema operacional, no site tem o tutorial)
- Depois que dar o git clone no repositório, entre nas pastas back-end e front-end e execute o comando "yarn", assim será baixado as depêndencias necessárias.
- O projeto utilizou um container docker com a imagem do postgres, no arquivo "ormconfig.json" é onde têm as configurações para conectar ao banco.
- Depois de conectado a um banco, rode no back end o comando "yarn typeorm migration:run", que será executado as migrations do banco de dados.
- Para rodar o back-end utilize o comando "yarn dev:server" e espere a mensagém "Server subiu", e pra rodar o front-end execute o comando "yarn start"
