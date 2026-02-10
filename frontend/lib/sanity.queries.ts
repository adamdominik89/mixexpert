import { client } from './sanity.client'

// Language type
export type Language = 'pl' | 'en' | 'de'

// Get site settings by language
export async function getSiteSettings(language: Language) {
  const query = `*[_type == "siteSettings" && language == $language][0]{
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
  
  return client.fetch(query, { language })
}

// Get home page by language
export async function getHomePage(language: Language) {
  const query = `*[_type == "homePage" && language == $language][0]{
    _id,
    title,
    slug,
    hero{
      title,
      subtitle,
      backgroundImage{
        image{
          asset->{
            _id,
            url
          }
        },
        alt
      }
    },
    aboutSection{
      title,
      subtitle,
      description,
      additionalContent,
      ctaText,
      ctaLink,
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
    offerTitle,
    categoryCards[]{
      title,
      description,
      image{
        image{
          asset->{
            _id,
            url
          }
        },
        alt
      },
      link,
      order
    },
    seo
  }`
  
  return client.fetch(query, { language })
}

// Get offer page by language
export async function getOfferPage(language: Language) {
  const query = `*[_type == "offerPage" && language == $language][0]{
    _id,
    title,
    slug,
    description,
    categoryCards[]{
      title,
      description,
      image{
        image{
          asset->{
            _id,
            url
          }
        },
        alt
      },
      link,
      order
    },
    seo
  }`
  
  return client.fetch(query, { language })
}

// Get contact page by language
export async function getContactPage(language: Language) {
  const query = `*[_type == "contactPage" && language == $language][0]{
    _id,
    title,
    slug,
    companyName,
    headquartersLabel,
    address,
    email,
    phone,
    administrationLabel,
    salesDepartmentLabel,
    contactPersons[]{
      name,
      role,
      department,
      email,
      phone,
      photo{
        image{
          asset->{
            _id,
            url
          }
        },
        alt
      },
      languageFlags
    },
    seo
  }`
  
  return client.fetch(query, { language })
}

// Get all product categories by language
export async function getProductCategories(language: Language) {
  const query = `*[_type == "productCategory" && language == $language] | order(order asc){
    _id,
    categoryId,
    title,
    slug,
    description,
    headerImage{
      image{
        asset->{
          _id,
          url
        }
      },
      alt
    },
    icon{
      image{
        asset->{
          _id,
          url
        }
      },
      alt
    },
    order
  }`
  
  return client.fetch(query, { language })
}

// Get product category by slug
export async function getProductCategoryBySlug(slug: string, language: Language) {
  const query = `*[_type == "productCategory" && slug.current == $slug && language == $language][0]{
    _id,
    categoryId,
    title,
    slug,
    description,
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
      title,
      description,
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
    seo
  }`
  
  return client.fetch(query, { slug, language })
}

// Get brands by language
export async function getBrands(language: Language) {
  const query = `*[_type == "brand" && language == $language] | order(order asc){
    _id,
    brandId,
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
    description,
    website,
    order
  }`
  
  return client.fetch(query, { language })
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
