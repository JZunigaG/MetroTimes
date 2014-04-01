class StaticAppsController < ApplicationController

	def index

		render '../../WebClientApp/WebClient',layout: false

	end
	
end
