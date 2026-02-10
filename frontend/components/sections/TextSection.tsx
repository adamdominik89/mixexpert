import PortableText from '../PortableText'

interface TextSectionProps {
  section: {
    heading?: string
    subheading?: string
    content?: any[]
    alignment?: 'left' | 'center' | 'right'
  }
}

export default function TextSection({ section }: TextSectionProps) {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[section.alignment || 'left']

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {section.heading && (
            <h2 className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${alignmentClass}`}>
              {section.heading}
            </h2>
          )}
          {section.subheading && (
            <h3 className={`text-2xl text-primary-600 mb-8 ${alignmentClass}`}>
              {section.subheading}
            </h3>
          )}
          {section.content && Array.isArray(section.content) && section.content.length > 0 && (
            <div className={`prose prose-lg max-w-none ${alignmentClass}`}>
              <PortableText value={section.content} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
