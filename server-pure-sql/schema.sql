CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id integer null auto_increment default null, 
  message varchar(500) null default null, 
  timeCreated datetime(6) null default null,
  userId integer not null default -1,
  roomId integer not null default -1,
  primary key (id)
);
/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id integer null auto_increment default null, 
  username char(30) not null default 'Anonymous', 
  primary key (id),
  unique key ix_name (username)
);


CREATE TABLE rooms (
  id integer null auto_increment default null, 
  roomname char(30) not null default 'All', 
  primary key (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

