Add [Typography.js](https://kyleamathews.github.io/typography.js/) styles to your [Next JS](https://nextjs.org/) application in the simplest possible way.

## Getting started

```shell
yarn add next-typography
```

**_`pages/_app.jsx`_**

```jsx
import NextTypography from "next-typography";
import typography from "my/typography/setup";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextTypography typography={typography} />
      <Component {...pageProps} />
    </>
  );
}
```

## Loading Google Fonts

You can load your Google fonts via this component too. There are 3 settings to font loading provided via the `googleFontLoading` property:

1. "none" (default) - No fonts will be loaded
2. "single" - append a single `<link />` element. This option can be faster with traditional HTTP(S) connections, however there are caveats:
   1. HTTP2 can load your fonts in parallel, potentially descreasing time to load depending on the amount of fonts you're loading.
   2. The likelihood of the request being served from cache (due to a different website loading the same fonts) decreases drastically.
3. "multiple" - append a `<link />` element for each Google Font to be loaded.

### Example

**_`pages/_app.jsx`_**

```jsx
import NextTypography from "next-typography";
import typography from "my/typography/setup";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextTypography typography={typography} googleFontLoading="multiple" />
      <Component {...pageProps} />
    </>
  );
}
```
