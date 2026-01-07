/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://milagros-lasschar-portfolio.netlify.app',
  generateRobotsTxt: true, // genera robots.txt automáticamente
  changefreq: 'monthly',   // ctiempo carga de pagina
  priority: 0.7,           // prioridad general
  sitemapSize: 5000,       // cantidad máxima de URLs por sitemap
  exclude: [],             // si hay páginas que NO quiero incluir, van acá
}
