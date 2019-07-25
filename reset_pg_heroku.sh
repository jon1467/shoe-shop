heroku restart -a jp-shoe-shop
heroku pg:reset DATABASE -a jp-shoe-shop --confirm jp-shoe-shop
heroku run rake db:migrate -a jp-shoe-shop
heroku run rails db:seed -a jp-shoe-shop
