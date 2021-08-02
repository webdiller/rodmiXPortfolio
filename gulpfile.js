const gulp = require('gulp');
const pug = require('gulp-pug');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const browserSync = require('browser-sync').create();
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');
const webp = require('gulp-webp');
const runTimestamp = Math.round(Date.now() / 1000);

var fontName = 'Icons';

const paths = {
  root: './dist',
  templates: {
    pages: './src/views/pages/*.html',
    src: './src/views/**/*.html',
    dest: './dist'
  },
  styles: {
    main: './src/assets/styles/main.scss',
    src: './src/assets/styles/**/*.scss',
    dest: './dist/assets/styles'
  },
  scripts: {
    src: './src/assets/scripts/*.js',
    dest: './dist/assets/scripts/'
  },
  fonts: {
    src: './src/assets/fonts/*',
    dest: './dist/assets/fonts/'
  },
  fontsIcons: {
    dest: './dist/assets/fontsIcons/'
  },
  images: {
    src: './src/assets/images/*',
    dest: './dist/assets/images/'
  },
  icons: {
    src: './src/assets/icons/*',
    dest: './dist/assets/icons/'
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
  browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
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
  return gulp.src(paths.templates.pages).pipe(gulp.dest(paths.root));
}

// scss
function styles() {
  return gulp
    .src(paths.styles.main)
    .pipe(sourcemaps.init())
    .pipe(postcss(require('./postcss.config')))
    .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(paths.styles.dest));
}

// webpack
function scripts() {
  return gulp.src(paths.scripts.src).pipe(gulpWebpack(webpackConfig, webpack)).pipe(gulp.dest(paths.scripts.dest));
}

// fonts (экспорт в dist)
function replaceFonts() {
  return gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dest));
}

// images (экспорт в dist)
function replaceImages() {
  return gulp.src(paths.images.src).pipe(gulp.dest(paths.images.dest));
}

// imagesAddWebp (генерация в webp и экспорт в dist)
function replaceImagesWithWebp() {
  return gulp.src(paths.images.src).pipe(webp()).pipe(gulp.dest(paths.images.dest));
}

// icons (экспорт в dist)
function replaceIcons() {
  return gulp.src(paths.icons.src).pipe(gulp.dest(paths.icons.dest));
}

// TODO: сделать генерацию иконок, чтобы в dist/assets/fonts/ бии отдельные файлы шрифтовых иконокы
// icons (генерация шрифтовых иконок из svg) еще не готово
function createIconsFromSvg() {
  return gulp
    .src(['./src/assets/images/*.svg'])
    .pipe(
      iconfontCss({
        fontName,
        normalize: true,
        path: './src/assets/styles/_icons.css', // path to config file
        fontPath: './', // path for root path
        targetPath: './iconsfonts.css'
      })
    )
    .pipe(
      iconfont({
        fontName,
        normalize: true,
        prependUnicode: true
      })
    )
    .pipe(gulp.dest('./src/assets/fonts/'));
}

// exports.templates = templates;
exports.templatesHtml = templatesHtml;
exports.styles = styles;
exports.scripts = scripts;
exports.createIconsFromSvg = createIconsFromSvg;
exports.replaceFonts = replaceFonts;
exports.replaceImages = replaceImages;
exports.replaceImagesWithWebp = replaceImagesWithWebp;
exports.replaceIcons = replaceIcons;
exports.clean = clean;

gulp.task('default', gulp.series(clean, replaceImages, replaceImagesWithWebp, gulp.parallel(styles, templatesHtml, scripts, replaceFonts, replaceIcons), gulp.parallel(watch, server)));
