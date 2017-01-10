Rails.application.routes.draw do
  get 'marci/home'

  root 'users#index'
end
