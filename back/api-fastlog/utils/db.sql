INSERT INTO entrega (codigo_entrega, nome_entrega) VALUES
('ENT001', 'Entrega de livros'),
('ENT002', 'Entrega de eletrônicos'),
('ENT003', 'Entrega de roupas');

INSERT INTO status (descricao, tipo, entrega_id_entrega) VALUES
('Pedido criado', 'CREATE', 1),
('Em processamento', 'PROCESS', 1),
('Enviado ao transportador', 'MOVING', 1),
('A caminho do destino', 'MOVING', 1),
('Entregue', 'DELIVERED', 1);

INSERT INTO status (descricao, tipo, entrega_id_entrega) VALUES
('Pedido criado', 'CREATE', 2),
('Em processamento', 'PROCESS', 2),
('Enviado ao transportador', 'MOVING', 2),
('Pedido cancelado', 'UNDELIVERED', 2);

INSERT INTO status (descricao, tipo, entrega_id_entrega) VALUES
('Pedido criado', 'CREATE', 3),
('Em processamento', 'PROCESS', 3),
('Enviado ao transportador', 'MOVING', 3),
('A caminho do destino', 'MOVING', 3),
('Entregue', 'DELIVERED', 3);
