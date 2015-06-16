json.extract! @playlist, :name, :id, :owner_id

json.extract! @owner, :username

json.posts @playlist.posts do |post|
  json.extract! post, :title, :id, :url, :author_id, :artist,
                      :description, :album, :year, :staff

  unless post.likes.nil?
    json.like post.likes.each do |like|
      if like.user_id == current_user.id
        json.extract! like, :id, :post_id, :user_id
      end
    end
  end

end

unless @playlist.followings.nil?
  json.following @playlist.followings do |following|
    if following.follower_id == current_user.id
      json.extract! following, :id, :follower_id, :followable_id, :followable_type
    end
  end
end
