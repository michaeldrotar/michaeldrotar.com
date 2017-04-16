module DocHelper
  def example(&block)
    return unless block_given?

    get_indent = proc do |line|
      match = line.match(/^\s+/)
      match[0].length if match[0]
    end

    code = capture(&block)
    lines = code.split(/[\r\n]+/).select(&:present?)
    indent = lines.reduce(100) do |a, b|
      b = get_indent.call(b)
      [a, b].min
    end

    lines = lines.map do |line|
      line[indent, line.length]
    end

    ret = capture do
      concat(content_tag(:div, class: 'doc-example') do
        code.html_safe
      end)
      concat(content_tag(:pre) do
        content_tag(:code, class: 'html') do
          lines.join("\n")
        end
      end)
    end
    ret
  end
end
