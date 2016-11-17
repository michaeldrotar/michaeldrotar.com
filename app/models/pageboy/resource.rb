module Pageboy
  class Resource
    attr_accessor :id, :order

    def initialize(params = {})
      self.id = params[:id]
      self.order = params[:order]
    end

    def <=>(other)
      order <=> other.order
    end

    def ==(other)
      id == other.id
    end
  end
end
