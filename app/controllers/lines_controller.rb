class LinesController < ApplicationController

	def show

		if @station = Station.find_by(id: params[:station_id])	

			if @line = @station.lines.find_by(id: params[:id])

				#@times_scheduled_by_line = @line.time_scheduleds.getLinesDataBySlot(params[:current_time]).order(:start_time_slot,:end_time_slot).limit(4)
				@times_scheduled_by_line = @line.time_scheduleds.getLinesDataBySlot(params[:current_time])

				#render json: @times_scheduled_by_line

			else

				render json: {}

			end

		else 

			render json: {}

		end

	end

end
