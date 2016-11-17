module Pageboy
  module HasResourceCosts
    extend ActiveSupport::Concern

    included do
      attr_accessor :resource_costs
    end

    def costs_resource?(resource)
      resource_costs.map(&:resource).include?(resource)
    end

    def costs_resources?(resources)
      needed_resources = resource_costs.map(&:resource)
      resources.each do |resource|
        needed_resources.delete(resource)
      end
      needed_resources.empty?
    end
  end
end
