DROP TABLE IF EXISTS Operation CASCADE;
DROP TABLE IF EXISTS Vet CASCADE;
DROP TABLE IF EXISTS AddressVet CASCADE;
DROP TABLE IF EXISTS AddressVetPN CASCADE;
DROP TABLE IF EXISTS Reward CASCADE;
DROP TABLE IF EXISTS Sighting CASCADE;
DROP TABLE IF EXISTS Sheltered CASCADE;
DROP TABLE IF EXISTS Found CASCADE;
DROP TABLE IF EXISTS Lost CASCADE;
DROP TABLE IF EXISTS Pet CASCADE;
DROP TABLE IF EXISTS PetType CASCADE;
DROP TABLE IF EXISTS Adoption CASCADE;
DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS AddressUserPN CASCADE;
DROP TABLE IF EXISTS AddressUserPC CASCADE;
DROP TABLE IF EXISTS Campus CASCADE;
DROP TABLE IF EXISTS Shelter CASCADE;



CREATE TABLE Shelter
(
agencyName varchar(100),
CONSTRAINT an PRIMARY KEY (agencyName)
);

INSERT INTO Shelter(agencyName) VALUES ('petsmart');
INSERT INTO Shelter(agencyName) VALUES ('animal shelter');
INSERT INTO Shelter(agencyName) VALUES ('welfare shelter');
INSERT INTO Shelter(agencyName) VALUES ('spca');
INSERT INTO Shelter(agencyName) VALUES ('RAPS cat sanctuary');
INSERT INTO Shelter(agencyName) VALUES ('vancouver pound');


INSERT INTO Shelter(agencyName) VALUES ('haven');
INSERT INTO Shelter(agencyName) VALUES ('hart');
INSERT INTO Shelter(agencyName) VALUES ('bamb');
INSERT INTO Shelter(agencyName) VALUES ('yonda');
INSERT INTO Shelter(agencyName) VALUES ('hulu');
INSERT INTO Shelter(agencyName) VALUES ('prevention');



CREATE TABLE Campus
(
postalCode varchar(6),
agencyName varchar(100),
phoneNo bigint,
CONSTRAINT apc PRIMARY KEY (agencyName, postalCode),
CONSTRAINT aname FOREIGN KEY (agencyName) REFERENCES Shelter (agencyName)
ON DELETE CASCADE
);

INSERT INTO Campus(postalCode, agencyName, phoneNo) VALUES ('V5B2P9', 'petsmart', 6045555555);
INSERT INTO Campus(postalCode, agencyName, phoneNo) VALUES ('V9Y2K3', 'animal shelter', 604444444);
INSERT INTO Campus(postalCode, agencyName, phoneNo) VALUES ('V9Y2A3', 'welfare shelter', 604333333);
INSERT INTO Campus(postalCode, agencyName, phoneNo) VALUES ('V9P2X4', 'spca', 604222222);
INSERT INTO Campus(postalCode, agencyName, phoneNo) VALUES ('V8U2W2', 'RAPS cat sanctuary', 604111111);
INSERT INTO Campus(postalCode, agencyName, phoneNo) VALUES ('V9Y2B3', 'vancouver pound', 604666666);

INSERT INTO Campus(postalCode, agencyName, phoneNo) VALUES ('V5B2P8', 'haven', 6045555554);
INSERT INTO Campus(postalCode, agencyName, phoneNo) VALUES ('V9Y2K2', 'hart', 604444443);
INSERT INTO Campus(postalCode, agencyName, phoneNo) VALUES ('V9Y2A2', 'bamb', 604333332);
INSERT INTO Campus(postalCode, agencyName, phoneNo) VALUES ('V9P2X3', 'yonda', 604222221);
INSERT INTO Campus(postalCode, agencyName, phoneNo) VALUES ('V8U2W1', 'hulu', 604111110);
INSERT INTO Campus(postalCode, agencyName, phoneNo) VALUES ('V9Y2B4', 'prevention', 604666665);



