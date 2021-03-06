json.array! @playlists do |playlist|

  json.extract! playlist, :name, :id, :owner_id

  json.posts playlist.posts do |post|
    json.extract! post, :title, :id, :url, :author_id, :artist,
                        :description, :album, :staff
  end

  unless playlist.followings.nil?
    json.following playlist.followings do |following|
      if following.follower_id == current_user.id
        json.extract! following, :id, :follower_id, :followable_id, :followable_type
      end
    end
  end

end
