json.extract! @post, :title, :id, :url, :author_id, :artist,
              :description, :album, :year, :staff

json.liking_users @post.liking_users do |user|
  json.extract! user, :id
end

json.extract! @author, :username