CREATE TABLE AddressUserPC 
(
postalCode varchar(6),
city varchar(20),
province varchar(20),
country varchar(20),
PRIMARY KEY (postalCode)
);

INSERT INTO AddressUserPC(postalCode, city, province, country) VALUES ('V8Y5T0', 'vancouver', 'BC', 'Canada');
INSERT INTO AddressUserPC(postalCode, city, province, country) VALUES ('V8Y5T1', 'vancouver', 'BC', 'Canada');
INSERT INTO AddressUserPC(postalCode, city, province, country) VALUES ('V8Y5T2', 'vancouver', 'BC', 'Canada');
INSERT INTO AddressUserPC(postalCode, city, province, country) VALUES ('V8Y5T3', 'vancouver', 'BC', 'Canada');
INSERT INTO AddressUserPC(postalCode, city, province, country) VALUES ('V8Y5T4', 'vancouver', 'BC', 'Canada');
INSERT INTO AddressUserPC(postalCode, city, province, country) VALUES ('V8Y5T5', 'vancouver', 'BC', 'Canada');

INSERT INTO AddressUserPC(postalCode, city, province, country) VALUES ('V8Y5T6', 'burnaby', 'BC', 'Canada');
INSERT INTO AddressUserPC(postalCode, city, province, country) VALUES ('V8Y5T7', 'burnaby', 'BC', 'Canada');
INSERT INTO AddressUserPC(postalCode, city, province, country) VALUES ('V8Y5T8', 'burnaby', 'BC', 'Canada');
INSERT INTO AddressUserPC(postalCode, city, province, country) VALUES ('V8Y5T9', 'burnaby', 'BC', 'Canada');
INSERT INTO AddressUserPC(postalCode, city, province, country) VALUES ('V8Y1T0', 'burnaby', 'BC', 'Canada');

CREATE TABLE AddressUserPN
(
phoneNo bigint,
city varchar(20),
province varchar(20),
country varchar(20),
PRIMARY KEY (phoneNo)
);

INSERT INTO AddressUserPN(phoneNo, city, province, country) VALUES (7780000000, 'vancouver', 'BC', 'Canada');
INSERT INTO AddressUserPN(phoneNo, city, province, country) VALUES (7780000001, 'vancouver', 'BC', 'Canada');
INSERT INTO AddressUserPN(phoneNo, city, province, country) VALUES (7780000002, 'vancouver', 'BC', 'Canada');
INSERT INTO AddressUserPN(phoneNo, city, province, country) VALUES (7780000003, 'vancouver', 'BC', 'Canada');
INSERT INTO AddressUserPN(phoneNo, city, province, country) VALUES (7780000004, 'vancouver', 'BC', 'Canada');
INSERT INTO AddressUserPN(phoneNo, city, province, country) VALUES (7780000005, 'vancouver', 'BC', 'Canada');

INSERT INTO AddressUserPN(phoneNo, city, province, country) VALUES (7780000006, 'burnaby', 'BC', 'Canada');
INSERT INTO AddressUserPN(phoneNo, city, province, country) VALUES (7780000007, 'burnaby', 'BC', 'Canada');
INSERT INTO AddressUserPN(phoneNo, city, province, country) VALUES (7780000008, 'burnaby', 'BC', 'Canada');
INSERT INTO AddressUserPN(phoneNo, city, province, country) VALUES (7780000009, 'burnaby', 'BC', 'Canada');
INSERT INTO AddressUserPN(phoneNo, city, province, country) VALUES (7780000010, 'burnaby', 'BC', 'Canada');


CREATE TABLE Users
(
userid SERIAL,
username varchar(20),
phoneNo bigint,
password varchar(20),
postalCode varchar(6),
emailAddress varchar(64),
CONSTRAINT uuid PRIMARY KEY (userid),
CONSTRAINT postalco FOREIGN KEY(postalCode) REFERENCES AddressUserPC (postalCode),
CONSTRAINT phoneno FOREIGN KEY(phoneNo) REFERENCES AddressUserPN (phoneNo)
);

