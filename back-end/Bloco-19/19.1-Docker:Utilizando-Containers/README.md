O que é Docker 

Pega imagem 

Comandos:

Criar e rodar um contêiner
Criar conteiner e rodar em seguida - docker container run <parâmetros> <imagem>:<tag>
O parâmetro --name define um <nome-da-sua-escolha> para aquele contêiner - docker container run --name <nome-da-sua-escolha> <imagem>:<tag>
Modo 'Cleanup': O parâmetro --rm deve garantir que o contêiner seja removido ao final da execução (útil para testar imagens sem ficar acumulando contêiners novos): - docker container run --rm <imagem>:<tag>
O parâmetro -d (de --detach, desacoplado em português) rodará esse contêiner em segundo plano¹:
docker container run -d <imagem>:<tag>
Abreviação do comando docker container run - docker run <parâmetros> <imagem>:<tag>

Criar um contêiner sem executá-lo
Cria um contêiner com a imagem de referência, mas não o executa imediatamente - docker container create <parâmetros> <imagem>:<tag>
 parâmetro -it nesse contexto, deve garantir que, ao iniciar o contêiner, ele se mantenha ativo e disponha de um terminal de acesso - docker container create -it <imagem>:<tag>
 (Comando antigo) Abreviação do comando docker container create - docker create <parâmetros> <imagem>:<tag>

 Listar contêiners
 Lista (ls, list em inglês) todos os contêiners ativos - docker container ls
 Lista todos os contêiners ativos e inativos - docker container ls -a
 Lista o último contêiner criado independente do seu estado - docker container ls -l
 (Comando antigo) Abreviação do comando docker container ls (que também pode ser chamado como docker container ps - docker ps <parâmetro>

 Iniciar, reiniciar, pausar, resumir e parar um contêiner
 Inicia³ um contêiner usando referências de sua identificação única (campo CONTAINER ID, parcialmente ou inteiro), ou pelo nome (campo NAMES) que foi definido - docker container start <CONTAINER ID || NAMES>
 Reinicia um contêiner usando as referências citadas anteriormente - docker container restart <CONTAINER ID || NAMES>
 Pausa um contêiner usando as referências citadas anteriormente - docker container pause <CONTAINER ID || NAMES>
 Tira um contêiner do modo de pausa usando as referências citadas anteriormente - docker container unpause <CONTAINER ID || NAMES>
 Encerra um contêiner usando as referências citadas anteriormente - docker container stop <CONTAINER ID || NAMES>
 (Comando antigo) Abreviações para os comandos anteriores - docker <start || restart || pause || unpause || stop> <CONTAINER ID || NAMES>

 Retomando o acesso a um contêiner interativo rodando em segundo plano
Caso você tenha iniciado um contêiner em segundo plano utilizando -dit, você pode acessar esse contêiner rodando o comando attach - docker container attach <CONTAINER ID || NAMES>
Abreviação do comando

Excluindo contêiners específicos
Se o contêiner não estiver ativo, esse comando deve removê-lo - docker container rm <CONTAINER ID || NAMES>
Se o contêiner estiver ativo, você deve passar o parâmetro -f (forçar) para parar sua execução e depois efetuar a remoção - docker container rm -f <CONTAINER ID || NAMES>
(Comando antigo) Abreviação do comando docker container rm - docker rm <CONTAINER ID || NAMES>

Limpando contêiners que não estão sendo utilizados
docker container prune
docker system prune -a --volumes
