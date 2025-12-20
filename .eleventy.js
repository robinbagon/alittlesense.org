module.exports = function(eleventyConfig) {
  // Copy CSS folder to output
  eleventyConfig.addPassthroughCopy("css");

  // Helper function to get sortable title
  function getArticleTitle(item) {
    if (!item.data.title) return ""; // no title
    return typeof item.data.title === "string" ? item.data.title : item.data.title.article || "";
  }

  // Collection: Critical Theory
  eleventyConfig.addCollection("criticalTheory", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.section === "critical-theory")
      .sort((a, b) => getArticleTitle(a).localeCompare(getArticleTitle(b)));
  });

  // Collection: Poetry Analysis
  eleventyConfig.addCollection("poetryAnalysis", function(collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.section === "poetry")
      .sort((a, b) => getArticleTitle(a).localeCompare(getArticleTitle(b)));
  });

  return {
    dir: {
      input: ".",      // your content root
      output: "_site"  // Eleventy output folder
    }
  };
};
