class PageboyController < ApplicationController
  def index
    equipment_sets = Pageboy::GetEquipmentSets.call
    tradeskills = Pageboy::GetTradeskills.call
    resources = Pageboy::GetResources.call
    @groupings = [
      {
        equipment_set: equipment_sets.shift,
        tradeskill: tradeskills.shift
      }
    ]
    checked_resources = []
    resources.each do |resource|
      checked_resources.push(resource)
      loop do
        grouping = {}
        if equipment_sets.first && equipment_sets.first.costs_resources?(checked_resources)
          grouping[:equipment_set] = equipment_sets.shift
        end
        if tradeskills.first && tradeskills.first.costs_resources?(checked_resources)
          grouping[:tradeskill] = tradeskills.shift
        end
        break if grouping.keys.empty?
        @groupings.push(grouping)
      end
    end
  end
end
