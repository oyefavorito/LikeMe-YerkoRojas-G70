DROP DATABASE likeme;

CREATE DATABASE likeme;

\c likeme

CREATE TABLE posts (
    id serial,
    titulo VARCHAR(25),
    img VARCHAR(1000),
    descripcion VARCHAR(255),
    likes INT
    );