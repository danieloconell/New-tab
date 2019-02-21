window.onload = function() {
  displayDate();
  httpGetAsync('http://167.99.104.240:5000/', getEvents);
  setInterval(function() {
    displayDate();
  }, 60000);
};

function displayDate() {
  var now = new Date();

  var weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  var month = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];

  switch (now.getDate()) {
    case 1:
      suffix = "st";
      break
    case 2:
      suffix = "nd";
      break
    case 3:
      suffix = "rd"
      break
    default:
      suffix = "th";
  }

  document.getElementById('date').innerHTML =
    weekday[now.getDay()] + ', ' + now.getDate() + suffix + ' ' + month[now.getMonth()];

  h = now.getHours();
  m = now.getMinutes();
  if (h < 10) h = '0' + h;
  if (m < 10) m = '0' + m;

  document.getElementById('time').innerHTML = h + ':' + m;
}

function getEvents(resp) {
  var obj = JSON.parse(resp);
  console.log(obj[0][2]);
  for (i = 0; i < Object.keys(obj).length; i++) {
    document.getElementById('event').innerHTML = obj[i][0];
    document.getElementById('event').title = obj[i][2];
    document.getElementById('event-date').innerHTML = obj[i][1];
  }
}

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
    else {
      console.log(theUrl, 'did not respond with a 200 status')
    }
  };
  xmlHttp.open('GET', theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}

// Mousetrap.bind('m', function() {
//   window.location.replace('https://rosebank.instructure.com/courses/794');
// });
// Mousetrap.bind('e', function() {
//   window.location.replace('https://rosebank.instructure.com/courses/794');
// });
// Mousetrap.bind('g', function() {
//   window.location.replace('https://rosebank.instructure.com/courses/794');
// });
// Mousetrap.bind('d', function() {
//   window.location.replace('https://rosebank.instructure.com/courses/794');
// });
