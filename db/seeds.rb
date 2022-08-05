puts "Seeding Users..."
camper1 = User.create(username: 'Ciara', password: nil, image_url: "", bio: "", age: 18)
camper2 = User.create(username: 'Jane', password: nil, image_url: "", bio: "",age: 19)
camper3 = User.create(username: 'Dylan', password: nil, image_url: "", bio: "",age: 22)
camper4 = User.create(username: 'Kevin', password: nil, image_url: "", bio: "",age: 15)
camper5 = User.create(username: 'Lori', password: nil, image_url: "", bio: "",age: 31)
camper6 = User.create(username: 'Deandre', password: nil, image_url: "", bio: "",age: 20)
camper7 = User.create(username: 'Keisha', password: nil, image_url: "", bio: "",age: 29)
camper8 = User.create(username: 'Brooklyn', password: nil, image_url: "", bio: "",age: 24)

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
Badge.create(camper_id: camper1.id, activity_id: activity2.id, name: "plan",completed: false)
Badge.create(camper_id: camper1.id, activity_id: activity1.id, name: "register",completed: false)
Badge.create(camper_id: camper1.id, activity_id: activity4.id, name: "help",completed: false)
Badge.create(camper_id: camper2.id, activity_id: activity2.id, name: "supplies",completed: false)
Badge.create(camper_id: camper2.id, activity_id: activity1.id, name: "first",completed: false)
Badge.create(camper_id: camper4.id, activity_id: activity8.id, name: "involved",completed: false)
Badge.create(camper_id: camper5.id, activity_id: activity7.id, name: "last",completed: false)
Badge.create(camper_id: camper3.id, activity_id: activity4.id, name: "raise",completed: false)

puts "✅ Done seeding!"