INSERT INTO Users(username,phoneNo,password,postalCode,emailAddress) VALUES ('Tommy',7780000000,'qwerty','V8Y5T0','tommy@hotmail.com');
INSERT INTO Users(username,phoneNo,password,postalCode,emailAddress) VALUES ('Samantha',7780000001,'qwertu','V8Y5T1','samantha@hotmail.com');
INSERT INTO Users(username,phoneNo,password,postalCode,emailAddress) VALUES ('Sam',7780000002,'qwerti','V8Y5T2','sam@hotmail.com');
INSERT INTO Users(username,phoneNo,password,postalCode,emailAddress) VALUES ('Dean',7780000003,'qwerto','V8Y5T3','dean@hotmail.com');
INSERT INTO Users(username,phoneNo,password,postalCode,emailAddress) VALUES ('Bob',7780000004,'qwertp','V8Y5T4','bob@hotmail.com');
INSERT INTO Users(username,phoneNo,password,postalCode,emailAddress) VALUES ('Milly',7780000005,'qwerta','V8Y5T5','milly@hotmail.com');

INSERT INTO Users(username,phoneNo,password,postalCode,emailAddress) VALUES ('Blah',7780000006,'qwerts','V8Y5T6','blah@hotmail.com');
INSERT INTO Users(username,phoneNo,password,postalCode,emailAddress) VALUES ('Dennis',7780000007,'qwertd','V8Y5T7','dennis@hotmail.com');
INSERT INTO Users(username,phoneNo,password,postalCode,emailAddress) VALUES ('Kim',7780000008,'qwertf','V8Y5T8','kim@hotmail.com');
INSERT INTO Users(username,phoneNo,password,postalCode,emailAddress) VALUES ('Crystal',7780000009,'qwertg','V8Y5T9','crystal@hotmail.com');
INSERT INTO Users(username,phoneNo,password,postalCode,emailAddress) VALUES ('Jason',7780000010,'qwerth','V8Y1T0','jason@hotmail.com');


CREATE TABLE Adoption
(
tid SERIAL,
cardNo bigint,
amount decimal(19, 2),
date date,
uid integer NOT NULL,
pid integer NOT NULL,
acceptance boolean,
CONSTRAINT tid PRIMARY KEY (tid),
CONSTRAINT uid FOREIGN KEY (uid) REFERENCES Users(userid)
);

INSERT INTO Adoption(tid, cardNo, amount, date, uid, pid, acceptance) VALUES (01,12345678, 100.50, '2023-12-09', 02, 02, TRUE);
INSERT INTO Adoption(tid, cardNo, amount, date, uid, pid, acceptance) VALUES (02,22345678, 200.50, '2025-12-09', 03, 03, TRUE);
INSERT INTO Adoption(tid, cardNo, amount, date, uid, pid, acceptance) VALUES (03,32345678, 5.50, '2019-12-09', 04, 04, FALSE);
INSERT INTO Adoption(tid, cardNo, amount, date, uid, pid, acceptance) VALUES (04,42345678, 300.50, '2021-12-09', 05, 05, TRUE);

CREATE TABLE PetType
(
breed varchar(20),
animalType varchar(16),
PRIMARY KEY (breed)
);

INSERT INTO PetType(breed, animalType) VALUES ('chihuahua', 'dog');
INSERT INTO PetType(breed, animalType) VALUES ('corgi', 'dog');
INSERT INTO PetType(breed, animalType) VALUES ('pug', 'dog');
INSERT INTO PetType(breed, animalType) VALUES ('husky', 'dog');
INSERT INTO PetType(breed, animalType) VALUES ('golden retriever', 'dog');
INSERT INTO PetType(breed, animalType) VALUES ('bulldog', 'dog');

INSERT INTO PetType(breed, animalType) VALUES ('ragdoll', 'cat');
INSERT INTO PetType(breed, animalType) VALUES ('persian cat', 'cat');
INSERT INTO PetType(breed, animalType) VALUES ('russian blue', 'cat');
INSERT INTO PetType(breed, animalType) VALUES ('scottish fold', 'cat');
INSERT INTO PetType(breed, animalType) VALUES ('birman', 'cat');
INSERT INTO PetType(breed, animalType) VALUES ('bengal cat', 'cat');


