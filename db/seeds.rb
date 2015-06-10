u1 = User.create!(username: 'ryanduchin', password: 'asdfasdf')
u2 = User.create!(username: 'asdf', password: 'asdfasdf')

c1 = u1.playlists.create!(name: 'House')
c2 = u1.playlists.create!(name: 'Trance')
c3 = u1.playlists.create!(name: 'Techno')
c4 = u1.playlists.create!(name: 'Pop')


p1 = u1.posts.create!(title: 'GoogleSong', url: 'google.com', artist: 'Googler')
p2 = u1.posts.create!(title: 'FacebookSong', url: 'facebook.com', artist: 'Facebooker')
p3 = u1.posts.create!(title: 'YahooSong', url: 'yahoo.com', artist: 'Yahoooooer')

j1 = PlaylistPost.create!(playlist_id: c1.id, post_id: p1.id)
j2 = PlaylistPost.create!(playlist_id: c1.id, post_id: p2.id)
j3 = PlaylistPost.create!(playlist_id: c2.id, post_id: p2.id)
j4 = PlaylistPost.create!(playlist_id: c3.id, post_id: p3.id)
