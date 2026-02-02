-- Создание таблицы для заявок с формы обратной связи
CREATE TABLE IF NOT EXISTS applications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new'
);

-- Создание индекса для быстрого поиска по дате
CREATE INDEX idx_applications_created_at ON applications(created_at DESC);

-- Создание индекса для фильтрации по статусу
CREATE INDEX idx_applications_status ON applications(status);