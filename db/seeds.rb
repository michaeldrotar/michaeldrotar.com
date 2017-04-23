# This file should contain all the record creation needed to seed the
# database with its default values.
# The data can then be loaded with the rake db:seed
# (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

projects_data = YAML.load_file("#{Rails.root}/app/data/projects.yml")

project_names = projects_data.map { |project| project['name'] }
tag_names = projects_data.map { |project| project['tags'] }.flatten.uniq

existing_tag_names = []
tags_to_delete = []

Tag.all.each do |tag|
  if tag_names.include?(tag.name)
    existing_tag_names.push(tag.name)
  else
    tags_to_delete.push(tag)
  end
end

tag_names_to_add = tag_names.reject do |tag_name|
  existing_tag_names.include?(tag_name)
end

unless existing_tag_names.empty?
  Rails.logger.info("TAG exists: #{existing_tag_names.join(', ')}")
end

unless tags_to_delete.empty?
  Rails.logger.info("TAG cleanup: #{tags_to_delete.map(&:name).join(', ')}")
  tags_to_delete.each(&:delete)
end

unless tag_names_to_add.empty?
  Rails.logger.info("TAG creation: #{tag_names_to_add.join(', ')}")
  tag_names_to_add.each do |tag_name|
    Tag.create(name: tag_name)
  end
end

existing_projects = []
projects_to_delete = []

Project.all.joins(:tags).each do |project|
  if project_names.include?(project.name)
    existing_projects.push(project)
  else
    projects_to_delete.push(project)
  end
end

unless projects_to_delete.empty?
  Rails.logger.info("PROJECT cleanup: #{projects_to_delete.map(&:name).join(', ')}")
  projects_to_delete.each(&:delete)
end

projects_data.each do |project_data|
  printable_project_data = project_data.dup
  project_data['tags'] = Tag.where(name: project_data['tags'])

  existing_project = existing_projects.find do |project|
    project_data['name'] == project.name
  end

  if existing_project
    update_needed = project_data.find do |key, value|
      existing_project.send(key) != value
    end
    if update_needed
      Rails.logger.info("PROJECT update: #{printable_project_data}")
      existing_project.update(project_data)
    else
      Rails.logger.info("PROJECT up-to-date: #{printable_project_data}")
    end
  else
    Rails.logger.info("PROJECT create: #{printable_project_data}")
    Project.create(project_data)
  end
end
