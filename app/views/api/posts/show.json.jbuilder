json.extract! @post, :title, :id, :url, :author_id, :artist,
                     :description, :album, :staff

json.extract! @author, :username


unless @post.likes.nil?
  json.like @post.likes.each do |like|
    if like.user_id == current_user.id
      json.extract! like, :id, :post_id, :user_id
    end
  end
end
