import '!style-loader!css-loader!sass-loader!./preview.scss';
import { addParameters, addDecorator, componentWrapperDecorator } from '@storybook/angular';
import { DocsPage, DocsContainer } from "@storybook/addon-docs";

export const parameters = {
  /* angularLegacyRendering: true, */
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { hideNoControlsWarning: true },
  docs: {
    inlineStories: true,
  },
  layout: 'centered',
};

addDecorator(componentWrapperDecorator((story) => `<div class="flex justify-center gap-x-20">${story}</div>`));

addParameters({
  ...parameters.docs,
  container: DocsContainer,
  page: DocsPage,
});
