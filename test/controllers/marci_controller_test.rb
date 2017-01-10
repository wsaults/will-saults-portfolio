require 'test_helper'

class MarciControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get marci_home_url
    assert_response :success
  end

end
