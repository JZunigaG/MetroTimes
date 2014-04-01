class StationsController < ApplicationController

	def index

		@stations_nearby = Station.select(:id,:name,"ST_Y(location::geometry) AS latitude,ST_X(location::geometry) AS Longitude").getNearbyStations(params[:latitude].to_f,params[:longitude].to_f)

	end

end
	