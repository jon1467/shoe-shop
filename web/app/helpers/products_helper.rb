module ProductsHelper
  def product_image_url(id)
    p = Product.find(id)
    if p.image.attached?
      Rails.application.routes.url_helpers.url_for(p.image)
    else
      image_path("no_image.png")
    end
  end

  def products_with_metadata
    ps = Product.all
    products = []

    ps.each do |product|
      products.push({
        product: product,
        imagePath: product_image_url(product.id),
        productURL: Rails.application.routes.url_helpers.product_path(product)
      })
    end

    products
  end
end
