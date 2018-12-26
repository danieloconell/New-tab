from flask import Flask, jsonify, Response
from requests import get
from ics import Calendar

app = Flask(__name__)

cal_url = "https://rosebank.instructure.com/feeds/calendars/user_VjkmU5ODxKymLFNVtq51pRHNU6zQ1rZYIG09JgRR.ics"


@app.route("/")
def index():
    c = Calendar(get(cal_url).text)
    response = jsonify(
        {
            index: [event.name, event.begin.humanize(), event.description]
            for index, event in enumerate(c.events)
        }
    )
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers["Access-Control-Allow-Credentials"] = "true"
    return response


if __name__ == "__main__":
    app.run(host="0.0.0.0")
