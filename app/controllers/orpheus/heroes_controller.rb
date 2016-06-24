module Orpheus
  class HeroesController < OrpheusController
    def index
      @heroes = data_service.heroes
    end

    def show
      @hero = data_service.heroes.find { |hero| hero.id == params[:id] }
    end

    private

    def data_service
      @data_service ||= Orpheus::DataService.new
    end
  end
end
