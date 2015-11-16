module.exports = function(config) {
  config.set({
    basePath: ".",
    frameworks: ["jasmine"],
    browsers: ["Electron"],
    files: [
        { pattern: "./karma.shim.js", watched: true, included: true, served: true},
        { pattern: "./specs/*.js", watched: true, included: true, served: true },
        { pattern: "./src/*.js", watched: true, included: false, served: true },
    ]
  });
};