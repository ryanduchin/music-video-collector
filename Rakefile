# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require File.expand_path('../config/application', __FILE__)

Rails.application.load_tasks

namespace :heroku do

  task :migrate, :app_name do |t, args|
    run_command("rake db:migrate --trace", args.app_name)
  end

  task :seed, :app_name do |t, args|
    run_command("rake db:seed --trace", args.app_name)
  end

  task :restart, :app_name do |t, args|
    run_command("restart", args.app_name)
  end

  task :resetdb, :app_name do |t, args|
    run_command("pg:reset DATABASE", args.app_name)
  end

  def run_command(cmd, app_name)
    Bundler.with_clean_env do
      sh build_command(cmd, app_name)
    end
  end

  def build_command(cmd, app_name)
    "heroku #{cmd} --app #{app_name}"
  end

end

# heroku pg:reset DATABASE
# heroku run rake db:migrate
# heroku run rake db:seed
