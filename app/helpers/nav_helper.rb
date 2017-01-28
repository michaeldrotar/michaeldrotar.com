module NavHelper
  def nav_link_to(text, path)
    current = current_page?(path)
    link_to(path, class: ['nav-item nav-link', current && 'active']) do
      capture do
        concat(text)
        concat(sr_only('(current)')) if current
      end
    end
  end
end
