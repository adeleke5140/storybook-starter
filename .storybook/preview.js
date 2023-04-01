import "../src/index.css";

import { initialize, mswDecorator } from "msw-storybook-addon";

initialize();

//I see a decorator as an external source of data we use in our stories but that might not be entirely accurate
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
