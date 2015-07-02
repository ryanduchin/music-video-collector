desc 'This task is called by the Heroku scheduler add-on'
task reset_database: :environment do
  if Time.now.thursday?
    # ActiveRecord::Base.connection.tables.each do |table|
    #   if table != 'schema_migrations'
    #     table.singularize.camelize.constantize.destroy_all
    #   end
    #   Rails.application.load_seed
    # end
    Rake::Task["heroku:resetdb"]
    Rake::Task["heroku:migrate"]
    Rake::Task["heroku:seed"]
    puts 'done.'
  end
end
