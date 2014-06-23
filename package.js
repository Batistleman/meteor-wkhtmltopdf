Package.describe({
  	summary: "Wkhtml impementation for Meteor apps."
});

Npm.depends({
  	"wkhtmltopdf": "0.1.4"
});

Package.on_use(function (api, where) {
  	api.add_files('wkhtmltopdf.js', 'server');
  	api.export(['wkhtmltopdf'], 'server');
});