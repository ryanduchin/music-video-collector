json.array! @posts do |post|
  json.extract! post, :title, :id, :url, :author_id, :artist,
                      :description, :album, :year, :staff

  json.author post.author, :username

  # json.like post.like, :id, :post_id, :user_id unless @like.nil?

  unless post.likes.nil?
    json.likes post.likes do |like|
      if like.user_id == current_user.id
        json.extract! like, :id, :post_id, :user_id
      end
    end
  end


end
