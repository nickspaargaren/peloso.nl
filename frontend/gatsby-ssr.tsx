import type { GatsbySSR } from 'gatsby';
import React from 'react';

export const onRenderBody: GatsbySSR['onRenderBody'] = (
  { setHtmlAttributes, setPostBodyComponents },
) => {
  setHtmlAttributes({ lang: 'en' });
  setPostBodyComponents(
    [
      <script key="stats" defer data-domain="peloso.nl" data-api="/stats/api/event" src="/stats/js/script.js" />,
    ],
  );
};
