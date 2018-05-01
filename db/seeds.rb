# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if Rails.env.development?
  admin_user = User.create!(
    email: 'admin@example.com',
    name: 'Admin User',
    is_admin: true,
    password: 'password',
    password_confirmation: 'password'
  )
  api_user = User.create!(
    email: 'user@example.com',
    name: 'API user Brazil',
    country_iso_code: 'BRA',
    is_admin: false,
    password: 'password',
    password_confirmation: 'password'
  )

  default_report = Report.find_or_create_by({user_id: api_user.id})
  default_report.initialize_categories([2018], true)
end
