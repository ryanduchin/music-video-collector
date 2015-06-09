# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique


## Playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users)
name        | string    | not null

## ChannelPosts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
playlist_id  | integer   | not null
post_id     | integer   | not null, foreign key (references posts)


## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
title       | string    | not null
artist      | string    |
description | string    |
album       | string    | optional
year        | string    | optional
staff_pick  | boolean   | optional extra feature


## followings/subscriptions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users)
followed_id | integer   | not null, foreign key (references users)
// if playlist_id is null, the 'following' refers to the user
playlist_id  | integer   | foreign key (references playlists)


## Likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts)
user_id     | integer   | not null, foreign key (references users)



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
