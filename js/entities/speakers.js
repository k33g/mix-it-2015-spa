/**
 * Created by k33g_org on 26/03/15.
 */

/*
use:
 speakers = new App.Collections.Speakers()
 speakers.fetch().then(function() { console.log(speakers.items);})
 */

var App = (function (app) {

  app.Models.Speaker = speculoos.Class({
    constructor: function Speaker() {}
  });

  app.Collections.Speakers = speculoos.Class({
    extends: App.Core.Collection,
    constructor: function Speakers() {
      this.url = 'http://www.mix-it.fr/api/members/speakers?callback=?';
    }
  });

  return app;
}(App));

