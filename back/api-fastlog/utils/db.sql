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


INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('ART', 120.50, 'ms', 'API Response Time', '2023-11-24 10:00:00', '/api/v1/search', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('ART', 135.80, 'ms', 'API Response Time', '2023-11-24 11:00:00', '/api/v1/search', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('ART', 142.30, 'ms', 'API Response Time', '2023-11-24 12:00:00', '/api/v1/search', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('ART', 112.75, 'ms', 'API Response Time', '2023-11-24 13:00:00', '/api/v1/search', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('ART', 98.60, 'ms', 'API Response Time', '2023-11-24 14:00:00', '/api/v1/search', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('RTD', 50, 'ms', 'Page Load Distribution', '2023-11-24 10:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('RTD', 80, 'ms', 'Page Load Distribution', '2023-11-24 11:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('RTD', 150, 'ms', 'Page Load Distribution', '2023-11-24 12:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('RTD', 200, 'ms', 'Page Load Distribution', '2023-11-24 13:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('RTD', 350, 'ms', 'Page Load Distribution', '2023-11-24 14:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('HRT', 120, 'ms', 'Response Time by Hour', '2023-11-24 00:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('HRT', 110, 'ms', 'Response Time by Hour', '2023-11-24 01:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('HRT', 95, 'ms', 'Response Time by Hour', '2023-11-24 02:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('HRT', 125, 'ms', 'Response Time by Hour', '2023-11-24 03:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('HRT', 140, 'ms', 'Response Time by Hour', '2023-11-24 04:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('LP', 600, 'ms', 'Peak Latency', '2023-11-24 00:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('LP', 650, 'ms', 'Peak Latency', '2023-11-24 01:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('LP', 700, 'ms', 'Peak Latency', '2023-11-24 02:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('LP', 800, 'ms', 'Peak Latency', '2023-11-24 03:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);

INSERT INTO performance_metrics (name, valor, unit, category, timestamp, page, user_agent, created_at)
VALUES
('LP', 750, 'ms', 'Peak Latency', '2023-11-24 04:00:00', '/home', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36', CURRENT_TIMESTAMP);
