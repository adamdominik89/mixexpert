import { notFound } from 'next/navigation'
import { Language } from '@/lib/languages'
import { getProductCategoryBySlug } from '@/lib/sanity.queries'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'
import PortableText from '@/components/PortableText'

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  const { lang, slug } = await params
  const category = await getProductCategoryBySlug(slug, lang as Language)

  if (!category) {
    notFound()
  }

  return (
    <div className="py-16">
      {/* Header */}
      {category.headerImage && (
        <div className="relative h-64 mb-8">
          <Image
            src={urlFor(category.headerImage.image).width(1920).url()}
            alt={category.headerImage.alt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
              {category.title}
            </h1>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        {!category.headerImage && (
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            {category.title}
          </h1>
        )}

        {/* Description */}
        {category.description && (
          <div className="max-w-4xl mx-auto mb-12">
            <PortableText value={category.description} />
          </div>
        )}

        {/* Features */}
        {category.features && category.features.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.features.map((feature: any, index: number) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  {feature.icon && (
                    <Image
                      src={urlFor(feature.icon.image).width(80).url()}
                      alt={feature.icon.alt}
                      width={80}
                      height={80}
                      className="mb-4"
                    />
                  )}
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  {feature.description && (
                    <p className="text-gray-600">{feature.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Subcategories */}
        {category.subcategories && category.subcategories.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.subcategories.map((sub: any, index: number) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {sub.image && (
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={urlFor(sub.image.image).width(400).url()}
                        alt={sub.image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{sub.title}</h3>
                    {sub.description && (
                      <p className="text-gray-600 text-sm">{sub.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products */}
        {category.products && category.products.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products.map((product: any) => (
                <div
                  key={product._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {product.mainImage && (
                    <div className="aspect-square relative">
                      <Image
                        src={urlFor(product.mainImage.image).width(300).url()}
                        alt={product.mainImage.alt}
                        fill
                        className="object-cover"
                      />
                      {product.isGlutenFree && (
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                          Gluten Free
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                    {product.shortDescription && (
                      <p className="text-sm text-gray-600 line-clamp-3">
                        {product.shortDescription}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
