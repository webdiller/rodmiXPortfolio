const gulp = require("gulp");
const pug = require("gulp-pug");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const del = require("del");
const gulpWebpack = require("gulp-webpack");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const browserSync = require("browser-sync").create();
const iconfont = require("gulp-iconfont");
const runTimestamp = Math.round(Date.now() / 1000);

const paths = {
  root: "./dist",
  templates: {
    pages: "./src/views/pages/*.html",
    src: "./src/views/**/*.html",
    dest: "./dist",
  },
  styles: {
    main: "./src/assets/styles/main.scss",
    src: "./src/assets/styles/**/*.scss",
    dest: "./dist/assets/styles",
  },
  scripts: {
    src: "./src/assets/scripts/*.js",
    dest: "./dist/assets/scripts/",
  },
  fonts: {
    src: "./src/assets/fonts/*",
    dest: "./dist/assets/fonts/"
  },
  images: {
    src: "./src/assets/images/*",
    dest: "./dist/assets/images/"
  },
  icons: {
    src: "./src/assets/icons/*",
    dest: "./dist/assets/icons/"
  }
};

// слежка
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.templates.src, templatesHtml);
  gulp.watch(paths.scripts.src, scripts);
}

// следим за build и релоадим браузер
function server() {
  browserSync.init({
    server: paths.root,
    notify: false
  });
  browserSync.watch(paths.root + "/**/*.*", browserSync.reload);
}

// очистка
function clean() {
  return del(paths.root);
}

// pug
function templates() {
  return gulp
    .src(paths.templates.pages)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(paths.root));
}

// html
function templatesHtml() {
  return gulp
    .src(paths.templates.pages)
    .pipe(gulp.dest(paths.root));
}

// scss
function styles() {
  return gulp
    .src(paths.styles.main)
    .pipe(sourcemaps.init())
    .pipe(postcss(require("./postcss.config")))
    .pipe(sourcemaps.write())
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest(paths.styles.dest));
}

// webpack
function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest(paths.scripts.dest));
}

// fonts 
function replaceFonts () {
  return gulp
  .src(paths.fonts.src)
  .pipe(gulp.dest(paths.fonts.dest))
}

// images 
function replaceImages () {
  return gulp
  .src(paths.images.src)
  .pipe(gulp.dest(paths.images.dest))
}

// icons 
function replaceIcons () {
  return gulp
  .src(paths.icons.src)
  .pipe(gulp.dest(paths.icons.dest))
}

// icons
// function icons() {
//   return gulp
//     .src(["src/assets/images/*.svg"])
//     .pipe(
//       iconfont({
//         fontName: 'fontName',
//         prependUnicode: true,
//         formats: ["ttf", "eot", "woff"],
//         timestamp: runTimestamp,
//       })
//     )
//     .on("glyphs", function (glyphs, options) {
//       console.log(glyphs, options);
//     })
//     .pipe(gulp.dest(paths.fonts.dist));
// }
// icons

// exports.templates = templates;
exports.templatesHtml = templatesHtml;
exports.styles = styles;
exports.scripts = scripts;
exports.replaceFonts = replaceFonts;
exports.replaceImages = replaceImages;
exports.replaceIcons = replaceIcons;
exports.clean = clean;

gulp.task(
  "default",
  gulp.series(
    clean,
    gulp.parallel(styles, templatesHtml, scripts, replaceFonts, replaceImages, replaceIcons),
    gulp.parallel(watch, server)
  )
);
