# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'
matt=User.create(name:'Matt')

3.times do
  list = List.create(title:Faker::Lorem.word, content:Faker::Lorem.sentence)
  10.times do
    list.items << Item.create(title:Faker::Lorem.word, content:Faker::Lorem.sentence)
  end
  matt.lists << list
end