/**
 * Created by k33g_org on 26/03/15.
 */

var App = (function (app) {

  app.Models.StaffMember = speculoos.Class({
    constructor: function StaffMember() {}
  });

  app.Collections.Staff = speculoos.Class({
    extends: App.Core.Collection,
    constructor: function Staff() {
      this.url = 'http://www.mix-it.fr/api/members/staff?callback=?';
    }
  });

  return app;
}(App));
