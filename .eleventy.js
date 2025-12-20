module.exports = function (eleventyConfig) {

  // Copy CSS folder to output
  eleventyConfig.addPassthroughCopy("css");

  // Helper to get sortable title
  function getSortableTitle(item) {
    if (!item.data.title) return "";
    if (typeof item.data.title === "string") return item.data.title;
    return item.data.title.article || item.data.title.book || "";
  }

  // Critical Theory collection
  eleventyConfig.addCollection("criticalTheory", function (collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.section === "critical-theory")
      .sort((a, b) =>
        getSortableTitle(a).localeCompare(getSortableTitle(b))
      );
  });

  // Poetry Analysis collection
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
      output: "docs" // IMPORTANT for GitHub Pages
    }
  };
};
