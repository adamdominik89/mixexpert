import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Mix Expert CMS')
    .items([
      // Site Settings
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings-main')
        ),

      S.divider(),

      // Pages
      S.listItem()
        .title('Homepage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage-main')
        ),

      S.listItem()
        .title('Offer Page')
        .child(
          S.document()
            .schemaType('offerPage')
            .documentId('offerPage-main')
        ),

      S.listItem()
        .title('Contact Page')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage-main')
        ),

      S.divider(),

      // Product Categories (i18n - single documents)
      S.listItem()
        .title('Product Categories')
        .child(
          S.documentList()
            .title('Product Categories')
            .filter('_type == "productCategory"')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),

      S.divider(),

      // Partners
      S.listItem()
        .title('Partners')
        .child(
          S.documentList()
            .title('Partners')
            .filter('_type == "partner"')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),

      // Brands
      S.listItem()
        .title('Brands')
        .child(
          S.documentList()
            .title('Brands')
            .filter('_type == "brand"')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),
    ])
