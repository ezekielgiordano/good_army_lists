class GgUnitOption < ApplicationRecord
	validates :name, presence: true, uniqueness: true
	validates :display_name, presence: true
	validates :points, presence: true, numericality: { only_integer: true }

	belongs_to :gg_unit
end