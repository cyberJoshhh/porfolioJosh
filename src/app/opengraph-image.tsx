import { renderSocialImage } from "@/lib/socialImage";

// Next reads these three exports to build the og:image tags, so they are literals.
export const alt = "Joshua Diploma, full-stack developer for small businesses and schools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderSocialImage(size);
}
