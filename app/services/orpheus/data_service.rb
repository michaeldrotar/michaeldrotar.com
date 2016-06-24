module Orpheus
  class DataService
    def heroes
      @heroes ||= data['heroes'].map do |id, data|
        Orpheus::Hero.new(id, data)
      end
    end

    private

    def data
      @data ||= YAML.load_file("#{Rails.root}/app/data/orpheus.yml")
    end
  end
end
