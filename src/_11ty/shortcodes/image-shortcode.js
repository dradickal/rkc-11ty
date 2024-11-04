import Image from "@11ty/eleventy-img";

export default async function imageShortcode (src, alt, sizes, classes, loading = 'lazy') {
  let metadata = await Image(src, {
    widths: [25, 320, 640, 960, 1200, 1800, 2400],
    formats: ['webp', 'jpeg'],
    urlPath: '/assets/img/',
    outputDir: 'dist/assets/img/',
  });

  let imageAttributes = {
    class: classes,
    alt,
    sizes,
    loading,
    decoding: 'async',
  };

  return Image.generateHTML(metadata, imageAttributes);
}