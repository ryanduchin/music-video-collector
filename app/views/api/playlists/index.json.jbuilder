json.array! @playlists do |playlist|

  json.extract! playlist, :name, :id, :owner_id

  json.posts playlist.posts do |post|
    json.extract! post, :title, :id, :url, :author_id, :artist,
                        :description, :album, :year, :staff
  end



 # call method in controller?
  # json.follow playlist.follow, :id, :follower_id, :followable_id, :followable_type unless @follow.nil?

 #call method in jbuilder?
  # json.follow playlist.get_playlist_follow(window.CURRENT_USER_ID) :id, :follower_id, :followable_id, :followable_type unless post.follow.nil?

# use playlist.followings??
end
