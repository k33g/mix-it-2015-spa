/**
 * Created by k33g_org on 26/03/15.
 */

/*
 http://www.mix-it.fr/article/40/wanna-hack-mix-it-
 */

var App = (function (app) {

  app.Core.Collection = speculoos.Class({
    constructor: function Collection() {
      // foo
    },
    fetch: function() {
      var self = this;
      return $.ajax({
        type: 'GET',
        url: self.url,
        async: false,
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(json) {
          self.items = json;
          return json;
        },
        error: function(err) {
          self.items = [];
          return err;
        }
      });
    }
  });

  return app;
}(App));