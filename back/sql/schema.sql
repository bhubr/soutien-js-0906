CREATE DATABASE insta_clone CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE insta_clone;

CREATE TABLE user (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nickname VARCHAR(50),
  avatar_url VARCHAR(255)
);

CREATE TABLE post (
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  content TEXT,
  picture_url VARCHAR(255),
  user_id INTEGER NOT NULL
);

ALTER TABLE post ADD CONSTRAINT fk_post_user_1 FOREIGN KEY(user_id) REFERENCES user(id);

CREATE TABLE user_like_post(
  user_id INTEGER NOT NULL,
  post_id INTEGER NOT NULL
);

ALTER TABLE user_like_post ADD CONSTRAINT fk_user_post_user_1 FOREIGN KEY(user_id) REFERENCES user(id);

ALTER TABLE user_like_post ADD CONSTRAINT fk_user_post_post_1 FOREIGN KEY(post_id) REFERENCES post(id);
