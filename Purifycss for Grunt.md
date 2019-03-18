# Purify Css Plugin for Grunt
--------
``npm install grunt-purifycss --save-dev``
```
grunt.initConfig({
   
    purifycss: {
        options: {
            minify: true
        },
        target: {
            src: [
                'includes/*.php',
                'includes/**/*.php',
                'includes/**/**/*.php',

                'templates/*.php',
                'templates/**/*.php',
                'templates/**/**/*.php',

            ],
            css: ['assets/css/*.css'],
            dest: 'assets/purestyles.css'
        }
    },
});
   ```
``grunt.loadNpmTasks('grunt-purifycss');``

``grunt purifycss``   		
   		