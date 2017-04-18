module IntroHelper
  def intro(&block)
    @count = 0
    capture(&block)
  end

  def intro_text(text)
    characters = text.split('').map do |character|
      @count += 1
      "<span class=\"intro-char intro-char--#{@count}\">#{character}</span>"
    end
    characters.join.html_safe
  end
end
