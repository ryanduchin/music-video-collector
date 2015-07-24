# not currently implemented
desc 'This task is called by the Heroku scheduler add-on'
task reset_database: :environment do
  if Time.now.thursday?
    # ActiveRecord::Base.connection.tables.each do |table|
    #   if table != 'schema_migrations'
    #     table.singularize.camelize.constantize.destroy_all
    #   end
    #   Rails.application.load_seed
    # end
    Rake::Task["heroku:resetdb"].invoke
    Rake::Task["heroku:migrate"].invoke
    Rake::Task["heroku:seed"].invoke
    # run_command("pg:reset DATABASE --confirm music-video-collector")
    # run_command("run rake db:migrate")
    # run_command("run rake db:seed")
    puts 'done.'

    # def run_command(cmd)
    #   Bundler.with_clean_env do
    #     sh build_command(cmd)
    #   end
    # end
    #
    # def build_command(cmd)
    #   "heroku #{cmd}"
    # end

  end
end

# def run_command(cmd)
#   Bundler.with_clean_env do
#     sh build_command(cmd)
#   end
# end
#
# def build_command(cmd)
#   "heroku #{cmd}"
# end
