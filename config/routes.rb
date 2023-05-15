Rails.application.routes.draw do
  # root "articles#index"

  get '/random_greeting', to: 'greetings#random_greeting'
end
