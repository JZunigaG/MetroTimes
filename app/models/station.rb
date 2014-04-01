class Station < ActiveRecord::Base

	has_and_belongs_to_many :lines

	set_rgeo_factory_for_column(:location,RGeo::Geographic.spherical_factory(:srid => 4326))



	scope :getNearbyStations,lambda(){ |latitude,longitude|
		where(["ST_DWithin(location,ST_GeomFromText('POINT(? ?)',4326),500)",longitude,latitude]).includes(:lines)
	}


end
