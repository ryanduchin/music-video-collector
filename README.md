# Music Video Collector App

Direct link: [music-video-collector.com](http://music-video-collector.com)

Heroku link: [music-video-collector.herokuapp.com](http://music-video-collector.herokuapp.com)


## App Description & Features
Music Collector is an app built on Rails and Backbone.
Primary focus of the site is displaying music videos embedded from Youtube,
  Vimeo, and Vevo, by user-submitted URLs.

Site Features:
- Watch videos
- Like videos
- Create playlists
- Create videos (by entering links) ('posts')
- View a collection of all your liked videos
- Follow other users or playlists
- View a feed of posts from your followed users and playlists
- Explore other user profiles
- User profiles includes horizontal scrolling of their posts and playlists
- Add and remove posts to playlists
- Guest sign-in
- View top staff picks
- Feed option: top liked videos (across entire site)
- add 'add-to-playlist' button onto thumbnails
- Site shows thumbnail index views of videos

- Post thumbnails are fetched from the source
- User and Playlist thumbnails are fetched from a video in the model's posts
- Guest-account login feature

### Potentail future features
- link to user show page from post show page
- Advanced video views - cinema view(background dark)
- Index views have an alternate mode - render videos instead of thumbnails
    ability to play videos directly from index view
- Search for users/playlists/posts by any fields
- Button to watch next video in a playlist/view from the video show page
- FriendlyID for user (and post/playlist) names
- Kaminari scrolling
- Nested comments for videos



## Design Docs
* [View Wireframes][views] ./docs/wireframes/#
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Blog Creation (~1 day)
[Details][phase-one]

### Phase 2: Viewing Channels and Posts (~1 days)
[Details][phase-two]

### Phase 3: Youtube API + Vimeo API (~2 days)
[Details][phase-three]

### Phase 3.5: Feeds, Users (1 day)
[Details][phase-three]

### Phase 4: Liking Videos and Channels (~1 days)
[Details][phase-four]

### Phase 5: User Views (~2 days)
[Details][phase-five]

### Phase 6: Search and Explore (~2 days)
[Details][phase-six]

### Phase 7: Advanced Views (~2 days)
[Details][phase-seven]




[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
