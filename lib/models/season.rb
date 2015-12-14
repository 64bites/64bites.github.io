require_relative 'season/base'

module Season
  class Current < Base
    def formatted_title
      "Season #{number}"
    end

    def current?
      true
    end

    def slug
      "current"
    end
  end

  class Past < Base
    def current?
      false
    end

    def formatted_title
      "Season #{number} - #{title}"
    end
  end

  def self.new(create_current, *args)
    if create_current
      Current.new(*args)
    else
      Past.new(*args)
    end
  end
end
