# Schema Information

## users (done)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique

## posts (done)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
title       | string    | not null
url         | string    | not null
artist      | string    | (add index later)
description | string    |
album       | string    | optional (add index later)
year        | string    | optional
staff_pick  | boolean   | optional extra feature

## Playlists (done)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
name        | string    | not null

## PlaylistPosts (done)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
playlist_id  | integer   | not null
post_id     | integer   | not null, foreign key (references posts)


## Likes (done)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts)
user_id     | integer   | not null, foreign key (references users)

## followings/subscriptions
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | not null, primary key
follower_id   | integer   | not null, foreign key (references users)
followed_id   | integer   | not null, foreign key (references users OR playlist)




//optional if time
## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
post_id         | integer   | not null, foreign key
author_id       | integer   | not null, foreign key (references users)
body            | text      | not null, unique


//optional bonus for search engine
## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts)
label       | string    | not null, unique
