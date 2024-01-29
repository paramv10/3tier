// backend/schema.sql

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(255)
);

INSERT INTO messages (message) VALUES ('Hello World!');