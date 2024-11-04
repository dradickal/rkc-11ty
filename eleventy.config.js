import eleventyNavigation from "@11ty/eleventy-navigation";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import imageShortcode from "./src/_11ty/shortcodes/image-shortcode.js";
import markdownLibrary from "./src/_11ty/libraries/markdown-library.js";
import { readableDateFilter, machineDateFilter } from "./src/_11ty/filters/date-filters.js";
import svgFilter from "./src/_11ty/filters/svg-filter.js";
import markdownFilter from "./src/_11ty/filters/markdown-filter.js";

export default function(eleventyConfig) {
	// Plugins
	eleventyConfig.addPlugin(eleventyNavigation);
	eleventyConfig.addPlugin(syntaxHighlight);

	 // Filters
	 eleventyConfig.addFilter('markdown', markdownFilter);
	 eleventyConfig.addFilter('readableDate', readableDateFilter);
	 eleventyConfig.addFilter('machineDate', machineDateFilter);
	 eleventyConfig.addFilter('svg', svgFilter);

	// Libraries
	eleventyConfig.setLibrary('md', markdownLibrary);

	// Shortcodes
	eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);

	// Trigger a build when files in this directory change
	eleventyConfig.addWatchTarget('./src/assets/scss/');

	// Don't process static assets
	eleventyConfig.addPassthroughCopy('./src/favicon.ico');
	eleventyConfig.addPassthroughCopy('./src/admin');
	eleventyConfig.addPassthroughCopy('./src/assets/img');
};

export const config = {
	templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
	dir: {
	  input: "src",
	  output: "dist",
	  layouts: "_layouts",
	}
  };
