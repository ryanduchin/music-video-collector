json.array! @posts do |post|
  json.extract! post, :title, :id, :url, :author_id, :artist,
                      :description, :album, :staff

  json.author post.user, :username

  unless post.likes.nil?
    json.like post.likes do |like|
      if like.user_id == current_user.id
        json.extract! like, :id, :post_id, :user_id
      end
    end
  end


end
