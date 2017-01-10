Rails.application.routes.draw do
  get 'mountains' => 'mountains#index'

  root 'application#index'
end
