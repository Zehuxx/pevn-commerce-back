CREATE DATABASE pevn_commerces;

CREATE TABLE COMMERCE_TYPES(
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL
);

CREATE TABLE COMMERCE_SUB_TYPES(
	id SERIAL PRIMARY KEY,
	id_ct INTEGER NOT NULL REFERENCES COMMERCE_TYPES(id),
	name TEXT NOT NULL
);

CREATE TABLE COMMERCES(
	id SERIAL PRIMARY KEY,
	id_cst INTEGER NOT NULL REFERENCES COMMERCE_SUB_TYPES(id),
	name TEXT NOT NULL,
	owner_name TEXT NOT NULL,
	address TEXT NOT NULL,
	fundation_date DATE NOT NULL,
	createdAt DATE NOT NULL,
	updatedAt DATE NOT NULL
);

INSERT INTO commerce_types(name) VALUES ('Comida / Restaurante'), ('Hogar'), ('Construcción');
INSERT INTO commerce_sub_types(id_ct, name) VALUES (1, 'Cafeterías'), (1, 'Restaurantes'),(1, 'Heladería'), (1, 'Otros');
INSERT INTO commerce_sub_types(id_ct, name) VALUES (2, 'Muebles, Camas, Decoración'), (2, 'Electrodomésticos'), (2, 'Otros');
INSERT INTO commerce_sub_types(id_ct, name) VALUES (3, 'Ventas de Materiales de Construcción'), (3, 'Ferreterías'), (3, 'Materiales Eléctricos'), (3, 'Bombas y Agua'), (3, 'Otros');

INSERT INTO commerces(id_cst, name, owner_name, address, fundation_date, createdAt, updatedAt)
VALUES (3, 'Heladería los 3 hermanos', 'Juan Soler', 'Col. bella vista, calle 34, ave 2', '2010-05-15', '2010-05-15', '2011-04-19');
INSERT INTO commerces(id_cst, name, owner_name, address, fundation_date, createdAt, updatedAt)
VALUES (6, 'HTZ ', 'Luis Soto', 'Col. Hato de enmedio, sector 10, casa 83833', '1980-05-15', '2015-10-05', '2017-09-30');
INSERT INTO commerces(id_cst, name, owner_name, address, fundation_date, createdAt, updatedAt)
VALUES (9, 'Ferretería la barata', 'Maria Flores', 'Col. Carrizal', '1980-05-15', '2012-07-29', '2018-02-19');



