class GetAllSections
  def call(section_includes)
    Static::Section.all.map do |section|
      section.to_hash(section_includes)
    end
  end
end
