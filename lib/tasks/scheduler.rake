desc "This task is called by the Heroku scheduler add-on"
task :reset_database => :environment do
  if Time.now.wednesday? do
    puts "Dropping database..."
    pg:reset DATABASE --confirm music-video-collector
    puts "Generating database migration..."
    rake db:migrate
    puts "Seeding database..."
    rake db:seed
    puts "done."
  end
end
