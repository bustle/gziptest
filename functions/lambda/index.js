var zlib = require('zlib');

exports.handler = (event, context, callback) => {
    console.log(JSON.stringify(event))
    console.log(JSON.stringify(context))
    var resp = zlib.gzipSync('this is a test of gzip')
    callback(null, resp.toString('base64'))
};
