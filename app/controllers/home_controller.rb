class HomeController < ApplicationController
  before_action :set_home, only: [:show, :edit, :update, :destroy]

  respond_to :html, :json

  def welcome

  end

end
