exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    if (page.path.match(/^\/blog/)) {
    page.matchPath = "/blog/:path";
    createPage(page);
    }
    
  };