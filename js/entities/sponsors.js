/**
 * Created by k33g_org on 26/03/15.
 */

var App = (function (app) {

  app.Models.Sponsor = speculoos.Class({
    constructor: function Sponsor() {}
  });

  app.Collections.Sponsors = speculoos.Class({
    extends: App.Core.Collection,
    constructor: function Sponsors() {
      this.url = 'http://www.mix-it.fr/api/members/sponsors?callback=?';
    }
  });

  return app;
}(App));
