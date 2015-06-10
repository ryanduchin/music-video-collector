# Phase 2: Viewing Playlists and Posts

## Rails
### Models
PlaylistPosts


### Controllers
Api::PlaylistsController (create, destroy, index, show)
Api::PostsController (create, destroy, show, update, index)

### Views
* playlists/show.json.jbuilder
* posts/show.json.builder

## Backbone
### Models
* Playlist (parses nested `posts` association)
* Post

### Collections
* Playlists
* Posts

### Views
* navbar
* ChannelShow
* PostShow
* Feed homepage

## Router
* Router

## Gems/Libraries
