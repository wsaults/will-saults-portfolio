class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def hello
    render html: 'All the things will be here...soon.'
  end
end
