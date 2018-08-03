# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if Rails.env.development?
  User.create!(
    email: 'admin@example.com',
    first_name: 'Admin',
    last_name: 'User',
    status: User::ADMIN,
    password: 'password',
    password_confirmation: 'password'
  )
  api_user = User.create!(
    email: 'user@example.com',
    first_name: 'API user',
    last_name: 'Brazil',
    country_iso_code: 'BRA',
    status: User::USER,
    password: 'password',
    password_confirmation: 'password'
  )

  InitialiseReport.new(
    api_user, api_user.country_iso_code
  ).call([2018], force: true)
end
