json.extract! @playlist, :name, :id, :owner_id

json.posts @playlist.posts do |post|
  json.extract! post, :title, :id, :url, :author_id, :artist,
                :description, :album, :year, :staff
end
