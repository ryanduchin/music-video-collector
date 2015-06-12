# Video Music Collector App

[Heroku link][heroku]

[heroku]: TBD

## Minimum Viable Product
Music Collector is a clone of Vimeo/Youtube/Mozi built on Rails and Backbone.
Primary focus of the site is on posting **music videos** (or just music on youtube/vimeo)
Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

Main next courses of action:
* fix jbuilder and controllers to allow for different feeds (!!!!) (DONE)
* implement likes and following (mostly done)
    * fix unliking problem (done)
    * render unlike different than liked (!)
* get views to show what type of feed they are (how to do this without separate views?)
* add modal forms for submitting content
* sorting feeds?
* grid system for feeds

MVP:
- [x] Create accounts (sign up)
- [x] Create sessions (log in)
- [X] Watch videos!
- [ ] "Upload" Videos (=enter links)
- [X] Like Videos
- [X] View collection of all your liked videos
- [ ] View other users (and their list of liked videos)
- [ ] Explore videos

Expanding:

- [ ] Users can create channels (aka collections/playists)
- [ ] View other channels (of users) (like playlists)
- [ ] Search for videos by title, artist, (uploaded user)
- [ ] Search for users by name/username
- [ ] Feed option: Subscribe to channels AND/OR users, gets fed into your feed (your channels)
- [ ] Feed option: Top Staff picks
- [ ] Feed option: top liked videos (across entire site)
- [ ] All videos have nested comments, users can add comments
- [ ] List of top liked channels, and/or users (across whole site)
- [ ] Edit profile
- [ ] *** Advanced video views - cinema view, other fancier views (dynamic background color?)
- [ ] ** Add friends, add a feed for posts from friends.


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

### Phase 3.5: Feeds, Users
Adding in late - will add the controllers/routes in Rails for new feeds
Will create show pages for other users

[Details][phase-three]

### Phase 4: Liking Videos and Channels (~1 days)
I add the button to like videos on each subview and the video show page.
I add the your_liked_videos view.

Question: Does liking (and following) need backbone models/collections
or only views (and the rest lives in Rails). backbone model, no collection,
rest lives in rails!! see Eric's talk notes.

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


Later to-do-s
-scope of uniqueness for posts
-privacy settings for JSON rendering (playlist/post owner != current_user)
