module Pageboy
  class ResourceCost
    attr_accessor :amount, :resource

    def initialize(params = {})
      self.amount = params[:amount]
      self.resource = params[:resource]
    end
  end
end
