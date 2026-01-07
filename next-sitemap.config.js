/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://milagros-lasschar-portfolio.netlify.app',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,      
  exclude: [],

  // Configuración específica por ruta
  transform: async (config, url) => {
    let priority = 0.7;
    let changefreq = 'monthly';

    if (url.endsWith('#home')) {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (url.endsWith('#about')) {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (url.endsWith('#projects')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (url.endsWith('#contact')) {
      priority = 0.6;
      changefreq = 'monthly';
    }

    return {
      loc: url,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
}
