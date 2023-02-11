import type { GatsbySSR } from 'gatsby';
import React from 'react';

export const onRenderBody: GatsbySSR['onRenderBody'] = (
  { setHtmlAttributes, setPostBodyComponents },
) => {
  setHtmlAttributes({ lang: 'en' });
  setPostBodyComponents(
    [
      <script key="stats" defer data-domain="peloso.nl" src="https://plausible.io/js/script.js" />,
    ],
  );
};
