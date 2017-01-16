Rails.application.routes.draw do
  root 'static_pages#home', as: :home

  get '/about', to: 'static_pages#about', as: :about
  get '/contact', to: 'static_pages#contact', as: :contact
  get '/mountains', to: 'static_pages#mountains', as: :mountains
end
