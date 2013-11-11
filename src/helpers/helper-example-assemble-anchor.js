(function() {
  module.exports.register = function(Handlebars, options) {

    /*
     * Example helper.
     */
    Handlebars.registerHelper('example-assemble-anchor', function(str) {
      var content = '<strong>' + str + '</strong>';
      return new Handlebars.SafeString(content);
    });

  };
}).call(this);
