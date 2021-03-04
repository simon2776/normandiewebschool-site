module.exports = {
    plugins: {
        '@fullhuman/postcss-purgecss': {
            content: [
                './themes/nws-theme/layouts/**/*.html', 
                './themes/nws-theme/assets/js/*.js',
                './themes/nws-theme/static/js/*.js',
                './layouts/**/*.html',
                './static/js/*.js'
              ],
            whitelist: [
                'highlight',
                'language-bash',
                'pre',
                'video',
                'code',
                'content',
                'h3',
                'h4',
                'ul',
                'li'
            ]
        },
        autoprefixer: {},
        cssnano: {preset: 'default'}
    }
  };