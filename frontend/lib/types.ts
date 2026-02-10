// Sanity types

export interface SanityImage {
  image: {
    asset: {
      _id: string
      url: string
    }
  }
  alt: string
  caption?: string
}

export interface SEO {
  metaTitle?: string
  metaDescription?: string
  metaKeywords?: string[]
  ogImage?: SanityImage
  noIndex?: boolean
}

export interface Hero {
  title: string
  subtitle?: string
  backgroundImage?: SanityImage
}

export interface AboutSection {
  title: string
  subtitle?: string
  description: any[] // Portable Text
  additionalContent?: any[] // Portable Text
  ctaText?: string
  ctaLink?: string
  image?: SanityImage
}

export interface CategoryCard {
  title: string
  description?: string
  image: SanityImage
  link: string
  order?: number
}

export interface ContactPerson {
  name: string
  role?: string
  department?: string
  email?: string
  phone?: string
  photo?: SanityImage
  languageFlags?: string[]
}

export interface Address {
  street: string
  postalCode: string
  city: string
  country: string
}

export interface Feature {
  title: string
  description?: string
  icon?: SanityImage
}

export interface Specification {
  label: string
  value: string
}

// Document types

export interface SiteSettings {
  _id: string
  siteName: string
  siteDescription?: string
  logo?: SanityImage
  phone: string
  email?: string
  navigationItems?: Array<{
    label: string
    href: string
  }>
  brandsTitle?: string
  partnersTitle?: string
  footerText?: string
}

export interface HomePage {
  _id: string
  title: string
  slug: {
    current: string
  }
  hero?: Hero
  aboutSection?: AboutSection
  offerTitle: string
  categoryCards: CategoryCard[]
  seo?: SEO
}

export interface OfferPage {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  categoryCards: CategoryCard[]
  seo?: SEO
}

export interface ContactPage {
  _id: string
  title: string
  slug: {
    current: string
  }
  companyName: string
  headquartersLabel: string
  address: Address
  email: string
  phone: string
  administrationLabel?: string
  salesDepartmentLabel?: string
  contactPersons?: ContactPerson[]
  seo?: SEO
}

export interface ProductCategory {
  _id: string
  categoryId: string
  title: string
  slug: {
    current: string
  }
  description?: any[] // Portable Text
  headerImage?: SanityImage
  icon?: SanityImage
  order: number
  subcategories?: Array<{
    title: string
    description?: string
    image?: SanityImage
  }>
  features?: Feature[]
  products?: Product[]
  seo?: SEO
}

export interface Product {
  _id: string
  productId: string
  title: string
  slug: {
    current: string
  }
  shortDescription?: string
  description?: any[] // Portable Text
  mainImage?: SanityImage
  gallery?: SanityImage[]
  category: ProductCategory
  features?: Feature[]
  specifications?: Specification[]
  isGlutenFree: boolean
  isFeatured: boolean
  order?: number
  seo?: SEO
}

export interface Brand {
  _id: string
  brandId: string
  name: string
  logo: SanityImage
  description?: string
  website?: string
  order?: number
}

export interface Partner {
  _id: string
  name: string
  logo: SanityImage
  website?: string
  order?: number
}
