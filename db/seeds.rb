greetings = [
  "Hello! It's great to see you",
  "Hey there! Welcome to our platform. We're glad you're here!",
  "Greetings! We hope you're having a fantastic day.",
  "Hi there! We're excited to have you here.",
  "Good morning! I hope you have a fantastic day ahead."
]

greetings.each do |message|
  Greeting.create!(message: message)
end
