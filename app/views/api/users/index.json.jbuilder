json.array! @users do |user|

  json.extract! user, :username, :id

  json.playlists user.playlists do |playlist|
    json.extract! playlist, :name, :id, :owner_id
  end

  json.posts user.posts do |post|
    json.extract! post, :title, :id, :url, :author_id, :artist,
                         :description, :album, :year, :staff
  end

end
