namespace :heroku do

  task :migrate, :app_name do
    run_command("rake db:migrate")
  end

  task :seed, :app_name do
    run_command("rake db:seed")
  end

  task :resetdb do
    run_command("pg:reset DATABASE --confirm music-video-collector")
  end

  def run_command(cmd)
    Bundler.with_clean_env do
      sh build_command(cmd)
    end
  end

  def build_command(cmd)
    "heroku #{cmd}"
  end

end

# heroku pg:reset DATABASE
# heroku run rake db:migrate
# heroku run rake db:seed
