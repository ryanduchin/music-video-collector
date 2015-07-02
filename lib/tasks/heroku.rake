namespace :heroku do

  task :migrate do
    puts 'Generating database migration...'
    run_command("run rake db:migrate")
  end

  task :seed do
    puts 'Seeding database...'
    run_command("run rake db:seed")
  end

  task :resetdb do
    puts 'Dropping database...'
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
