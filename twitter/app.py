from flask import Flask, jsonify
from flask_restful import Api, Resource
app = Flask(__name__)
api = Api(app)
import requests
import json


tkn = 'Bearer AAAAAAAAAAAAAAAAAAAAAPy5LAEAAAAAGLzQdm7Geimz2mueyGQCRlJE2wg%3DtHF24CFQf9D984qDYqf0vIIWItJ8ZxzfzvSktaS3qWHvfQG5uf'
payload = {'q':'from:elonmusk', 'result_type':'recent', 'count': '5'}
headers = {'Authorization': tkn, 'Accept' : 'application/json', 'Content-Type':'application/json'}
elonMusk = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload, headers=headers)
elonMusk = elonMusk.json()

class ElonTweets(Resource):
    def get(self):
        return jsonify(elonMusk)



api.add_resource(ElonTweets, '/api/elonmusk')

if __name__=="__main__":
    app.run(debug=True)


