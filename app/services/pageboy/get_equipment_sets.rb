module Pageboy
  class GetEquipmentSets
    include Service

    def call
      order = 0
      equipment_sets_data = LoadData.call('pageboy')['equipment_sets']
      equipment_sets_data.map do |data|
        order += 1
        params = {}
        params[:id] = data.delete('id').to_sym
        params[:damage] = data.delete('damage')
        params[:crit] = data.delete('crit')
        params[:resource_costs] = resource_costs_from_data(data)
        params[:order] = order
        EquipmentSet.new(params)
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
