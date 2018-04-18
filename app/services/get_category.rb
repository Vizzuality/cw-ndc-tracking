class GetCategory
  def call(section, slug, category_includes)
    category = section.find_category_by_slug(slug)
    return nil unless category
    category.to_hash(category_includes)
  end
end
