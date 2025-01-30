CREATE TABLE authors (
id SERIAL PRIMARY KEY,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
image VARCHAR(255),
birth_date DATE,
bio VARCHAR,
long FLOAT,
lat FLOAT
);

CREATE TABLE articles (
id SERIAL PRIMARY KEY,
title VARCHAR(255) NOT NULL,
summary VARCHAR(255),
subtitle VARCHAR(255),
text VARCHAR NOT NULL,
image VARCHAR(255),
authorid INTEGER NOT NULL,
tags VARCHAR(255),
publishedDate DATE,
FOREIGN KEY (authorid) REFERENCES authors(id)
);

CREATE TABLE tags (id SERIAL PRIMARY KEY, name VARCHAR(50)
);
