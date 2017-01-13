module ApplicationHelper
  # Returns the full title on a per-page basis.
  def full_title(page_title = '')
    base_title = "Saults"
    if page_title.empty? || page_title == 'localhost:3001'
      base_title
    else
      page_title
    end
  end
end