CREATE TABLE Pet
(
pid SERIAL,
uid integer,
name varchar(10),
sex varchar(1),
birthDate date,
regDate date,
breed varchar(20),
imageURL varchar(100),
CONSTRAINT pet_pkey PRIMARY KEY (pid),
CONSTRAINT user_uid FOREIGN KEY(uid) REFERENCES Users (userid),
CONSTRAINT pettype_breed FOREIGN KEY(breed) REFERENCES PetType (breed)
ON DELETE CASCADE
);

INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (1, 'Sam', 'M', '2000-01-01', '2003-01-01', 'corgi', 'petimage1');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (2, 'Mud', 'M', '2005-01-01', '2009-01-01', 'chihuahua', 'petimage2');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (3, 'Hoba', 'F', '2010-01-01', '2015-01-01', 'husky', 'petimage3');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (4, 'Duck', 'M', '2002-01-01', '2003-01-01', 'bulldog', 'petimage1');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (5, 'Uidy', 'M', '2004-01-01', '2009-01-01', 'pug', 'petimage2');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (6, 'Lady', 'F', '2011-01-01', '2015-01-01', 'golden retriever', 'petimage3');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (2, 'Rover', 'M', '2003-01-01', '2009-01-01', 'pug', 'petimage4');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (1, 'Bell', 'F', '2012-01-01', '2015-01-01', 'corgi', 'petimage5');

INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (8, 'Rolla', 'M', '2001-01-01', '2003-01-01', 'ragdoll', 'petimage6');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (8, 'Bella', 'M', '2001-01-01', '2009-01-01', 'persian cat', 'petimage7');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (9, 'Stella', 'F', '2002-01-01', '2015-01-01', 'russian blue', 'petimage8');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (10, 'Eggy', 'M', '2002-02-01', '2003-01-01', 'scottish fold', 'petimage9');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (11, 'Igyo', 'M', '2004-02-01', '2009-01-01', 'birman', 'petimage10');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (9, 'Wow', 'F', '2010-02-01', '2015-01-01', 'bengal cat', 'petimage11');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (8, 'Monk', 'M', '2003-09-01', '2009-01-01', 'birman', 'petimage12');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (9, 'Casca', 'F', '2012-10-01', '2015-01-01', 'ragdoll', 'petimage13');
INSERT INTO Pet(uid,name,sex,birthDate,regDate,breed,imageURL) VALUES (9, 'Monny', 'F', '2012-10-01', '2015-01-01', 'ragdoll', 'petimage13');


CREATE TABLE Lost
(
pid integer NOT NULL,
lostDate date,
lostTime time,
lostLat FLOAT,
lostLong FLOAT,
PRIMARY KEY (pid),
CONSTRAINT lostpid FOREIGN KEY (pid) REFERENCES Pet (pid)
ON DELETE CASCADE
);

INSERT INTO Lost(pid, lostDate,lostTime,lostLat,lostLong) VALUES (1, '2018-07-20','12:25:05', 14.234, 15.234242);
INSERT INTO Lost(pid, lostDate,lostTime,lostLat,lostLong) VALUES (2, '2018-07-21','2:25:04', 10.234, 9.234242);
INSERT INTO Lost(pid, lostDate,lostTime,lostLat,lostLong) VALUES (3, '2018-07-22','3:25:09', 27.234, 13.234242);
INSERT INTO Lost(pid, lostDate,lostTime,lostLat,lostLong) VALUES (4, '2018-07-21','2:25:04', 10.234, 9.234242);
INSERT INTO Lost(pid, lostDate,lostTime,lostLat,lostLong) VALUES (5, '2018-07-22','3:25:09', 27.234, 13.234242);

