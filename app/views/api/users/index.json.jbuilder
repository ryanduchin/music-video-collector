json.array! @users do |user|

  json.extract! user, :username, :id

  json.playlists user.playlists do |playlist|
    json.extract! playlist, :name, :id, :owner_id
  end

  json.posts user.posts do |post|
    json.extract! post, :title, :id, :url, :author_id, :artist,
                         :description, :album, :staff
  end

  unless user.followings.nil?
    json.following user.followings do |following|
      if following.follower_id == current_user.id
        json.extract! following, :id, :follower_id, :followable_id, :followable_type
      end
    end
  end


end
