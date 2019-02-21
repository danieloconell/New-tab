var request = require('request'),
fs = require('fs');

var url2 = 'https://rosebank.instructure.com/feeds/calendars/user_VjkmU5ODxKymLFNVtq51pRHNU6zQ1rZYIG09JgRR.ics';

var r = request(url2);

r.on('response',  function (res) {
  res.pipe(fs.createWriteStream('./' + res.headers.date + '.' + res.headers['content-type'].split('/')[1]));

});