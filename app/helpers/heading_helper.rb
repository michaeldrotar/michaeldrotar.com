# Provides methods for creating anchors and links with html headings
module HeadingHelper
  def heading_tag(level, text = nil, options = nil, &block)
    if block_given?
      options = text if text.is_a?(Hash)
      text = capture(&block)
    end
    anchor = strip_tags(text).strip.gsub(/\W+/, '-').downcase
    capture do
      concat(content_tag('a', '', name: anchor))
      concat(content_tag("h#{level}", options) do
        content_tag('a', '', href: "\##{anchor}") + text
      end)
    end
  end

  (1..6).each do |i|
    define_method("h#{i}_tag") do |text = nil, options = nil, &block|
      heading_tag(i, text, options, &block)
    end
  end
end
