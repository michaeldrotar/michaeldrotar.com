class Project < ActiveRecord::Base
  has_many :project_tags
  has_many :tags, through: :project_tags
end
