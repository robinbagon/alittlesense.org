module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  // Helper for sorting titles
  function getArticleTitle(item) {
    if (!item.data.title) return "";
    return typeof item.data.title === "string"
      ? item.data.title
      : item.data.title.article || "";
  }

  eleventyConfig.addCollection("criticalTheory", function (collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.section === "critical-theory")
      .sort((a, b) => getArticleTitle(a).localeCompare(getArticleTitle(b)));
  });

  eleventyConfig.addCollection("poetryAnalysis", function (collectionApi) {
    return collectionApi.getAll()
      .filter(item => item.data.section === "poetry")
      .sort((a, b) => getArticleTitle(a).localeCompare(getArticleTitle(b)));
  });

  return {
    pathPrefix: "/alittlesense.org/",   // 👈 THIS IS THE KEY LINE
    dir: {
      input: ".",
      output: "docs"
    }
  };
};
