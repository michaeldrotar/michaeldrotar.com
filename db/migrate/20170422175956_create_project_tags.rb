class CreateProjectTags < ActiveRecord::Migration
  def change
    create_table :project_tags do |t|
      t.belongs_to :project, index: true, foreign_key: true
      t.belongs_to :tag, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
