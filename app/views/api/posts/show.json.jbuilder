json.extract! @post, :title, :id, :url, :author_id, :artist,
                     :description, :album, :year, :staff

json.extract! @author, :username

# json.like @like, :id, :post_id, :user_id unless @like.nil?


unless @post.likes.nil?
  json.like @post.likes do |like|
    if like.user_id == current_user.id
      json.extract! like, :id, :post_id, :user_id
    end
  end
end
