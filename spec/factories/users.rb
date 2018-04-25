FactoryBot.define do
  factory :user do
    name 'John Doe'
    email 'john.doe@email.com'
    is_admin false
    password 'password123'
  end
end
