import Head from "next/head";
import Typography, { GoogleFont } from "typography";
type NextTypographyProps = {
  typography: Typography;
  googleFontLoading?: "none" | "single" | "multiple";
};

const generateFontLinks = (
  fonts: GoogleFont[],
  loading: NextTypographyProps["googleFontLoading"]
) => {
  if (!fonts || !fonts.length || !loading || loading === "none") {
    return null;
  }

  if (loading === "multiple") {
    return (
      <>
        {fonts.map((font) => {
          const name = font.name.split(" ").join("+");
          const style = font.styles.join(",");
          return (
            <link
              href={`//fonts.googleapis.com/css?family=${name}:${style}`}
              rel="stylesheet"
              type="text/css"
            />
          );
        })}
      </>
    );
  }

  if (loading === "single") {
    const namesAndStyles = fonts
      .map((font) => {
        const name = font.name.split(" ").join("+");
        const style = font.styles.join(",");
        return `${name}:${style}`;
      })
      .join("|");

    return (
      <link
        href={`//fonts.googleapis.com/css?family=${namesAndStyles}`}
        rel="stylesheet"
        type="text/css"
      />
    );
  }

  if (process.env.NODE_ENV === "development") {
    console.warn(
      `Expected property \`googleFontLoading\` to be one of: "single", "multiple" or "none"`
    );
  }
  return null;
};

const NextTypography = ({
  typography,
  googleFontLoading,
}: NextTypographyProps) => {
  const style = typography.createStyles();
  const fontLinks = generateFontLinks(
    typography.options.googleFonts,
    googleFontLoading
  );
  return (
    <Head>
      <style
        id="typography.js"
        dangerouslySetInnerHTML={{
          __html: style,
        }}
      />
      {fontLinks}
    </Head>
  );
};

export default NextTypography;
