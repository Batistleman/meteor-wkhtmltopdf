function WkHtmlToPdf() {};

WkHtmlToPdf.prototype.writeToStream = function(website, options, stream) {
	var headers = {
		'Content-type': 'application/pdf',
		'Content-Disposition': "attachment; filename=test.pdf"
	};

	stream.writeHead(200, headers);

	var asyncWkHtmlToPdfFunc = function(async_website, async_stream, callback) {

		var wk = Npm.require('wkhtmltopdf');
		var r = wk(async_website).pipe(async_stream);

		r.on('close', function() {
			callback(null, "test");
		});
	};

	var syncWkHtmlToPdfFunc = Meteor._wrapAsync(asyncWkHtmlToPdfFunc);

	syncWkHtmlToPdfFunc(website, stream);
};

var wkRenderer = new WkHtmlToPdf();