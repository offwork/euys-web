/* eslint-disable @typescript-eslint/no-explicit-any */
export const availableLangs = ['tr', 'en'];

export const translationScopeLoader = (importer: any, root = 'i18n') => {
  return availableLangs.reduce((acc: any, lang) => {
    acc[lang] = () => importer(lang, root);
    return acc;
  }, {});
};
