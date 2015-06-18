# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150618034337) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "follows", force: :cascade do |t|
    t.integer  "follower_id",     null: false
    t.integer  "followable_id",   null: false
    t.string   "followable_type", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "follows", ["followable_type", "followable_id"], name: "index_follows_on_followable_type_and_followable_id", using: :btree
  add_index "follows", ["follower_id"], name: "index_follows_on_follower_id", using: :btree

  create_table "likes", force: :cascade do |t|
    t.integer  "post_id",    null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "likes", ["post_id"], name: "index_likes_on_post_id", using: :btree
  add_index "likes", ["user_id"], name: "index_likes_on_user_id", using: :btree

  create_table "playlist_posts", force: :cascade do |t|
    t.integer "playlist_id", null: false
    t.integer "post_id",     null: false
  end

  add_index "playlist_posts", ["playlist_id"], name: "index_playlist_posts_on_playlist_id", using: :btree
  add_index "playlist_posts", ["post_id"], name: "index_playlist_posts_on_post_id", using: :btree

  create_table "playlists", force: :cascade do |t|
    t.integer  "owner_id",   null: false
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "playlists", ["name"], name: "index_playlists_on_name", using: :btree
  add_index "playlists", ["owner_id"], name: "index_playlists_on_owner_id", using: :btree

  create_table "posts", force: :cascade do |t|
    t.integer  "author_id",                   null: false
    t.string   "title",                       null: false
    t.string   "url",                         null: false
    t.string   "artist"
    t.text     "description"
    t.string   "album"
    t.boolean  "staff",       default: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
