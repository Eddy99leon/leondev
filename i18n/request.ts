import { getRequestConfig } from 'next-intl/server';

const locales = ['fr', 'en'];
const defaultLocale = 'fr';

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale =
    locale && locales.includes(locale)
      ? locale
      : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../messages/${resolvedLocale}.json`)).default
  };
});