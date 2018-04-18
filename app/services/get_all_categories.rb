class GetAllCategories
  def call(section, category_includes)
    section.categories.map do |category|
      category.to_hash(category_includes)
    end
  end
end
