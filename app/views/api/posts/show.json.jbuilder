json.extract! @post, :title, :id, :url, :author_id, :artist,
                     :description, :album, :year, :staff

json.extract! @author, :username

# json.like @like, :id, :post_id, :user_id unless @like.nil?


unless @post.likes.nil?
  json.likes @post.likes do |like|
    json.extract! like, :id, :post_id, :user_id
  end
end
