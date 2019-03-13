from flask import Flask, jsonify
import requests
import ics


cal_url = "https://rosebank.instructure.com/feeds/calendars/user_VjkmU5ODxKymLFNVtq51pRHNU6zQ1rZYIG09JgRR.ics"


def create_app():
    app = Flask(__name__)
    app.config["CORS_HEADERS"] = "Content-Type"

    @app.route("/")
    def index():
        c = ics.Calendar(requests.get(cal_url).text)
        response = jsonify(
            {
                index: {
                    "name": event.name,
                    "date": event.begin.humanize(),
                    "description": event.description,
                }
                for index, event in enumerate(c.events)
                if "SRSC" not in event.name
            }
        )
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers["Access-Control-Allow-Credentials"] = "true"
        return response

    return app
