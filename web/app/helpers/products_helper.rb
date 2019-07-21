module ProductsHelper
  def product_image_url(id)
    p = Product.find(id)
    if p.image.attached?
      url_for(p.image)
    else
      image_url("no_image.png")
    end
  end
end
