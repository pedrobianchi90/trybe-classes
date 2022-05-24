20.2 - Encontrando Dados em um Banco de Dados

Queries

DDL: Data Definition Language - Lidam com o modo que dados devem existir no banco
CREATE - Cria dados
ALTER - Altera estrutura
DROP - Deleta dados
TRUNCATE - Esvazia de dentro da tabela mas mantém dentro do banco

DML: Data Manipulation Language - Lidam com manipulação de dados
SELECT - Busca dados
INSERT - Insere dados
UPDATE - Altera dados
DELETE - Exclui dados 

DCL: Data Control Language - Concedem direitos
GRANT = Concede acesso
REVOKE - Remove acessos

TCL: Transactional Control Language - Transações dentro das pesquisas
COMMIT - Muda as transações de temporárias para permanentes
ROLLBACK - Desfaz comando
SAVEPOINT - Define pontos para voltar
TRANSACTION - Define o escopo das transações

CONCAT: junta dados da tabela
Ex: SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM sakila.actor;

DISTINCT: Não exibe dados iguais

COUNT (): Mostra quantos valores temos na coluna selecionada

LIMIT: limita o número de dados retornados
Ex: SELECT * FROM sakila.rental LIMIT 10;

OFFSET: Pula um determinado número de linhas
Ex: SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;

ORDER BY: Ordena a ordem pela coluna selecionada
Ex: SELECT * FROM sakila.address
ORDER BY district ASC, address DESC;
