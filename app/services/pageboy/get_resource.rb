module Pageboy
  class GetResource
    include Service

    def initialize(id)
      @id = id.to_sym
    end

    def call
      resources = GetResources.call
      resources.find { |resource| resource.id == @id }
    end
  end
end
