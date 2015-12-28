class ConvertkitForm
  def self.find(form_name, forms_data)
    new(form_name, forms_data.fetch(form_name))
  end

  def initialize(name, form_data)
    @name = name
    @id = form_data.fetch("id")
    @form_data = form_data
  end

  attr_reader :name, :id

  def poster
    "convertkit/#{poster_name}.#{poster_extension}" unless form_data["no_poster"]
  end

  def title
    form_data["title"]
  end

  def description
    form_data["description"]
  end

  def call_to_action
    form_data["call_to_action"] || "I'm in"
  end

  private

  def poster_extension
    form_data["poster_extension"] || "png"
  end

  def poster_name
    form_data["poster_name"] || name
  end

  attr_reader :form_data
  
end
