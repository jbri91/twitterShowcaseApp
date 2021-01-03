from flask import Flask, jsonify
from flask_restful import Api, Resource, reqparse
app = Flask(__name__)
api = Api(app)
import requests
from requests_oauthlib import OAuth1Session

# url = 'https://api.twitter.com/1.1/search/tweets.json'
# auth = OAuth1Session('EeNdQfCxEuwofHd3a4G6MPf4n', 'HIqXFKZvLf5pDG1dJyla6rAvvVFFtzZyczKz8HIKTNa5GImlR4', '1262230719687991299-FVM3Ht8Ujx38XX1A3RsBkr6XM5C6Yi', 'AJCfZqm0T8Ne3vi2ZpApN3nPSZzvuOTIZ7YKLIwt36Zth' )

# r = requests.get(url, auth=auth)

tkn = 'Bearer AAAAAAAAAAAAAAAAAAAAAPy5LAEAAAAAgnWUGbDhvpF5ZbTuuRld17qV%2FD4%3DWvwkpQ3B4NwfDkyyYjU6iYOpnGStOiwW2lWaOiPLnFKoST7Dg8'
payload = {'q':'nasa', 'result_type':'popular'}
headers = {'authorization': tkn, 'Accept' : 'application/json'}
r = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload, headers=headers)
print(r.status_code)
print(r.url)



tweets =[
    {
    'name': 'MrBeast',
    'userName': '@MrBeastsYT',
    'tweet': 'I see your tweets and I’m trying to double and triple the amount of restaurants asap! I want you all to be able to try a MrBeast Burgers 🥺',
    'comments': '11.2k',
    'retweets': '908',
    'likes': '46K',
    'image': '',
    'id': '1',
    },
    {
    'name': 'Elon Musk',
    'userName': '@elonmusk',
    'tweet': 'Bitcoin is my safe word',
    'comments': '5.5K',
    'retweets': '18.5k',
    'likes': '178.5K',
    'image': '',
    'id': '2',
    },
    {
    'name': 'Ninja',
    'userName': '@Ninja',
    'tweet': 'Ninja skins available today in @FallGuysGame',
    'comments': '552',
    'retweets': '681',
    'likes': '27.6K',
    'image': '',
    'id': '3',
    },
    {
    'name': 'Playstation',
    'userName': '@Playstation',
    'tweet': 'See how PlayStation celebrated PS5’s global launch with iconic buildings and popular sites around the world: http://play.st/2ISNItz',
    'comments': '4K',
    'retweets': '5K',
    'likes': '19.1K',
    'image': '',
    'id': '4',
    }
]

class Tweets(Resource):
    def get(self, name):
        return tweets


class TweetUser(Resource):
    def get(self, name):
        for tweet in tweets:
            if(name == tweet['name']):
                return tweet, 200
        return 'User not found', 404



api.add_resource(Tweets, '/api/tweets/<string:name>')

api.add_resource(TweetUser, '/api/tweetUser/<string:name>')

app.run(debug=True)


