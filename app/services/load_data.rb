class LoadData
  include Service

  def initialize(filename)
    @filename = filename
  end

  def call
    Rails.cache.fetch("LoadData/#{@filename}", force: Rails.env.development?) do
      YAML.load_file("#{Rails.root}/app/data/#{@filename}.yml")
    end
  end
end
