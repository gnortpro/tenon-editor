module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/auth/login': ['auth'],
    '/auth/register': ['auth'],
    '/auth/forgot-password': ['auth'],
    '/auth/reset-password': ['auth'],
  },
  interpolation: {
    prefix: '${',
    suffix: '}',
  },
  loadLocaleFrom: (locale, namespace) => import(`./locales/${locale}/${namespace}`).then(m => m.default),
};
