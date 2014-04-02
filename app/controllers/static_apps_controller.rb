class StaticAppsController < ApplicationController

	# launch client application without layout throught "/client" => "static_apps#index" route
	def index

		render '../../WebClientApp/WebClient',layout: false

	end
	
end