INSERT INTO Lost(pid, lostDate,lostTime,lostLat,lostLong) VALUES (6, '2017-05-22','3:25:09', 27.234, 13.234242);
INSERT INTO Lost(pid, lostDate,lostTime,lostLat,lostLong) VALUES (8, '2016-07-21','2:25:04', 11.234, 10.234242);
INSERT INTO Lost(pid, lostDate,lostTime,lostLat,lostLong) VALUES (10, '2018-02-22','3:25:09', 25.234, 14.234242);
CREATE TABLE Found
(
pid integer NOT NULL,
foundDate DATE,
foundLat FLOAT,
foundLong FLOAT,
foundTime TIME,
status varchar(10),
PRIMARY KEY(pid),
CONSTRAINT foundpid FOREIGN KEY(pid) REFERENCES Pet (pid)
);
INSERT INTO Found(pid, foundDate,foundLat,foundLong,foundTime) VALUES (7, '2025-12-07',16.234, 19.234242,'04:05:06');
INSERT INTO Found(pid, foundDate,foundLat,foundLong,foundTime) VALUES (9, '2020-12-06',25.234, 19.234242,'09:05:06');

INSERT INTO Found(pid, foundDate,foundLat,foundLong,foundTime) VALUES (11, '2025-12-07',16.234, 19.234242,'04:05:06');
INSERT INTO Found(pid, foundDate,foundLat,foundLong,foundTime) VALUES (12, '2020-12-06',25.234, 19.234242,'09:05:06');

INSERT INTO Found(pid, foundDate,foundLat,foundLong,foundTime) VALUES (13, '2025-12-07',16.234, 19.234242,'04:05:06');
INSERT INTO Found(pid, foundDate,foundLat,foundLong,foundTime) VALUES (14, '2020-12-06',25.234, 19.234242,'09:05:06');





CREATE TABLE Sheltered
(
pid integer NOT NULL,
agencyName varchar(20) NOT NULL,
postalCode varchar(6) NOT NULL,
tid INT,
shelteredDate DATE,
PRIMARY KEY(pid),
CONSTRAINT shelteredtid FOREIGN KEY (tid) REFERENCES Adoption (tid) ON DELETE CASCADE,
CONSTRAINT shelteredan FOREIGN KEY (agencyName) REFERENCES Shelter (agencyName),
CONSTRAINT shelteredapc FOREIGN KEY (agencyName, postalCode) REFERENCES Campus (agencyName, postalCode),
CONSTRAINT shelteredpid FOREIGN KEY (pid) REFERENCES Pet (pid) ON DELETE CASCADE 
);

INSERT INTO Sheltered(pid, agencyName, postalCode, tid, shelteredDate) VALUES (15, 'spca', 'V9P2X4', 01,'2019-05-15');
INSERT INTO Sheltered(pid, agencyName, postalCode, tid, shelteredDate) VALUES (16, 'petsmart', 'V5B2P9', 02, '2019-04-23');
INSERT INTO Sheltered(pid, agencyName, postalCode, tid, shelteredDate) VALUES (17, 'vancouver pound', 'V9Y2B3', 04, '2019-02-10');


CREATE TABLE Sighting
(
sid SERIAL,
date DATE,
time TIME,
lat FLOAT,
long FLOAT,
pid INT,
uid INT NOT NULL,
description varchar(256),
CONSTRAINT sightingid PRIMARY KEY (sid),
CONSTRAINT sightingpid FOREIGN KEY (pid) REFERENCES Lost (pid)
ON DELETE CASCADE,
CONSTRAINT sightinguid FOREIGN KEY (uid) REFERENCES Users (userid)
);

INSERT INTO Sighting(date, time, lat, long, pid, uid, description) VALUES ('2018-05-20','12:05:20', 15.2333, 29.234, 1, 1,'saw a furry black being in the bush');
INSERT INTO Sighting(date, time, lat, long, pid, uid, description) VALUES ('2018-02-10','11:05:20', 10.2333, 9.234, 1, 2,'saw a furry brown being');
INSERT INTO Sighting(date, time, lat, long, pid, uid, description) VALUES ('2019-02-20','10:05:20', 19.2333, 29.234, 3, 3,'saw a furry black being beside flowers');


