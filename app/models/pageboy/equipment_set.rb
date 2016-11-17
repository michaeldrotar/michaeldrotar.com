module Pageboy
  class EquipmentSet
    include HasResourceCosts

    attr_accessor :id, :damage, :crit, :order

    def initialize(params = {})
      self.id = params[:id]
      self.damage = params[:damage]
      self.crit = params[:crit]
      self.resource_costs = params[:resource_costs] || []
      self.order = params[:order]
    end
  end
end
