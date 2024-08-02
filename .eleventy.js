const { DateTime } = require('luxon')
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
    .use(require("./_lib/markdown-it-abbr"))
    .use(require("markdown-it-footnote"))
    .use(require("markdown-it-anchor"));
  eleventyConfig.setLibrary("md", mdLib);

  eleventyConfig.addShortcode("authorName", (author) => {
    if(typeof(author) === "string") {
      return author;
    }
    if(typeof(author) === "object") {
      if(typeof(author.name) !== "string") {
        return "Unknown";
      }
      let output = "";

      if(typeof(author.email) === "string") {
        output = `<a href="mailto:${author.email}">${author.name}</a>`;
      } else {
        output = author.name;
      }

      if(typeof(author.pronouns) === "string") {
        output += ` (${author.pronouns})`;
      }

      return output;
    }

    return "Unknown";
  })

  eleventyConfig.addFilter("date", (string, format) => {
    // Enable special `now` value
    const dateObject = (string === 'now') ? DateTime.local().toJSDate() : string

    // Convert dateObj to Luxon DateTime object, using UTC
    // See: https://11ty.dev/docs/dates/#dates-off-by-one-day
    let date = DateTime.fromJSDate(dateObject, {
      locale: 'en-GB',
      zone: 'utc'
    })

    if (format) {
      // Format date if formatting tokens provided
      // See: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
      date = DateTime.fromISO(date).toFormat(format)
    } else {
      // Format date as ISO 8601
      date = date.toISO()
    }

    return date
  })

  eleventyConfig.addPassthroughCopy("css");
}