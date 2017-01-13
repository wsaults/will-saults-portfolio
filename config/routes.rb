Rails.application.routes.draw do
  root 'static_pages#home'

  get 'static_pages/home'

  get '/mountains' => 'static_pages#mountains', as: :mountains
end
