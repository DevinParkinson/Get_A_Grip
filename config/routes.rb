Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :pistols
    get 'my_pistol', to: 'pistols#my_pistol'
    put 'pistol/:id', to: 'pistols#update_pistol'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
