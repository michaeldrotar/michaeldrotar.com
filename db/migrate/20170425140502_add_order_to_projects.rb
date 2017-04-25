class AddOrderToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :order, :int
  end
end
