Aula 20.4 - Manipulando Tabelas

INSERT - Insere dado na tabela
INTO - Seleciona a tabela a ser inserida os dados
VALUES - Valores a serem inseridos na tabela
IGNORE - ignora linhas existentes

Ex: INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');

Ex2: INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');

Ex3: INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');

-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT * FROM pessoas;

UPDATE - Atualiza uma linha que já tenha valor existente

Ex: UPDATE sakila.staff
SET first_name = 'Rannveig'
WHERE first_name = 'Ravein';

Ex2: UPDATE sakila.staff
SET first_name = 'Rannveig', last_name = 'Jordan'
WHERE staff_id = 4;

