Rails.application.routes.draw do
  	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  	root 'games#index'
			
	resources :games, path: '', param: :abbreviation, only: [:index, :show]

  	namespace :api do
		namespace :v1 do
			resources :users, only: [:index, :show, :destroy]
			resources :games, only: [:index, :show]
			resources :armies, only: [:index, :show]
			resources :units, only: [:index, :show]
			resources :artefacts, only: [:index, :show]
			resources :unit_options, only: [:index, :show]

			resources :gg_units, only: [:index, :show]
			resources :gg_unit_options, only: [:index, :show]

			resources :wmr_armies, only: [:index, :show]
			resources :wmr_units, only: [:index, :show]
			resources :wmr_spells, only: [:index, :show]
			resources :wmr_magic_items, only: [:index, :show]	
		end
	end
end
