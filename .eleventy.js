module.exports = function (eleventyConfig) {

  // Copy CSS through
  eleventyConfig.addPassthroughCopy("css");

  // Helper: safe sortable title
  function getArticleTitle(item) {
    if (!item.data.title) return "";
    if (typeof item.data.title === "string") return item.data.title;
    return item.data.title.article || "";
  }

  // Critical Theory collection
  eleventyConfig.addCollection("criticalTheory", function (collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.section === "critical-theory")
      .sort((a, b) =>
        getArticleTitle(a).localeCompare(getArticleTitle(b))
      );
  });

  // Poetry collection
  eleventyConfig.addCollection("poetryAnalysis", function (collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.section === "poetry")
      .sort((a, b) =>
        getArticleTitle(a).localeCompare(getArticleTitle(b))
      );
  });

  return {
    pathPrefix: "/",      // 👈 IMPORTANT for custom domain
    dir: {
      input: ".",
      output: "docs"      // GitHub Pages requirement
    }
  };
};
