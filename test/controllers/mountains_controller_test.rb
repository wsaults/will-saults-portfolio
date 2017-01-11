require 'test_helper'

class MountainsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get mountains_url
    assert_response :success
    assert_select "title", "...to the mountains and back"
  end
end
