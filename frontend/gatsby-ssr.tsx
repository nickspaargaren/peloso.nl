import type { GatsbySSR } from 'gatsby';
import React from 'react';

export const onRenderBody: GatsbySSR['onRenderBody'] = (
  { setHtmlAttributes, setPostBodyComponents },
) => {
  setHtmlAttributes({ lang: 'en' });
  setPostBodyComponents(
    [
      <script key="stats" defer src="/stats/js/script.js" data-api="/stats/api/event" data-domain="peloso.nl" />,
    ],
  );
};
