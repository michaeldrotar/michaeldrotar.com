Rails.application.routes.draw do
  locale_constraint = /#{I18n.available_locales.join('|')}/
  scope '(:locale)', locale: locale_constraint do
    get '/orpheus', to: 'orpheus#index'
    namespace :orpheus do
      resources :heroes, only: [:index, :show]
    end
  end
  get '/:locale', locale: locale_constraint, to: 'welcome#index'
  root 'welcome#index'
end
