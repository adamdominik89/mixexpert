import { SiteSettings, Brand, Partner } from '@/lib/types'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

interface FooterProps {
  settings: SiteSettings
  brands?: Brand[]
  partners?: Partner[]
}

export default function Footer({ settings, brands, partners }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Brands Section */}
        {brands && brands.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {settings.brandsTitle || 'Our Brands'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {brands.map((brand: Brand) => (
                <div
                  key={brand._id}
                  className="bg-white rounded-lg p-6 flex flex-col items-center text-center"
                >
                  {brand.logo?.image ? (
                    <Image
                      src={urlFor(brand.logo.image).width(200).url()}
                      alt={brand.logo.alt || brand.name}
                      width={200}
                      height={100}
                      className="h-20 w-auto object-contain mb-4"
                    />
                  ) : (
                    <div className="h-20 w-full flex items-center justify-center text-4xl mb-4">
                      ⭐
                    </div>
                  )}
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {brand.name}
                  </h4>
                  {brand.description && (
                    <p className="text-sm text-gray-600 mb-4">
                      {brand.description}
                    </p>
                  )}
                  {brand.website && (
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Visit Website →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Partners Section */}
        {partners && partners.length > 0 && (
          <div className="mb-12 pt-12 border-t border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              {settings.partnersTitle || 'Our Partners'}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {partners.map((partner: Partner) => (
                <div key={partner._id} className="flex items-center justify-center">
                  {partner.logo?.image ? (
                    partner.website ? (
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-70 hover:opacity-100 transition-opacity"
                      >
                        <Image
                          src={urlFor(partner.logo.image).width(150).url()}
                          alt={partner.logo.alt || partner.name}
                          width={150}
                          height={80}
                          className="h-16 w-auto object-contain"
                        />
                      </a>
                    ) : (
                      <Image
                        src={urlFor(partner.logo.image).width(150).url()}
                        alt={partner.logo.alt || partner.name}
                        width={150}
                        height={80}
                        className="h-16 w-auto object-contain opacity-70"
                      />
                    )
                  ) : (
                    <div className="text-sm text-gray-400">{partner.name}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} {settings.siteName}. All rights reserved.
          </p>
          {settings.footerText && (
            <p className="text-sm mt-2">{settings.footerText}</p>
          )}
        </div>
      </div>
    </footer>
  )
}
