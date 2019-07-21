# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Make shoes
Dir.glob(File.join(File.dirname(__FILE__), '../app/assets/images/shoes/**/*')).map do |shoe_image|
  image_name = File.basename(shoe_image, ".*")
  p = Product.create(
    title: image_name.underscore.split('_').collect{|c| c.capitalize}.join(' '),
    price: 30.99
  )
  p.image.attach(io: File.open(shoe_image), filename: image_name)
  p.save
end
