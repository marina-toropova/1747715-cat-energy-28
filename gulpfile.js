import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import autoprefixer from 'autoprefixer';
import terser from 'gulp-terser';
import squoosh from 'gulp-libsquoosh';
import { stacksvg } from 'gulp-stacksvg';
import browser from 'browser-sync';
import htmlmin from 'gulp-htmlmin';
import del from 'del';

// Styles

export const styles = () => {
  return gulp.src('source/less/style.less', { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('build/css', { sourcemaps: '.' }))
    .pipe(browser.stream());
}

// HTML

const html = () => {
  return gulp.src('source/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('build'));
  }

// Scripts

export const scripts = () => {
  return gulp.src('source/js/*.js')
  .pipe(terser())
  .pipe(gulp.dest('build/js'))
};

// Images

export const optimizeImages = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
  .pipe(squoosh())
  .pipe(gulp.dest('build/img'))
}

export const copyImages = () => {
  return gulp.src('source/img/**/*.{jpg,png}')
  .pipe(gulp.dest('build/img'))
}

// WebP

export const createWebp = () => {
  return gulp.src(['source/img/**/*.{jpg,png}', '!source/img/favicons/*.{jpg,png}'])
  .pipe(squoosh({
    webp: {}
  }))
  .pipe(gulp.dest('build/img'));
}

// SVG

export const svg = () =>
  gulp.src(['source/img/*.svg', 'source/icons/**/*.svg', '!source/img/favicons/*.svg'])
  .pipe(gulp.dest('build/img/'));

export const makeStack = () => {
	return gulp.src(['source/icons/**/*.svg', '!source/icons/stack.svg'])
		.pipe(stacksvg({ output: 'stack' }))
		.pipe(gulp.dest('build/icons'))
}

// Copy

export const copy = (done) => {
  gulp.src([
    'source/fonts/**/*.{woff2,woff}',
    'source/*.ico',
    'source/img/favicons/*.svg',
    '*.webmanifest',
  ], {
    base: 'source'
  })
  .pipe(gulp.dest('build'))
  done();
}

// Clean

export const clean = () => {
  return del('build');
};

// Server

export const server = (done) => {
  browser.init({
    server: {
      baseDir: 'build'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

// Reload

export const reload = (done) => {
  browser.reload();
  done();
}

// Watcher

const watcher = () => {
  gulp.watch('source/less/**/*.less', gulp.series(styles));
  gulp.watch('source/js/script.js', gulp.series(scripts));
  gulp.watch('source/*.html').on('change', browser.reload);
}

// Build

export const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    svg,
    makeStack,
    createWebp
  ),
);

// Default

export default gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    styles,
    html,
    scripts,
    svg,
    makeStack,
    createWebp
  ),
  gulp.series(
    server,
    watcher
  )
);
