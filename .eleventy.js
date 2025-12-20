module.exports = function (eleventyConfig) {

  // Copy CSS folder to output
  eleventyConfig.addPassthroughCopy("css");

  // Helper: get a sortable title string
  function getSortableTitle(item) {
    if (!item.data || !item.data.title) return "";

    if (typeof item.data.title === "string") {
      return item.data.title;
    }

    // title object: { article, book }
    return item.data.title.article || item.data.title.book || "";
  }

  // Collection: Critical Theory
  eleventyConfig.addCollection("criticalTheory", function (collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.section === "critical-theory")
      .sort((a, b) =>
        getSortableTitle(a).localeCompare(getSortableTitle(b))
      );
  });

  // Collection: Poetry Analysis
  eleventyConfig.addCollection("poetryAnalysis", function (collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.section === "poetry")
      .sort((a, b) =>
        getSortableTitle(a).localeCompare(getSortableTitle(b))
      );
  });

  return {
    dir: {
      input: ".",
      output: "docs" // ✅ GitHub Pages compatible
    }
  };
};
