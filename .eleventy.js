const eleventyNavigation = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigation);

  const mdOpts = {
    html: true,
    breaks: false,
    linkify: true,
  };
  const mdLib = markdownIt(mdOpts)
    .use(require("markdown-it-abbr"))
    .use(require("markdown-it-footnote"))
    .use(require("markdown-it-anchor"));
  eleventyConfig.setLibrary("md", mdLib);

  eleventyConfig.addPassthroughCopy("css");
}