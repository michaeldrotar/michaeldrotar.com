Rails.application.routes.draw do
  get '/orpheus', to: 'orpheus#index'
  namespace :orpheus do
    resources :heroes, only: [:index, :show]
  end
  resources :projects, only: [:index]
  get '/pageboy', to: 'pageboy#index'
  get '/:section/:page', to: 'static#dispatcher', as: :static_section
  get '/:page', to: 'static#dispatcher', as: :static
  devise_for :users, path: '', skip: :omniauth_callbacks
  devise_for :users, path: '', only: :omniauth_callbacks, controllers: { omniauth_callbacks: 'omniauth_callbacks' }
  root to: 'static#intro', defaults: { page: 'intro' }
end
