module Pageboy
  class GetResources
    include Service

    def call
      order = 0
      LoadData.call('pageboy')['resources'].map do |data|
        order += 1
        Resource.new(id: data['id'].to_sym, order: order)
      end
    end
  end
end
