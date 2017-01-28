Rails.application.routes.draw do
  scope '/:locale' do
    devise_for :users, path: '', skip: :omniauth_callbacks
    get '/orpheus', to: 'orpheus#index'
    namespace :orpheus do
      resources :heroes, only: [:index, :show]
    end
    get '/pageboy', to: 'pageboy#index'
    get '/resume', to: 'welcome#resume'
    get '/', to: 'welcome#index', as: 'locale'
  end
  devise_for :users, path: '', only: :omniauth_callbacks, controllers: { omniauth_callbacks: 'omniauth_callbacks' }
  root to: redirect("/#{I18n.default_locale}")
end
