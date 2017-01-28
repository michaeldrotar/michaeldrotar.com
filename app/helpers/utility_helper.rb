module UtilityHelper
  def sr_only(text)
    content_tag(:span, text, class: 'sr-only')
  end
end
