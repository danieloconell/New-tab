window.onload = function () {
  displayDate();
  getTasks('homework');
  getTasks('assessments');
  setInterval(displayDate, 10000)
}

var dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
var timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false };

function displayDate() {
  var now = new Date(Date.now());
  time = now.toLocaleTimeString('en-AU', timeOptions);
  date = now.toLocaleDateString('en-AU', dateOptions);

  document.getElementById('date').innerHTML = date;
  document.getElementById('time').innerHTML = time;
}

function getTasks(work) {
  initial = localStorage.getItem(work);
  document.querySelector('#' + work).value = initial;
  setInterval(function () {
    localStorage.setItem(work, document.querySelector('#' + work).value);
  }, 1000)
}

// function getEvents(resp) {
//   var obj = JSON.parse(resp);
//   console.log(obj[0][2]);
//   for (i = 0; i < Object.keys(obj).length; i++) {
//     document.getElementById('event').innerHTML = obj[i][0];
//     document.getElementById('event').title = obj[i][2];
//     document.getElementById('event-date').innerHTML = obj[i][1];
//   }
// }

// function httpGetAsync(theUrl, callback) {
//   var xmlHttp = new XMLHttpRequest();
//   xmlHttp.onreadystatechange = function () {
//     if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//       callback(xmlHttp.responseText);
//     else {
//       console.log(theUrl, 'did not respond with a 200 status')
//     }
//   };
//   xmlHttp.open('GET', theUrl, true); // true for asynchronous
//   xmlHttp.send(null);
// }