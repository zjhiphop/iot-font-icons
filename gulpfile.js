const gulp = require('gulp')
const rename = require('gulp-rename')
const sketch = require('gulp-sketch')
const iconfont = require('gulp-iconfont')
const consolidate = require('gulp-consolidate')
const bs = require('browser-sync').create()

/**
 * Font settings
 */
const fontName = 'symbols' // set name of your symbol font
const className = 's' // set class name in your CSS
const template = 'fontawesome-style' // or 'foundation-style'
const skethcFileName = 'assets/sketch/smart-house-icon-set.sketch' // or 'symbol-font-16px.sketch'

/**
 * Recommended to get consistent builds when watching files
 * See https://github.com/nfroidure/gulp-iconfont
 */
const timestamp = Math.round(Date.now() / 1000)

gulp.task('svg', ()=> {
  gulp.src(skethcFileName)
    .pipe(sketch({
      export: 'slices',
      formats: 'svg'
    }))
    .pipe(gulp.dest('./assets/svg/'));
});

let build = (exportType) => {
  gulp.src(skethcFileName)
      .pipe(sketch({
        export: exportType || 'artboards',
        formats: 'svg'
      }))
      .pipe(iconfont({
        fontName,
        formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'],
        timestamp,
        log: () => {} // suppress unnecessary logging
      }))
      .on('glyphs', (glyphs) => {
        const options = {
          className,
          fontName,
          fontPath: '../fonts/', // set path to font (from your CSS file if relative)
          glyphs: glyphs.map(mapGlyphs)
        }
        gulp.src(`templates/${template}.css`)
          .pipe(consolidate('lodash', options))
          .pipe(rename({ basename: fontName }))
          .pipe(gulp.dest('dist/web/css/')) // set path to export your CSS

        // if you don't need sample.html, remove next 4 lines
        gulp.src(`templates/${template}.html`)
          .pipe(consolidate('lodash', options))
          .pipe(rename({ basename: 'sample' }))
          .pipe(gulp.dest('dist/web/')) // set path to export your sample HTML
      })
      .pipe(gulp.dest('dist/web/fonts/')) // set path to export your fonts
}

gulp.task('symbols', () =>{
  build('artboards');
})

gulp.task('slice-symbols', () =>{
  build('slices');
})

gulp.task('watch', ['symbols'], () => {
  bs.init({
    files: 'dist/web/sample.html',
    server: 'dist/web/',
    startPath: '/sample.html',
    middleware: cacheControl
  })
  gulp.watch('*.sketch', ['symbols'])
})

/**
 * This is needed for mapping glyphs and codepoints.
 */
function mapGlyphs (glyph) {
  return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) }
}

/**
 * This keeps browser from caching fonts for your testing environment
 */
function cacheControl (req, res, next) {
  res.setHeader('Cache-control', 'no-store')
  next()
}
