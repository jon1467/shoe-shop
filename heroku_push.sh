cd web
heroku container:push web --arg RAILS_ENV=production -a jp-shoe-shop
heroku container:release web -a jp-shoe-shop
