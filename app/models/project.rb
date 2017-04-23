class Project < ActiveRecord::Base
  extend FriendlyId

  has_many :project_tags
  has_many :tags, through: :project_tags

  friendly_id :name, use: :slugged
end
