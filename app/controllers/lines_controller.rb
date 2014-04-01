class LinesController < ApplicationController

	def show

		@times_scheduled_by_line = Station.select()

		if @station = Station.find_by(id: params[:station_id])	

			if !@line = @station.lines.find_by(id: params[:id])


			end

		end

	end

end
