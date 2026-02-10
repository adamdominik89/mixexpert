import { notFound } from 'next/navigation'
import { Language } from '@/lib/languages'
import { getContactPage } from '@/lib/sanity.queries'
import Image from 'next/image'
import { urlFor } from '@/lib/sanity.image'

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const contactPage = await getContactPage(lang as Language)

  if (!contactPage) {
    notFound()
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {contactPage.title}
        </h1>

        <div className="max-w-4xl mx-auto">
          {/* Company Info */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">{contactPage.companyName}</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3">
                  {contactPage.headquartersLabel}
                </h3>
                <address className="not-italic text-gray-700">
                  {contactPage.address.street}<br />
                  {contactPage.address.postalCode} {contactPage.address.city}<br />
                  {contactPage.address.country}
                </address>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">Contact</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Email:</strong>{' '}
                    <a
                      href={`mailto:${contactPage.email}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {contactPage.email}
                    </a>
                  </p>
                  <p>
                    <strong>Phone:</strong>{' '}
                    <a
                      href={`tel:${contactPage.phone}`}
                      className="text-primary-600 hover:text-primary-700"
                    >
                      {contactPage.phone}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Persons */}
          {contactPage.contactPersons && contactPage.contactPersons.length > 0 && (
            <div>
              {contactPage.administrationLabel && (
                <h2 className="text-2xl font-bold mb-6">
                  {contactPage.administrationLabel}
                </h2>
              )}
              
              <div className="grid md:grid-cols-2 gap-6">
                {contactPage.contactPersons.map((person: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-6 flex items-start gap-4"
                  >
                    {person.photo && (
                      <div className="flex-shrink-0">
                        <Image
                          src={urlFor(person.photo.image).width(100).height(100).url()}
                          alt={person.photo.alt}
                          width={100}
                          height={100}
                          className="rounded-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{person.name}</h3>
                      {person.role && (
                        <p className="text-sm text-gray-600 mb-2">{person.role}</p>
                      )}
                      {person.department && (
                        <p className="text-sm text-gray-600 mb-2">{person.department}</p>
                      )}
                      {person.phone && (
                        <p className="text-sm">
                          <a
                            href={`tel:${person.phone}`}
                            className="text-primary-600 hover:text-primary-700"
                          >
                            {person.phone}
                          </a>
                        </p>
                      )}
                      {person.email && (
                        <p className="text-sm">
                          <a
                            href={`mailto:${person.email}`}
                            className="text-primary-600 hover:text-primary-700"
                          >
                            {person.email}
                          </a>
                        </p>
                      )}
                      {person.languageFlags && person.languageFlags.length > 0 && (
                        <div className="flex gap-2 mt-2">
                          {person.languageFlags.map((flag: string, i: number) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-100 px-2 py-1 rounded"
                            >
                              {flag.toUpperCase()}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
