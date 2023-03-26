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

puts 'Create plans!'
Plan.destroy_all
plan1 = Plan.create(name: 'All Might',
                    img: 'https://carboncostume.com/wordpress/wp-content/uploads/2022/01/skinnyallmight-mha-character.png',
                    description: 'Toshinori Yagi (八や木ぎ俊とし典のり Yagi Toshinori?), also known as All Might (オールマイト Ōru Maito?), is the former No. 1 Pro Hero who bore the title of the world\'s Symbol of Peace (平和の象徴 Heiwa no Shōchō?). He teaches Foundational Hero Studies at U.A. High School. All Might was the eighth holder of the One For All Quirk after receiving it from Nana Shimura. He has since passed the torch to Izuku Midoriya, whom he is training to be his successor. After using up all the embers of One For All to defeat All For One, All Might retired and ended his era as the world\'s greatest hero.')
plan2 = Plan.create(name: 'Goku Son ',
                    img: 'https://m-cdn.phonearena.com/images/article/129526-wide-two_940/Google-Assistants-new-Easter-Egg-recreates-the-first-time-DBZs-Goku-became-a-Super-Saiyan',
                    description: "Son Goku (孫そん悟ご空くう Son Gokū, Japanese pronunciation: [sõŋgokɯː]), born Kakarot (カカロット Kakarotto, Japanese pronunciation: [kakaɾot̚to]), is a Saiyan raised on Earth and the overall main protagonist of the Dragon Ball series. Originally sent to Earth as an infant, Kakarot was adopted by Grandpa Gohan and given the name Son Goku. A head injury at an early age altered Goku's memory, ridding him of his initial destructive nature and allowing him to grow up to become one of Earth's greatest defenders. He constantly strives and trains to be the greatest warrior possible, which has kept the Earth and the universe safe from destruction multiple times.")
plan3 = Plan.create(name: 'Makima',
                    img: 'https://wegotthiscovered.com/wp-content/uploads/2022/10/makima-chainsaw-man-1.jpg',
                    description: 'Makima (マキマ?) was a high-ranking Public Safety Devil Hunter, who took Denji as her human pet. She is later revealed to be the Control Devil (支し配はいの悪あく魔ま Shihai no Akuma?) which embodies the fear of control or conquest. Following her death, she is reincarnated as Nayuta.')
plan4 = Plan.create(name: 'Gojo Satoru',
                    img: 'https://sportshub.cbsistatic.com/i/2021/08/09/0e9146a6-322a-4091-8bf4-9b07a0eafeea/jujutsu-kaisen-gojo-domain-expansion-infinite-void-1277091.jpg',
                    description: 'Satoru Gojo (五ご条じょう悟さとる Gojō Satoru?) is one of the main protagonists of the Jujutsu Kaisen series. He is a special grade jujutsu sorcerer and widely recognized as the strongest in the world. Satoru is the pride of the Gojo Family, the first person to inherit both the Limitless and the Six Eyes in four hundred years. He works as a teacher at the Tokyo Jujutsu High and uses his influence to protect and train strong young allies.')
plan5 = Plan.create(name: 'Nezuko Kamado', img: 'https://i.pinimg.com/originals/07/d9/be/07d9be68364fada956c5417ea28ebc9a.png',
                    description: 'Nezuko Kamado (竈門かまど 禰ね豆ず子こ Kamado Nezuko?) is the deuteragonist of Demon Slayer: Kimetsu no Yaiba. She is a demon and the younger sister of Tanjiro Kamado and one of the two remaining members of the Kamado family. Formerly a human, she was attacked and transformed into a demon by Muzan Kibutsuji.')
plan6 = Plan.create(name: 'Biscuit Krueger', img: 'https://www.siliconera.com/wp-content/uploads/2019/05/cnEnrna.jpg',
                    description: 'Biscuit Krueger (ビスケット゠クルーガー, Bisuketto Kurūgā) is a Double-Star Stone Hunter who was hired by Battera to clear the video game Greed Island following the auction for the game in Yorknew City. She prefers to be called "Bisky" (ビスケ, Bisuke). She also served as the tritagonist for the Greed Island Arc.')

plan7 = Plan.create(name: 'Naruto Uzumaki',
                    img: 'https://i.pinimg.com/564x/69/f6/2b/69f62ba576f9151fa2b96714e62ff9fa.jpg', description: "Naruto Uzumaki (うずまきナルト, Uzumaki Naruto) is a shinobi of Konohagakure's Uzumaki clan. He became the jinchūriki of the Nine-Tails on the day of his birth — a fate that caused him to be shunned by most of Konoha throughout his childhood. After joining Team Kakashi, Naruto worked hard to gain the village's acknowledgement all the while chasing his dream to become Hokage. In the following years, through many hardships and ordeals, he became a capable ninja, regarded as a hero both by the villagers, and soon after, the rest of the world, becoming known as the Hero of the Hidden Leaf (木ノ葉隠れの英雄, Konohagakure no Eiyū, literally meaning: Hero of the Hidden Tree Leaves). He soon proved to be one of the main factors in winning the Fourth Shinobi World War, leading him to achieve his dream and become the village's Seventh Hokage (七代目火影, Nanadaime Hokage, literally meaning: Seventh Fire Shadow).")

plan8 = Plan.create(name: 'Potato Potator',
                    img: 'https://spudsmart.com/wp-content/uploads/2021/04/7.-20-Most-potato-Cayman-HZPC-scaled-1.jpg', description: 'Loved by the Frenchman.')
# plan9 = Plan.create(name: 'Saitama',
#                     img: 'https://qph.cf2.quoracdn.net/main-qimg-c8010b4775bf02d599e659ae309f863e-pj')
plan9 = Plan.create(name: 'Alex Louis Armstrong',
                    img: 'https://www.flyingmachinestudios.com/assets/images/posts/leiningen/so-sparkly.png',
                    description: 'Major Alex Louis Armstrong (アレックス・ルイ・アームストロング, Arekkusu Rui Āmusutorongu?), also known as the Strong Arm Alchemist (豪腕の錬金術師, Gōwan no Renkinjutsushi), is a State Alchemist and officer in the Amestrian State Military. The scion of the illustrious Armstrong family, Alex is a remarkably caring commander and friend as well as an invaluably skilled ally to Colonel Roy Mustang and Edward Elric.')
