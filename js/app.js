/**
 * Created by k33g_org on 26/03/15.
 */

var App = (function () {

  var app = {
    Core: {},
    Models: {},
    Collections: {}
  };

  app.init = function() {
    riot.mount("mixit-title");

    riot.mount("mixit-speakers",{
      speakers: new App.Collections.Speakers()
    });

    riot.mount("mixit-sponsors",{
      sponsors: new App.Collections.Sponsors()
    });

  }

  return app;
}());

