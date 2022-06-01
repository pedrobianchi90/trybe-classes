21.2 - Descomplicando os JOINs

O JOIN é usado para combinar registro de duas ou mais tabelas.

INNER JOIN - Retorna todos os dados em que a condição do ON for satisfeita.
Ex: SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

LEFT JOIN - Da preferencia para os dados da tabela da esquerda. Os dados da tabela da direita que não existem na esquerda, voltam nulos.

RIGHT JOIN - Da preferencia para os dados da tabela da direita. Os dados da tabela da esquerda que não existem na direita, voltam nulos.

SELF JOIN - 