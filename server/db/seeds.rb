# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

def open_asset(file_name)
  File.open(Rails.root.join('db', 'seed_assets', file_name))
end

puts 'Create users!'
User.destroy_all
user_one = User.create(email: 'v@k.ca', password: '123456')
user_two = User.create(email: 'ab@c.ca', password: '123456')
user_three = User.create(email: 'john@gmail.ca', password: '123456')

puts 'Create plans!'
Plan.destroy_all
plan1 = Plan.create(name: 'Alex Louis Armstrong',
                    img: 'https://www.flyingmachinestudios.com/assets/images/posts/leiningen/so-sparkly.png')
plan2 = Plan.create(name: 'All Might',
                    img: 'https://carboncostume.com/wordpress/wp-content/uploads/2022/01/skinnyallmight-mha-character.png')
plan3 = Plan.create(name: 'Biscuit Krueger', img: 'https://www.siliconera.com/wp-content/uploads/2019/05/cnEnrna.jpg')
plan4 = Plan.create(name: 'Gojo Satoru',
                    img: 'https://static.wikia.nocookie.net/jujutsu-kaisen/images/5/5a/Satoru_Gojo_arrives_on_the_battlefield_%28Anime%29.png/revision/latest?cb=20210226205256')
plan5 = Plan.create(name: 'Goku Son ',
                    img: 'https://static.wikia.nocookie.net/dragonball/images/b/ba/Goku_anime_profile.png/revision/latest?cb=20220825041430')
plan6 = Plan.create(name: 'Makima',
                    img: 'https://wegotthiscovered.com/wp-content/uploads/2022/10/makima-chainsaw-man-1.jpg')
plan7 = Plan.create(name: 'Naruto Uzumaki', img: 'https://i.pinimg.com/564x/69/f6/2b/69f62ba576f9151fa2b96714e62ff9fa.jpg')
plan8 = Plan.create(name: 'Nezuko Kamado', img: 'https://i.pinimg.com/originals/07/d9/be/07d9be68364fada956c5417ea28ebc9a.png')
plan9 = Plan.create(name: 'Potato Potator', img: 'https://safifer.files.wordpress.com/2011/10/potato-baking-img_4841.jpg')
plan10 = Plan.create(name: 'Saitama',
                     img: 'https://qph.cf2.quoracdn.net/main-qimg-c8010b4775bf02d599e659ae309f863e-pj')
