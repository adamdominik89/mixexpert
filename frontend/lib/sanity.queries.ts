import { client } from './sanity.client'
import { Language } from './languages'

// Get site settings by language
export async function getSiteSettings(language: Language) {
  const query = `*[_type == "siteSettings"][0]{
    _id,
    siteName,
    siteDescription,
    logo,
    phone,
    email,
    navigationItems,
    brandsTitle,
    partnersTitle,
    footerText
  }`
  
  return client.fetch(query)
}

// Get home page by language
export async function getHomePage(language: Language) {
  const query = `*[_type == "homePage"][0]{
    _id,
    title,
    slug,
    sections[]{
      _type,
      _key,
      "title": title.${language},
      "subtitle": subtitle.${language},
      backgroundImage,
      "ctaText": ctaText.${language},
      ctaLink,
      "heading": heading.${language},
      "subheading": subheading.${language},
      "content": content.${language},
      alignment
    },
    seo
  }`
  
  return client.fetch(query)
}

// Get offer page by language
export async function getOfferPage(language: Language) {
  const query = `*[_type == "offerPage"][0]{
    _id,
    "title": title.${language},
    slug,
    sections[]{
      _type,
      _key,
      "heading": heading.${language},
      showCategories
    },
    seo
  }`
  
  return client.fetch(query)
}

// Get contact page by language
export async function getContactPage(language: Language) {
  const query = `*[_type == "contactPage"][0]{
    _id,
    "title": title.${language},
    slug,
    companyName,
    headquartersLabel,
    address,
    email,
    phone,
    administrationLabel,
    salesDepartmentLabel,
    contactPersons,
    seo
  }`
  
  return client.fetch(query)
}

// Get all product categories by language (formatted as CategoryCard for grid display)
export async function getProductCategories(language: Language) {
  const query = `*[_type == "productCategory"] | order(order asc){
    _id,
    categoryId,
    "title": title.${language},
    slug,
    icon,
    order
  }`
  
  const categories = await client.fetch(query)
  
  // Transform to CategoryCard format
  return categories.map((cat: any) => ({
    title: cat.title,
    description: '', // Description not shown on cards
    image: cat.icon,
    link: `/kategoria/${cat.slug.current}`,
    order: cat.order,
  }))
}

// Get product category by slug
export async function getProductCategoryBySlug(slug: string, language: Language) {
  const query = `*[_type == "productCategory" && slug.current == $slug][0]{
    _id,
    categoryId,
    "title": title.${language},
    slug,
    "description": description.${language},
    headerImage{
      image{
        asset->{
          _id,
          url
        }
      },
      alt
    },
    subcategories[]{
      "title": title.${language},
      "description": description.${language},
      image{
        image{
          asset->{
            _id,
            url
          }
        },
        alt
      }
    },
    features[]{
      title,
      description,
      icon{
        image{
          asset->{
            _id,
            url
          }
        },
        alt
      }
    },
    products[]->{
      _id,
      title,
      slug,
      shortDescription,
      mainImage{
        image{
          asset->{
            _id,
            url
          }
        },
        alt
      },
      isGlutenFree,
      isFeatured
    },
    "seo": {
      "metaTitle": seo.metaTitle.${language},
      "metaDescription": seo.metaDescription.${language},
      "ogImage": seo.ogImage
    }
  }`
  
  return client.fetch(query, { slug })
}

// Get brands by language
export async function getBrands(language: Language) {
  const query = `*[_type == "brand"] | order(order asc){
    _id,
    brandId,
    name,
    logo,
    description,
    website,
    order
  }`
  
  return client.fetch(query)
}

// Get all partners (no language filter)
export async function getPartners() {
  const query = `*[_type == "partner"] | order(order asc){
    _id,
    name,
    logo{
      image{
        asset->{
          _id,
          url
        }
      },
      alt
    },
    website,
    order
  }`
  
  return client.fetch(query)
}
