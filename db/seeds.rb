puts 'Create User'
User.create!(
    email: 'user@test.com',
    password: "password",
    password_confirmation: "password"
)

puts 'Seeding completed!'