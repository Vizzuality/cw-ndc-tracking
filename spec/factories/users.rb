FactoryBot.define do
  factory :user do
    name 'John Doe'
    sequence(:email) { |n| "person#{n}@example.com" }
    is_admin false
    password 'password123'
  end
end
