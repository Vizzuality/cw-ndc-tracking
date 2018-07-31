FactoryBot.define do
  factory :user do
    first_name 'John'
    last_name 'Doe'
    sequence(:email) { |n| "person#{n}@example.com" }
    country_iso_code 'BRA'
    is_admin false
    password 'password123'
  end
end
