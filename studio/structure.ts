import {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Mix Expert CMS')
    .items([
      // Site Settings
      S.listItem()
        .title('Site Settings')
        .child(
          S.list()
            .title('Site Settings by Language')
            .items([
              S.listItem()
                .title('Polish')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings-pl')
                ),
              S.listItem()
                .title('English')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings-en')
                ),
              S.listItem()
                .title('German')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings-de')
                ),
            ])
        ),

      S.divider(),

      // Pages
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              // Home Pages
              S.listItem()
                .title('Home Pages')
                .child(
                  S.list()
                    .title('Home Pages by Language')
                    .items([
                      S.listItem()
                        .title('Polish')
                        .child(
                          S.documentList()
                            .title('Polish Home Pages')
                            .filter('_type == "homePage" && language == "pl"')
                        ),
                      S.listItem()
                        .title('English')
                        .child(
                          S.documentList()
                            .title('English Home Pages')
                            .filter('_type == "homePage" && language == "en"')
                        ),
                      S.listItem()
                        .title('German')
                        .child(
                          S.documentList()
                            .title('German Home Pages')
                            .filter('_type == "homePage" && language == "de"')
                        ),
                    ])
                ),

              // Offer Pages
              S.listItem()
                .title('Offer Pages')
                .child(
                  S.list()
                    .title('Offer Pages by Language')
                    .items([
                      S.listItem()
                        .title('Polish')
                        .child(
                          S.documentList()
                            .title('Polish Offer Pages')
                            .filter('_type == "offerPage" && language == "pl"')
                        ),
                      S.listItem()
                        .title('English')
                        .child(
                          S.documentList()
                            .title('English Offer Pages')
                            .filter('_type == "offerPage" && language == "en"')
                        ),
                      S.listItem()
                        .title('German')
                        .child(
                          S.documentList()
                            .title('German Offer Pages')
                            .filter('_type == "offerPage" && language == "de"')
                        ),
                    ])
                ),

              // Contact Pages
              S.listItem()
                .title('Contact Pages')
                .child(
                  S.list()
                    .title('Contact Pages by Language')
                    .items([
                      S.listItem()
                        .title('Polish')
                        .child(
                          S.documentList()
                            .title('Polish Contact Pages')
                            .filter('_type == "contactPage" && language == "pl"')
                        ),
                      S.listItem()
                        .title('English')
                        .child(
                          S.documentList()
                            .title('English Contact Pages')
                            .filter('_type == "contactPage" && language == "en"')
                        ),
                      S.listItem()
                        .title('German')
                        .child(
                          S.documentList()
                            .title('German Contact Pages')
                            .filter('_type == "contactPage" && language == "de"')
                        ),
                    ])
                ),
            ])
        ),

      S.divider(),

      // Product Categories
      S.listItem()
        .title('Product Categories')
        .child(
          S.list()
            .title('Product Categories by Language')
            .items([
              S.listItem()
                .title('Polish')
                .child(
                  S.documentList()
                    .title('Polish Categories')
                    .filter('_type == "productCategory" && language == "pl"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                ),
              S.listItem()
                .title('English')
                .child(
                  S.documentList()
                    .title('English Categories')
                    .filter('_type == "productCategory" && language == "en"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                ),
              S.listItem()
                .title('German')
                .child(
                  S.documentList()
                    .title('German Categories')
                    .filter('_type == "productCategory" && language == "de"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                ),
            ])
        ),

      // Products
      S.listItem()
        .title('Products')
        .child(
          S.list()
            .title('Products by Language')
            .items([
              S.listItem()
                .title('Polish')
                .child(
                  S.documentList()
                    .title('Polish Products')
                    .filter('_type == "product" && language == "pl"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                ),
              S.listItem()
                .title('English')
                .child(
                  S.documentList()
                    .title('English Products')
                    .filter('_type == "product" && language == "en"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                ),
              S.listItem()
                .title('German')
                .child(
                  S.documentList()
                    .title('German Products')
                    .filter('_type == "product" && language == "de"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                ),
            ])
        ),

      S.divider(),

      // Brands
      S.listItem()
        .title('Brands')
        .child(
          S.list()
            .title('Brands by Language')
            .items([
              S.listItem()
                .title('Polish')
                .child(
                  S.documentList()
                    .title('Polish Brands')
                    .filter('_type == "brand" && language == "pl"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                ),
              S.listItem()
                .title('English')
                .child(
                  S.documentList()
                    .title('English Brands')
                    .filter('_type == "brand" && language == "en"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                ),
              S.listItem()
                .title('German')
                .child(
                  S.documentList()
                    .title('German Brands')
                    .filter('_type == "brand" && language == "de"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                ),
            ])
        ),

      // Partners (no language variants)
      S.listItem()
        .title('Partners')
        .child(
          S.documentList()
            .title('Partners')
            .filter('_type == "partner"')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),
    ])
