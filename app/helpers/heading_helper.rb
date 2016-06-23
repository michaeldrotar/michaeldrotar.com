# Provides methods for creating anchors and links with html headings
module HeadingHelper
  def heading_tag(level, text = nil, options = nil, &block)
    if block_given?
      options = text if text.is_a?(Hash)
      text = capture(&block)
    end
    render partial: 'helpers/heading', locals: {
      tag: "h#{level}",
      options: options,
      text: text
    }
  end

  (1..6).each do |i|
    define_method("h#{i}_tag") do |text = nil, options = nil, &block|
      heading_tag(i, text, options, &block)
    end
  end
end
