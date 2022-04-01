module.exports = {
  plugins: [
    require('autoprefixer')({
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 8",
        "Chrome > 31",
        "ff > 31",
        "ie >= 10"
    ],grid: true})

  ]
}
