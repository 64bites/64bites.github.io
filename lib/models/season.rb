require_relative 'season/base'

module Season
  class Current < Base
    def current?
      true
    end
  end

  class Past < Base
    def current?
      false
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
