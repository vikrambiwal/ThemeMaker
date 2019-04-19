'use strict';

class ThemeController {
  index({ view }) {
    return view.render('theme');
  }
}

module.exports = ThemeController;
