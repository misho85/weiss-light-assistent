const base = {
  name: `Weiss Light`, // Site name.
  title: `Weiss Light Assistant`, // Site title.
  url: `https://www.weisslight.eu/`, // Domain of your website.
};

module.exports = {
  /* meta tags */
  siteName: base.name,
  siteTitle: `${base.title} - ${base.name}`,
  siteDescription: `Izračunajte koliko Vam je LED rasvete potrebno da biste osvetlili prostor i koliko ćete uštedeti sa Weiss Light LED proizvodima.`, // Manifest `description`

  htmlLang: 'sr-RS',
  ogLang: 'sr_RS',

  /* url */
  siteUrl: base.url, // Domain of your site.

  /* social */
  siteBanner: `banner.jpg`, // Logo used for SEO.

  googleAnalyticsID: ``, // googleAnalyticsID gtag tracking ID.

  keywords: `LED rasveta,asistent,weiss light,lumen,lux`,

  pathname: `assistant`,
};
