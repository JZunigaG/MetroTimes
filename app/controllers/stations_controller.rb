class StationsController < ApplicationController

	# get nearby stations witn latitude,longitude params throught "/stations" => "stations#index" route
	# longitude,latidude data are store in database postgresql with postgis support
	def index

		@stations_nearby = Station.select(:id,:name,"ST_Y(location::geometry) AS latitude,ST_X(location::geometry) AS Longitude").getNearbyStations(params[:latitude].to_f,params[:longitude].to_f)

	end

end
	