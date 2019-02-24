var request = require('request');

var url = 'https://rosebank.instructure.com/feeds/calendars/user_VjkmU5ODxKymLFNVtq51pRHNU6zQ1rZYIG09JgRR.ics';
request(url, function (error, response, body) {
  console.log('body:', body);
});