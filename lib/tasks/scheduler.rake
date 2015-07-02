desc 'This task is called by the Heroku scheduler add-on'
task reset_database: :environment do
  if Time.now.wednesday?
    ActiveRecord::Base.connection.tables.each do |table|
      if table != 'schema_migrations'
        table.singularize.camelize.constantize.destroy_all
      end
      Rails.application.load_seed
    end
    # puts 'Dropping database...'
    # pg:reset
    # puts 'Generating database migration...'
    # rake db:migrate
    # puts 'Seeding database...'
    # rake db:seed
    # puts 'done.'
  end
end
