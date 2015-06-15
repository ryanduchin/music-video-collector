json.array! @playlists do |playlist|

  json.extract! playlist, :name, :id, :owner_id

  json.posts playlist.posts do |post|
    json.extract! post, :title, :id, :url, :author_id, :artist,
                        :description, :album, :year, :staff
  end

  unless playlist.followings.nil?
    json.followings playlist.followings do |following|
      json.extract! following, :id, :follower_id, :followable_id, :followable_type
    end
  end
  
end
