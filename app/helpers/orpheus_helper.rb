module OrpheusHelper
  ORPHEUS_CSS = {
    'P' => 'power',
    'H' => 'health',
    'M' => 'mastery'
  }.freeze

  def orpheus_text(text = nil, &block)
    text = capture(&block) if block_given?
    text = text.gsub(/(\d+)\|(P|H|M)/) do
      num = Regexp.last_match[1]
      css = ORPHEUS_CSS[Regexp.last_match[2]]
      %{<span class="orpheus-#{css}-text">#{num}<span class="sr-only">(scales with #{css})</span></span>}
    end
    text.html_safe
  end
end
