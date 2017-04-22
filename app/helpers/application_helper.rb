module ApplicationHelper
  def extends(layout, &block)
    @view_flow.get(:layout).replace capture(&block)
    render file: "layouts/#{layout}"
  end
end
