from flask import Flask, jsonify
import requests
import ics


cal_url = "https://rosebank.instructure.com/feeds/calendars/user_VjkmU5ODxKymLFNVtq51pRHNU6zQ1rZYIG09JgRR.ics"


def create_app():
    app = Flask(__name__)

    @app.route("/")
    def index():
        c = ics.Calendar(requests.get(cal_url).text)
        response = jsonify(
            {
                index: [event.name, event.begin.humanize(), event.description]
                for index, event in enumerate(c.events)
            }
        )
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers["Access-Control-Allow-Credentials"] = "true"
        return response

    return app
