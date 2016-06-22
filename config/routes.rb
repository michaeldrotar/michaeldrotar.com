Rails.application.routes.draw do
  resources :orpheus, only: [:index]
  root 'welcome#index'
end
