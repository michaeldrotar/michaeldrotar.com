Rails.application.routes.draw do
  get '/orpheus', to: 'orpheus#index'
  namespace :orpheus do
    resources :heroes, only: [:index, :show]
  end
  root 'welcome#index'
end
