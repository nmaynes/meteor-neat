Package.describe({
  name: "wolves:neat",
  summary: "Meteor 0.9.x - A lightweight, semantic grid framework built on top of Bourbon.",
  version: "0.4.0",
  git: "https://github.com/wolvesio/meteor-neat"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('fourseven:scss@0.9.5');
  api.addFiles([
    "_neat.scss",
    // Helpers
    "_neat-helpers.scss",
    //Functions
    "functions/_new-breakpoint.scss",
    "functions/_private.scss",
    // Grid
    "grid/_private.scss",
    "grid/_reset.scss",
    "grid/_grid.scss",
    "grid/_omega.scss",
    "grid/_outer-container.scss",
    "grid/_span-columns.scss",
    "grid/_row.scss",
    "grid/_shift.scss",
    "grid/_pad.scss",
    "grid/_fill-parent.scss",
    "grid/_media.scss",
    "grid/_to-deprecate.scss",
    "grid/_visual-grid.scss",
    //Settings
    "settings/_grid.scss",
    "settings/_visual-grid.scss"
  ], 'server', {
    isAsset: true
  });
});
