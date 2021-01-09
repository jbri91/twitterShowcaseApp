from flask import Flask, jsonify
from flask_restful import Api, Resource
app = Flask(__name__)
api = Api(app)
import requests
import json

tkn = 'Bearer AAAAAAAAAAAAAAAAAAAAAPy5LAEAAAAAGLzQdm7Geimz2mueyGQCRlJE2wg%3DtHF24CFQf9D984qDYqf0vIIWItJ8ZxzfzvSktaS3qWHvfQG5uf'



payload = {'q':'from:elonmusk', 'result_type':'recent'}
payload2 = {'q':'from:tferriss', 'result_type':'recent'}
payload3 = {'q':'from:DalaiLama', 'result_type':'recent'}
payload4 = {'q':'from:AdamMGrant', 'result_type':'recent'}
payload5 = {'q':'from:neilpatel', 'result_type':'recent'}

headers = {'Authorization': tkn, 'Accept' : 'application/json', 'Content-Type':'application/json'}
elonMusk = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload, headers=headers).json()

timFerris = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload2, headers=headers).json()
dalaiLama = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload3, headers=headers).json()
adamGrant = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload4, headers=headers).json()
neilPatel = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload5, headers=headers).json()


class ElonTweets(Resource):
    def get(self):
        return jsonify(elonMusk)

class TimTweets(Resource):
    def get(self):
        return jsonify(timFerris)

class DalaiTweets(Resource):
    def get(self):
        return jsonify(dalaiLama)

class AdamTweets(Resource):
    def get(self):
        return jsonify(adamGrant)

class NeilTweets(Resource):
    def get(self):
        return jsonify(neilPatel)

api.add_resource(ElonTweets, '/api/elonmusk')
api.add_resource(TimTweets, '/api/timferris')
api.add_resource(DalaiTweets, '/api/dalailama')
api.add_resource(AdamTweets, '/api/adamgrant')
api.add_resource(NeilTweets, '/api/neilpatel')

if __name__=="__main__":
    app.run(debug=True)


