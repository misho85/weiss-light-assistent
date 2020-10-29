const base = {
  name: `Weiss Light`, // Site name.
  title: `Weiss Light Calculator`, // Site title.
  url: `https://www.weisslight.eu/`, // Domain of your website.
};

const config = {
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

  googleAnalyticsID: `G-Q279M8VWXY`, // googleAnalyticsID gtag tracking ID.

  keywords: `LED rasveta,asistent,weiss light,lumen,lux`,

  pathname: `weiss-light-assistant/calculator`,
};

export default config;
