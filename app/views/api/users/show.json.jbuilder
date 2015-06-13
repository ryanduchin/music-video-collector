json.extract! @user, :username, :id

json.playlists @user.playlists do |playlist|
  json.extract! playlist, :name, :id, :owner_id
end

json.follow @follow, :id, :follower_id, :followable_id, :followable_type unless @follow.nil?
