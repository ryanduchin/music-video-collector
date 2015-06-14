u1 = User.create!(username: 'ryanduchin', password: 'asdfasdf')
u2 = User.create!(username: 'asdf', password: 'asdfasdf')

c1 = u1.playlists.create!(name: 'House')
c2 = u1.playlists.create!(name: 'Trance')
c3 = u1.playlists.create!(name: 'Techno')
c4 = u2.playlists.create!(name: 'Pop')



p2 = u1.posts.create!(title: 'Peace of Mind', url: 'https://www.youtube.com/watch?v=eilZug1R4Es', artist: 'Above & Beyond')
p3 = u1.posts.create!(title: 'Melba', url: 'https://www.youtube.com/watch?v=QYvZ8TUyn9w', artist: 'Sunny Lax')
p4 = u1.posts.create!(title: 'Ruby', url: 'https://www.youtube.com/watch?v=LH_15HVH5Yc', artist: 'Cirez D')
p5 = u1.posts.create!(title: 'Greyhound', url: 'https://vimeo.com/75755258', artist: 'Swedish House Mafia')
p1 = u1.posts.create!(title: 'Generate', url: 'http://www.vevo.com/watch/eric-prydz/generate/GBUV71500138', artist: 'Eric Prydz', staff: true)
p6 = u1.posts.create(title: 'Monument', url: 'https://www.youtube.com/watch?v=6c-RbGZBnBI', artist: 'Royskopp & Robyn')
p7 = u1.posts.create(title: 'Dancing On My Own', url: 'https://www.youtube.com/watch?v=SW05tcG3Fgw', artist: 'Robyn', staff: true)
p8 = u1.posts.create(title: 'Chasing Time', url: 'https://www.youtube.com/watch?v=jtTjzDTpx8o', artist: 'Azelia Banks')



j2 = PlaylistPost.create!(playlist_id: c1.id, post_id: p2.id)
j3 = PlaylistPost.create!(playlist_id: c2.id, post_id: p2.id)
j4 = PlaylistPost.create!(playlist_id: c2.id, post_id: p3.id)
j5 = PlaylistPost.create!(playlist_id: c3.id, post_id: p4.id)
j1 = PlaylistPost.create!(playlist_id: c1.id, post_id: p1.id)
j6 = PlaylistPost.create!(playlist_id: c1.id, post_id: p5.id)
j7 = PlaylistPost.create!(playlist_id: c4.id, post_id: p6.id)
j8 = PlaylistPost.create!(playlist_id: c4.id, post_id: p7.id)
j9 = PlaylistPost.create!(playlist_id: c4.id, post_id: p8.id)

# user 1 follows user 2
f1 = Follow.create!(follower_id: 1, followable_id: 2, followable_type: "User")
f2 = Follow.create!(follower_id: 2, followable_id: 1, followable_type: "Playlist")
f3 = Follow.create!(follower_id: 1, followable_id: 2, followable_type: "Playlist")
f4 = Follow.create!(follower_id: 1, followable_id: 3, followable_type: "Playlist")
