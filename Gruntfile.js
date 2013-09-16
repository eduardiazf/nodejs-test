module.exports = function (grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            app: {
                src: ['app/{,*/}*.js']
            },
            test: {
                src: ['test/*.js']
            }
        },
        mochacli: {
            options: {
                bail: true,
                debug: true,
                files: ['test/*.js']
            },
            spec: {
                options: {
                    reporter: 'spec'
                }
            },
            nyan: {
                options: {
                    reporter: 'nyan'
                }
            }
        },
        watch: {
            files: ['app/{,*/}*.js', 'test/*.js'],
            tasks: ['jshint:app', 'jshint:test', 'mochacli:nyan']
        }
    });

    grunt.registerTask('test', ['jshint:app', 'jshint:test', 'mochacli:nyan']);
    grunt.registerTask('travis', ['jshint:app', 'jshint:test', 'mochacli:spec']);
};
