require.config({

    baseUrl: "/scripts",

    /* starting point for application */
    deps: ['backbone.marionette', 'bootstrap', 'main', 'bootstrap-select'],


    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    },

    paths: {
        jquery: '../bower_components/jquery/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',

        /* alias all marionette libs */
        'backbone.marionette': '../bower_components/marionette/lib/core/backbone.marionette',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        /* alias the bootstrap js lib */
        bootstrap: 'vendor/bootstrap',
        'bootstrap-select': '../bower_components/bootstrap-select/dist/js/bootstrap-select',

        /* Alias text.js for template loading and shortcut the templates dir to tmpl */
        text: '../bower_components/requirejs-text/text',
        tmpl: "../templates",

        /* handlebars from the require handlerbars plugin below */
        handlebars: '../bower_components/require-handlebars-plugin/Handlebars',

        /* require handlebars plugin - Alex Sexton */
        i18nprecompile: '../bower_components/require-handlebars-plugin/hbs/i18nprecompile',
        json2: '../bower_components/require-handlebars-plugin/hbs/json2',
        hbs: '../bower_components/require-handlebars-plugin/hbs',

        /* Our libraries */
        Filter: "libs/filter",
        DataNormalizer: "libs/data_normalizer",
        TitleGenerator : "libs/title_generator", 
        Dictionary: "libs/dictionary",
        Tabletop: "libs/tabletop",
        GoogleDoc: "libs/GoogleDocSpreadsheet",
        TreeMap: "libs/treemap"

    },

    hbs: {
        disableI18n: true
    }
});
