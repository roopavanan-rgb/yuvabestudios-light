const defaultSiteUrl = "https://www.yuvabestudios.com";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;
export const siteMetadataBase = new URL(siteUrl);

export function getAbsoluteUrl(path = "/") {
  return new URL(path, siteMetadataBase).toString();
}
