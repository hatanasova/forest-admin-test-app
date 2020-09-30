puts 'Create User'
User.create!(
    email: 'user@test.com',
    password: "password",
    password_confirmation: "password"
)

puts 'Create Posts'
5.times do
  Post.create!(
      title: 'Title',
      body: 'Post body'
  )
end

puts 'Create Admin User'
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

puts 'Seeding completed!'