puts "Seeding Users..."
user1 = User.create(username: 'Ciara', password: nil, image_url: "", bio: "", age: 18)
user2 = User.create(username: 'Jane', password: nil, image_url: "", bio: "",age: 19)
user3 = User.create(username: 'Dylan', password: nil, image_url: "", bio: "",age: 22)
user4 = User.create(username: 'Kevin', password: nil, image_url: "", bio: "",age: 15)
user5 = User.create(username: 'Lori', password: nil, image_url: "", bio: "",age: 31)
user6 = User.create(username: 'Deandre', password: nil, image_url: "", bio: "",age: 20)
user7 = User.create(username: 'Keisha', password: nil, image_url: "", bio: "",age: 29)
user8 = User.create(username: 'Brooklyn', password: nil, image_url: "", bio: "",age: 24)

puts "Seeding Activities..."
activity1 = Activity.create(name: 'Make A Plan', completed: false, date: 0, notes: "")
activity2 = Activity.create(name: 'Register', completed: false, date: 0, notes: "")
activity3 = Activity.create(name: 'Help A Friend', completed: false, date: 0, notes: "")
activity4 = Activity.create(name: 'Get Supplies', completed: false, date: 0, notes: "")
activity5 = Activity.create(name: 'First Steps', completed: false, date: 0, notes: "")
activity6 = Activity.create(name: 'Get Involved', completed: false, date: 0, notes: "")
activity7 = Activity.create(name: 'Last Steps', completed: false, date: 0, notes: "")
activity8 = Activity.create(name: 'Raise Your Vote', completed: false, date: 0, notes: "")

puts "Seeding Badges..."
Badge.create(user_id: user1.id, activity_id: activity2.id, completed: false)
Badge.create(user_id: user1.id, activity_id: activity1.id, completed: false)
Badge.create(user_id: user1.id, activity_id: activity4.id, completed: false)
Badge.create(user_id: user2.id, activity_id: activity2.id, completed: false)
Badge.create(user_id: user2.id, activity_id: activity1.id, completed: false)
Badge.create(user_id: user4.id, activity_id: activity8.id, completed: false)
Badge.create(user_id: user5.id, activity_id: activity7.id, completed: false)
Badge.create(user_id: user3.id, activity_id: activity4.id, completed: false)

puts "✅ Done seeding!"