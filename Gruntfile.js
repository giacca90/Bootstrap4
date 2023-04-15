module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt , {
        useminPrepare: 'grunt-usemin'
    });
    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            files: ['css/*.scss'],
            tasks: ['css']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'css/*.css',
                        '*.html',
                        'js/*.js'
                    ]
                }
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['img/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist'
                }]
            }
        },
        clean: {
            build: {
                src: ['dist/']
            }
        },
        cssmin: {
            dist: { 
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css'],
                    dest: 'dist/css',
                    ext: '.css'
                }
            ]}
        },
        uglify: {
            dist: { 
                files: [{
                    expand: true,
                    cwd: 'js',
                    src: ['*.js'],
                    dest: 'dist/js',
                    ext: '.js'
                }
            ]}
        },
        filerev: {
            options: {
                encoding: 'utf8',
                algrithm: 'md5',
                length: 20
            },
            release: {
                files: [{
                    src: [
                        'dist/js/*.js',
                        'dist/css/*.css'
                    ]
                }]
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {}
        },
        useminPrepare: {
            foo: {
                steps: {
                    css: ['cssmin'],
                    js: ['uglufy']
                },
                post: {
                    css: [{
                        name: 'cssmin',
                        createConfig: function(context, block) {
                            var generated = context.options.generated;
                            generated.options = {
                                keepSpecialComment: 0,
                                rebase: false
                            }
                        }
                    }]
                }
            }
        },
        usemin: {
            html: ['dist/*.html'],
            options: {
                assetsDir: ['dist', 'dist/css', 'dist/js']
            }
        }
    });

    
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('img:compress', ['imagemin']);
    grunt.registerTask('build', [
        'clean',
        'copy',
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin'
    ])

}