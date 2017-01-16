require 'test_helper'

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get home_path
    assert_response :success
    assert_select "title", "Saults"
  end

  test "should get about" do
    get about_path
    assert_response :success
    assert_select "title", "About"
  end

  test "should get contact" do
    get contact_path
    assert_response :success
    assert_select "title", "Contact"
  end

  test "should get mountains" do
    get mountains_path
    assert_response :success
    assert_select "title", "...to the mountains and back"
  end

end
