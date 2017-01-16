require 'test_helper'

class SiteLayoutTest < ActionDispatch::IntegrationTest
  test "layout links" do
    get home_path
    assert_template 'static_pages/home'
    assert_select "a[href=?]", home_path, count: 1
    assert_select "a[href=?]", mountains_path
    assert_select "a[href=?]", about_path
    assert_select "a[href=?]", contact_path
  end
end
