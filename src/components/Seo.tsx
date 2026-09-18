import { Helmet } from "react-helmet-async";
import { site } from "@/data/site";
import { ogImage } from "@/assets/images";

interface Props {
  title: string;
  description: string;
  path?: string;
}

export default function Seo({ title, description, path = "/" }: Props) {
  const fullTitle = `${title} | ${site.name}`;
  const origin = "https://www.elecmech.example";
  const url = `${origin}${path}`;
  const imageUrl = ogImage.startsWith("http") ? ogImage : `${origin}${ogImage}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
