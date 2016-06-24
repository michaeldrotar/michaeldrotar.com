module Orpheus
  class Hero
    attr_reader :id

    def initialize(id, params = {})
      @id = id
    end

    def image
      @image ||= id.tr('_', '-')
    end

    def name
      @name ||= localized_value('name')
    end

    private

    def localized_value(key)
      I18n.t("orpheus.heroes.#{id}.#{key}")
    end
  end
end
