module.exports = {
    images: {
      loader: "imgix",
      path: "",
    },
    assetPrefix: process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '',
    trailingSlash: true,
    publicRuntimeConfig: {
      basePath: process.env.NODE_ENV === "production" ? "/PROJECT_NAME" : "",
    },
};