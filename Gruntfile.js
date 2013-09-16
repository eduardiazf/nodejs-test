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
                reporter: 'nyan'
            },
            all: ['test/*.js']
        },
        watch: {
            files: ['app/{,*/}*.js', 'test/*.js'],
            tasks: ['jshint:app', 'jshint:test', 'mochacli']
        }
    });

    grunt.registerTask('test', ['jshint:app', 'jshint:test', 'mochacli']);
};
