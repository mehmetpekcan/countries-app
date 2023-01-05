function SeoHead({
  title,
  description,
  keywords,
  type,
  url,
  image,
  canonical,
}) {
  return (
    <>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta name="description" content={description} />
      <meta name="author" content="Mehmet Pekcan" />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      <link rel="canonical" href={canonical} />
    </>
  );
}

export { SeoHead };
