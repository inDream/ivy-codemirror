/* jshint node: true */
'use strict';

module.exports = {
  name: 'ivy-codemirror',

  included: function(app) {
    var options = app.options.codemirror || {};
    var modes = options.modes || [];
    var themes = options.themes || [];

    app.import(app.bowerDirectory + '/codemirror/lib/codemirror.css');
    app.import(app.bowerDirectory + '/codemirror/lib/codemirror.js');
    app.import(app.bowerDirectory + '/codemirror/addon/mode/simple.js');
    app.import(app.bowerDirectory + '/codemirror/addon/mode/multiplex.js');
    app.import('vendor/htmlhandlebars.js');

    modes.forEach(function(mode) {
      app.import(app.bowerDirectory + '/codemirror/mode/' + mode + '/' + mode + '.js');
    });

    themes.forEach(function(theme) {
      app.import(app.bowerDirectory + '/codemirror/theme/' + theme + '.css');
    });

    app.import('vendor/ivy-codemirror/shims.js', {
      exports: {
        'codemirror': ['default']
      }
    });
  }
};
