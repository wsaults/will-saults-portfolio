require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get static_pages_home_url
    assert_response :success
    assert_select "title", "Saults"
  end

  test "should get mountains" do
    get mountains_url
    assert_response :success
    assert_select "title", "...to the mountains and back"
  end

end
