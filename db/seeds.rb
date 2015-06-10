u2 = User.create!(email: 'ryanduchin@gmail.com', password: 'asdfasdf')
u2 = User.create!(email: 'asdf@gmail.com', password: 'asdfasdf')

c1 = u1.playlists.create(name: 'House')
c2 = u1.playlists.create(name: 'Trance')
c3 = u1.playlists.create(name: 'Techno')
c4 = u1.playlists.create(name: 'Pop')


p1 = u1.posts.create(title: 'GoogleSong', url: 'google.com', artist: 'Googler')
p2 = u1.posts.create(title: 'FacebookSong', url: 'facebook.com', artist: 'Facebooker')
p3 = u1.posts.create(title: 'YahooSong', url: 'yahoo.com', artist: 'Yahoooooer')
