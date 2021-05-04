module.exports = {
    images: {
      loader: "imgix",
      path: "",
    },
    assetPrefix: process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : '',
    trailingSlash: true,
};