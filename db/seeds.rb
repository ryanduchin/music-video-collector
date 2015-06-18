u1 = User.create!(username: 'guest', password: 'password')
u2 = User.create!(username: 'ryanduchin', password: 'asdfasdf')
u3 = User.create!(username: 'Ken', password: 'asdfasdf2')
u4 = User.create!(username: 'Sasha', password: 'asdfasdf2')
u5 = User.create!(username: 'AleXandra', password: 'asdfasdf2')
u6 = User.create!(username: 'Carl', password: 'asdfasdf2')
u7 = User.create!(username: 'Allllan', password: 'asdfasdf2')
u7 = User.create!(username: 'Alex', password: 'password2')
u7 = User.create!(username: 'Allan', password: 'password2')
u8 = User.create!(username: 'Axer', password: 'asdfasdf2')
u9 = User.create!(username: 'Alex25', password: 'asdfasdf2')
u10 = User.create!(username: 'MrMozo', password: 'asdfasdf2')
u11 = User.create!(username: 'Steve', password: 'asdfasdf2')



c1 = u1.playlists.create!(name: 'House')
c2 = u1.playlists.create!(name: 'Trance')
c3 = u1.playlists.create!(name: 'Techno')
c4 = u2.playlists.create!(name: 'Pop')



p2 = u1.posts.create!(title: 'Peace of Mind', url: 'https://www.youtube.com/watch?v=eilZug1R4Es', artist: 'Above & Beyond', album: 'Group Therapy')
p3 = u1.posts.create!(title: 'Melba', url: 'https://www.youtube.com/watch?v=QYvZ8TUyn9w', artist: 'Sunny Lax')
p4 = u1.posts.create!(title: 'Ruby', url: 'https://www.youtube.com/watch?v=LH_15HVH5Yc', artist: 'Cirez D')
p5 = u1.posts.create!(title: 'Greyhound', url: 'https://vimeo.com/75755258', artist: 'Swedish House Mafia')
p1 = u1.posts.create!(title: 'Generate', url: 'http://www.vevo.com/watch/eric-prydz/generate/GBUV71500138', artist: 'Eric Prydz', staff: true)
p6 = u1.posts.create(title: 'Monument', url: 'https://www.youtube.com/watch?v=6c-RbGZBnBI', artist: 'Royskopp & Robyn')
p7 = u2.posts.create(title: 'Dancing On My Own', url: 'https://www.youtube.com/watch?v=SW05tcG3Fgw', artist: 'Robyn', staff: true)
p8 = u2.posts.create(title: 'Chasing Time', url: 'https://www.youtube.com/watch?v=jtTjzDTpx8o', artist: 'Azelia Banks')
p8 = u2.posts.create(title: 'We Are All We Need', url: 'https://www.youtube.com/watch?v=phXRX1p8woY', artist: 'Above & Beyond', album: 'Group Therapy')
p8 = u2.posts.create(title: 'We Are All We Need', url: 'https://www.youtube.com/watch?v=phXRX1p8woY', artist: 'Above & Beyond', album: 'Group Therapy', description: 'feat. Alex Vargas')
p8 = u2.posts.create(title: 'Sticky Fingers', url: 'https://www.youtube.com/watch?v=qbtbZUmljDI', artist: 'Above & Beyond', album: 'Group Therapy')
p8 = u2.posts.create(title: 'Hello', url: 'https://www.youtube.com/watch?v=c9thvmIOdnQ', artist: 'Above & Beyond', album: 'Group Therapy')
p8 = u2.posts.create(title: 'Sun & Moon', url: 'https://www.youtube.com/watch?v=ll5ykbAumD4', artist: 'Above & Beyond')

