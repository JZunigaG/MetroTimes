class Line < ActiveRecord::Base

	has_and_belongs_to_many :stations

	has_many :time_scheduleds

end
