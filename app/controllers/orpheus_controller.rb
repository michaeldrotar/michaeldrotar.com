class OrpheusController < ApplicationController
  def index
  end

  def nav
    @nav ||= {
      heroes: orpheus_heroes_path
    }
  end
end
