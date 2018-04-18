class GetSection
  def call(slug, section_includes)
    section = Static::Section.find_by_slug(slug)
    return nil unless section
    section.to_hash(section_includes)
  end
end
