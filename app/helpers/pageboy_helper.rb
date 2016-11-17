module PageboyHelper
  def pageboy_equipment_set_name(equipment_set)
    key = equipment_set.id.to_s
    t("pageboy.equipment_set_names.#{key}", default: key.humanize)
  end

  def pageboy_resource_costs_display(resource_costs)
    return if resource_costs.empty?
    content_tag(:div, class: 'pageboy-resource-costs') do
      resource_costs.each do |resource_cost|
        concat(pageboy_resource_display(resource_cost.resource.id))
        concat(resource_cost.amount)
      end
    end
  end

  def pageboy_resource_display(key)
    content_tag(:div, class: 'pageboy-resource', style: "background-image: url('#{pageboy_resource_icon(key)}')") do
      content_tag(:div, pageboy_resource_text(key), class: 'sr-only')
    end
  end

  def pageboy_resource_icon(key)
    dasherized_key = key.to_s.dasherize
    asset_url("pageboy/resources/#{dasherized_key}.gif")
  end

  def pageboy_resource_text(key)
    humanized_key = key.to_s.humanize
    underscored_key = key.to_s.underscore
    t("welcome.pageboy.resources.#{underscored_key}", default: humanized_key)
  end
end
