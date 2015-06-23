# Music Video Collector App

[Heroku link][http://music-video-collector.herokuapp.com/]


## Next actions and list of questions
* guest login
* user show page follow buttons are broken because they arent distinguished between playlist and user
* custom URL
* good Readme
* finish seeding
* Database resetting? Users only see seeds + their account? heroku scheduler

## Minimum Viable Product
Music Collector is a clone of Vimeo/Youtube/Mozi built on Rails and Backbone.
Primary focus of the site is on posting **music videos** (or just music on youtube/vimeo)

Users can:
Site Functionality
- [x] Create accounts (sign up)
- [x] Create sessions (log in)
- [X] Watch videos!
- [X] "Upload" Videos (=enter links)
- [X] Like Videos
- [X] View collection of all your liked videos
- [X] View other users (and their list of liked videos) ('Explore')
- [X] Add and Remove posts to playlists
- [X] submission validation (url must be good)
- [ ] Guest sign-in
- [X] Users can create channels (aka collections/playists)
- [X] View other channels (of users) (like playlists)
- [X] Feed option: Subscribe to channels AND/OR users, gets fed into your feed (your channels)
- [X] Feed option: Top Staff picks
- [X] Feed option: top liked videos (across entire site)
- [X] add 'add-to-playlist' button onto thumbnails
- [X] link to user show page from post show page
- [ ] *** Advanced video views - cinema view(background dark)
- [ ] *** Advanced video views - INDEX ALL VIDEO RENDERS view (no images)
- [ ] Search for users/playlists/posts by any fields (if time)
- [ ] friendlyID for user (and post/playlist) names
- [ ] kaminari scrolling

Optimization:
- [X] Vevo videos cant be played in index views
- [X] re-ordering/optimizing the feeds ordered-by (user/playlist/post)
- [X] user show thumbnail size optimization

Not going to get to:
- [ ] Edit profile with tagline
- [ ] Button to watch next video in playlist
- [ ] All videos have nested comments, users can add comments
- [ ] Cookies

## Design Docs
* [View Wireframes][views] ./docs/wireframes/#
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Note on length:
* I may have to cut out the idea of channels so that users only subscribe to ONE channel
which is just the user's main channel of liked and posted videos.
* I may cut out either the search engine

### Phase 1: User Authentication, Blog Creation (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. I will create all of the necessary rails controllers.
The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Viewing Channels and Posts (~1 days)
I will add API routes to serve blog and post data as JSON, then add Backbone
models and collections that fetch data from those routes. I will create a
basic navbar. By the end of this
phase, users will be able to view both channels and videos
(currently text), all inside a single Backbone app.

[Details][phase-two]

### Phase 3: Youtube API + Vimeo API (~2 days)
I will work on getting the youtube API to work and creating a video show view.
I will also create the two subviews that have an image of the video and some
basic information.

[Details][phase-three]

### Phase 3.5: Feeds, Users (1 day)
Adding in late - will add the controllers/routes in Rails for new feeds
Will create show pages for other users

[Details][phase-three]

### Phase 4: Liking Videos and Channels (~1 days)
I add the button to like videos on each subview and the video show page.
I add the your_liked_videos view.

[Details][phase-four]


### Phase 5: User Views (~2 days)
I'll create the user profile view. I will create the other_user_view for
viewing another user. I add the ability to subscribe to channels and users.
I will add the ability to create channels in the user view.

[Details][phase-five]

### Phase 6: Search and Explore (~2 days)
I'll need to add `search` routes to both the Channels and Posts controllers. On the
Backbone side, there will be a `SearchResults` composite view has video
subviews. I also add an explore page

[Details][phase-six]

### Phase 7: Advanced Views (~2 days)
I will add the cinema view here and possibly others.
I might add the ability to change the playback speed and other possibilities
[Details][phase-seven]


[Details][phase-seven]



[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
