module Pageboy
  class GetTradeskills
    include Service

    def call
      LoadData.call('pageboy')['tradeskills'].map do |data|
        bonus = data.delete('bonus')
        Tradeskill.new(
          bonus: bonus,
          resource_costs: resource_costs_from_data(data)
        )
      end
    end

    private

    def resource_costs_from_data(data)
      data.keys.map do |resource_name|
        resource = GetResource.call(resource_name)
        ResourceCost.new(
          resource: resource,
          amount: data[resource_name]
        )
      end
    end
  end
end
