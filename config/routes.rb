Rails.application.routes.draw do
  locale_constraint = /#{I18n.available_locales.join('|')}/
  scope '/:locale' do
    devise_for :users, path: ''
    get '/orpheus', to: 'orpheus#index'
    namespace :orpheus do
      resources :heroes, only: [:index, :show]
    end
    get '/', to: 'welcome#index', as: 'locale'
  end
  root to: redirect("/#{I18n.default_locale}")
end
