module Pageboy
  class Tradeskill
    include HasResourceCosts

    attr_accessor :bonus

    def initialize(params = {})
      self.bonus = params[:bonus]
      self.resource_costs = params[:resource_costs]
    end
  end
end