INSERT INTO Sighting(date, time, lat, long, pid, uid, description) VALUES ('2015-05-20','12:05:20', 13.2333, 29.234, 4, 6,'saw something in the bush');
INSERT INTO Sighting(date, time, lat, long, pid, uid, description) VALUES ('2013-02-10','11:05:20', 12.2333, 9.234, 5, 4,'saw a furry brown being beside school');
INSERT INTO Sighting(date, time, lat, long, pid, uid, description) VALUES ('2017-02-20','10:05:20', 11.2333, 29.234, 5, 5,'saw a animal resembling the one missing');

CREATE TABLE Reward
(
tid SERIAL,
cardNo bigint,
amount DECIMAL(19, 2),
uid INT NOT NULL,
pid INT,
CONSTRAINT rtid PRIMARY KEY (tid),
CONSTRAINT ruid FOREIGN KEY (uid) REFERENCES Users (userid),
CONSTRAINT cpid FOREIGN KEY(pid) REFERENCES Pet (pid)
ON DELETE CASCADE
);

INSERT INTO Reward(cardNo, amount, uid, pid) VALUES (12345678,20.00, 01,01);
INSERT INTO Reward(cardNo, amount, uid, pid) VALUES (22345678,40.00, 02,02);
INSERT INTO Reward(cardNo, amount, uid, pid) VALUES (42345678,50.00, 03,03);



INSERT INTO Reward(cardNo, amount, uid, pid) VALUES (12345678,30.00, 04,04);
INSERT INTO Reward(cardNo, amount, uid, pid) VALUES (22345678,60.00, 05,05);
INSERT INTO Reward(cardNo, amount, uid, pid) VALUES (42345678,70.00, 06,06);
INSERT INTO Reward(cardNo, amount, uid, pid) VALUES (12345678,100.00, 01,08);
INSERT INTO Reward(cardNo, amount, uid, pid) VALUES (22345678,200.00, 08,10);

CREATE TABLE AddressVet
(
postalCode varchar(6),
city varchar(20),
province varchar(20),
country varchar(20),
PRIMARY KEY (postalCode)
);

INSERT INTO AddressVet(postalCode, city, province, country) VALUES ('V7Y2U9','Richmond','BC', 'Canada');
INSERT INTO AddressVet(postalCode, city, province, country) VALUES ('V7Y2U8','Richmond','BC', 'Canada');
INSERT INTO AddressVet(postalCode, city, province, country) VALUES ('V7Y2U7','Richmond','BC', 'Canada');
INSERT INTO AddressVet(postalCode, city, province, country) VALUES ('V7Y2U6','Richmond','BC', 'Canada');
INSERT INTO AddressVet(postalCode, city, province, country) VALUES ('V7Y2U5','Richmond','BC', 'Canada');
INSERT INTO AddressVet(postalCode, city, province, country) VALUES ('V7Y2U4','Richmond','BC', 'Canada');



CREATE TABLE AddressVetPN
(
phoneNo bigint,
city varchar(20),
province varchar(20),
country varchar(20),
PRIMARY KEY (phoneNo)
);

INSERT INTO AddressVetPN(phoneNo, city, province, country) VALUES (7789345699, 'Richmond', 'BC', 'Canada');
INSERT INTO AddressVetPN(phoneNo, city, province, country) VALUES (7789345698, 'Richmond', 'BC', 'Canada');
INSERT INTO AddressVetPN(phoneNo, city, province, country) VALUES (7789345697, 'Richmond', 'BC', 'Canada');
INSERT INTO AddressVetPN(phoneNo, city, province, country) VALUES (7789345696, 'Richmond', 'BC', 'Canada');
INSERT INTO AddressVetPN(phoneNo, city, province, country) VALUES (7789345695, 'Richmond', 'BC', 'Canada');
INSERT INTO AddressVetPN(phoneNo, city, province, country) VALUES (7789345694, 'Richmond', 'BC', 'Canada');

