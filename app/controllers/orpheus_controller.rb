class OrpheusController < ApplicationController
  def index
  end

  def subnav
    @subnav ||= {
      heroes: orpheus_heroes_path
    }
  end
end