q1 = u3.posts.create(title: 'Sometimes I Feel So Deserted', url: 'https://www.youtube.com/watch?v=8OUqqsXVmlc', artist: 'The Chemical Brothers')
q2 = u3.posts.create(title: 'Swoon', url: 'https://www.youtube.com/watch?v=CCp_3zw-CxA', artist: 'The Chemical Brothers')
q2 = u3.posts.create(title: 'Escape Velocity', url: 'https://www.youtube.com/watch?v=efF8L9Jt_i8', artist: 'The Chemical Brothers')
q2 = u3.posts.create(title: 'Out of Control', url: 'https://www.youtube.com/watch?v=6sOpbRL8R4g', artist: 'The Chemical Brothers')
q2 = u3.posts.create(title: 'Galvanize', url: 'https://www.youtube.com/watch?v=Xu3FTEmN-eg', artist: 'The Chemical Brothers')
q2 = u3.posts.create(title: 'Hey Boy Hey Girl', url: 'https://www.youtube.com/watch?v=tpKCqp9CALQ', artist: 'The Chemical Brothers')
q2 = u3.posts.create(title: 'Do It Again', url: 'https://www.youtube.com/watch?v=UVrwzjtBHq0', artist: 'The Chemical Brothers')
q2 = u3.posts.create(title: 'Star Guitar', url: 'https://www.youtube.com/watch?v=0S43IwBF0uM', artist: 'The Chemical Brothers')
q2 = u3.posts.create(title: 'Go', url: 'https://www.youtube.com/watch?v=LO2RPDZkY88', artist: 'The Chemical Brothers')
q2 = u3.posts.create(title: 'All The Single Ladies', url: 'http://www.vevo.com/watch/beyonce/single-ladies-(put-a-ring-on-it)/USSM20803009', artist: 'Beyonce')
q2 = u3.posts.create(title: 'Run The World (Girls)', url: 'https://www.youtube.com/watch?v=VBmMU_iwe6U', artist: 'Beyonce')
q2 = u3.posts.create(title: 'We Found Love', url: 'https://www.youtube.com/watch?v=tg00YEETFzg', artist: 'Rihanna', description: 'ft. Calvin Harris')
q2 = u3.posts.create(title: 'Pour It Up', url: 'https://www.youtube.com/watch?v=ehcVomMexkY', artist: 'Rihanna')

z1 = u3.posts.create(title: 'Blame', url: 'https://www.youtube.com/watch?v=6ACl8s_tBzE', artist: 'Calvin Harris', description: 'ft. John Newman')
z1 = u3.posts.create(title: 'Summer', url: 'https://www.youtube.com/watch?v=ebXbLfLACGM', artist: 'Calvin Harris')
z1 = u3.posts.create(title: 'Wrecking Ball', url: 'https://www.youtube.com/watch?v=My2FRPA3Gf8', artist: 'Miley Cyrus')
z1 = u3.posts.create(title: '', url: '', artist: '')
z1 = u3.posts.create(title: '', url: '', artist: '')
z1 = u3.posts.create(title: '', url: '', artist: '')
z1 = u3.posts.create(title: '', url: '', artist: '')
z1 = u3.posts.create(title: '', url: '', artist: '')
z1 = u3.posts.create(title: '', url: '', artist: '')
z1 = u3.posts.create(title: '', url: '', artist: '')
z1 = u3.posts.create(title: '', url: '', artist: '')
z1 = u3.posts.create(title: '', url: '', artist: '')








y1 = u4.posts.create(title: 'Phantasm', url: 'https://vimeo.com/90796762', artist: 'Flying Lotus')
y2 = u4.posts.create(title: 'Zodiac Sh*t', url: 'https://vimeo.com/25737856', artist: 'Flying Lotus', staff: true, description: "featured on Adult Swim")
y3 = u4.posts.create(title: "You're Dead", url: 'https://vimeo.com/103317489', artist: 'Flying Lotus')
y4 = u4.posts.create(title: 'Kill Your Co-Workers', url: 'https://vimeo.com/15568767', artist: 'Flying Lotus')

//chembros


https://www.youtube.com/watch?v=qbtbZUmljDI



j3 = PlaylistPost.create!(playlist_id: c2.id, post_id: p2.id)
j4 = PlaylistPost.create!(playlist_id: c2.id, post_id: p3.id)
j5 = PlaylistPost.create!(playlist_id: c3.id, post_id: p4.id)
j1 = PlaylistPost.create!(playlist_id: c1.id, post_id: p1.id)
j6 = PlaylistPost.create!(playlist_id: c1.id, post_id: p5.id)
j2 = PlaylistPost.create!(playlist_id: c1.id, post_id: p2.id)
j7 = PlaylistPost.create!(playlist_id: c4.id, post_id: p6.id)
j8 = PlaylistPost.create!(playlist_id: c4.id, post_id: p7.id)
j9 = PlaylistPost.create!(playlist_id: c4.id, post_id: p8.id)

# user 1 follows user 2
f1 = Follow.create!(follower_id: 1, followable_id: 2, followable_type: "User")
f2 = Follow.create!(follower_id: 1, followable_id: 4, followable_type: "Playlist")
f3 = Follow.create!(follower_id: 2, followable_id: 2, followable_type: "Playlist")
f4 = Follow.create!(follower_id: 2, followable_id: 3, followable_type: "Playlist")