CREATE TABLE Vet
(
vid SERIAL,
vetName varchar(16),
phoneNo bigint,
postalCode varchar(6),
emailAddress varchar(30),
city varchar(20),
province varchar(20),
country varchar(20),
CONSTRAINT vvd PRIMARY KEY (vid),
CONSTRAINT vpc FOREIGN KEY(postalCode) REFERENCES AddressVet,
CONSTRAINT vpn FOREIGN KEY(phoneNo) REFERENCES AddressVetPN
);

INSERT INTO Vet(vetName,phoneNo, postalCode, emailAddress, city, province, country) VALUES ('Mike',7789345699, 'V7Y2U9', 'mike@hotmail.com','Richmond', 'BC', 'Canada');
INSERT INTO Vet(vetName,phoneNo, postalCode, emailAddress, city, province, country) VALUES ('Michael',7789345698, 'V7Y2U8', 'michael@hotmail.com','Richmond', 'BC', 'Canada');
INSERT INTO Vet(vetName,phoneNo, postalCode, emailAddress, city, province, country) VALUES ('Dike',7789345697, 'V7Y2U7', 'dike@hotmail.com','Richmond', 'BC', 'Canada');
INSERT INTO Vet(vetName,phoneNo, postalCode, emailAddress, city, province, country) VALUES ('Duke',7789345696, 'V7Y2U6', 'duke@hotmail.com','Richmond', 'BC', 'Canada');
INSERT INTO Vet(vetName,phoneNo, postalCode, emailAddress, city, province, country) VALUES ('Niel',7789345695, 'V7Y2U5', 'niel@hotmail.com','Richmond', 'BC', 'Canada');
INSERT INTO Vet(vetName,phoneNo, postalCode, emailAddress, city, province, country) VALUES ('Aiden',7789345694, 'V7Y2U4', 'aiden@hotmail.com','Richmond', 'BC', 'Canada');


CREATE TABLE Operation
(
oid SERIAL,
vid INT NOT NULL,
pid INT NOT NULL,
agencyName varchar(100) NOT NULL,
postalCode varchar(6) NOT NULL,
opName varchar(16),
date date,
startTime TIME,
endTime TIME,
CONSTRAINT oid PRIMARY KEY (oid),
CONSTRAINT ovid FOREIGN KEY (vid) REFERENCES Vet(vid),
CONSTRAINT opid FOREIGN KEY (pid) REFERENCES Pet(pid),
CONSTRAINT anpc FOREIGN KEY (agencyName,postalCode) REFERENCES Campus(agencyName, postalCode)
ON DELETE NO ACTION
ON UPDATE CASCADE
);

INSERT INTO Operation(vid,pid,agencyName,postalCode,opName,date,startTime,endTime) VALUES (01,01,'animal shelter','V9Y2K3','surgery1','2016-02-05','12:00:00', '1:00:00');
INSERT INTO Operation(vid,pid,agencyName,postalCode,opName,date,startTime,endTime) VALUES (02,02,'petsmart','V5B2P9','surgery2','2016-03-05','12:00:00', '1:00:00');
INSERT INTO Operation(vid,pid,agencyName,postalCode,opName,date,startTime,endTime) VALUES (03,03,'welfare shelter','V9Y2A3','surgery3','2016-04-05','12:00:00', '1:00:00');
INSERT INTO Operation(vid,pid,agencyName,postalCode,opName,date,startTime,endTime) VALUES (04,04,'spca','V9P2X4','surgery4','2016-05-05','12:00:00', '1:00:00');
INSERT INTO Operation(vid,pid,agencyName,postalCode,opName,date,startTime,endTime) VALUES (05,05,'RAPS cat sanctuary','V8U2W2','surgery5','2016-07-05','12:00:00', '1:00:00');
INSERT INTO Operation(vid,pid,agencyName,postalCode,opName,date,startTime,endTime) VALUES (06,06,'vancouver pound','V9Y2B3','surgery6','2016-09-05','12:00:00', '1:00:00');

CREATE VIEW publicinfo1 AS
SELECT u.username, p.name, p.breed, a.animaltype
FROM users u, pet p, pettype a
WHERE u.userid=p.uid AND p.breed=a.breed
