from flask import Flask, jsonify
from flask_restful import Api, Resource
app = Flask(__name__)
api = Api(app)
import requests
import json


tkn = 'Bearer AAAAAAAAAAAAAAAAAAAAAPy5LAEAAAAAGLzQdm7Geimz2mueyGQCRlJE2wg%3DtHF24CFQf9D984qDYqf0vIIWItJ8ZxzfzvSktaS3qWHvfQG5uf'
payload = {'q':'Elon Musk', 'result_type':'popular', 'count': '5'}
headers = {'Authorization': tkn, 'Accept' : 'application/json', 'Content-Type':'application/json'}
twitter = requests.get('https://api.twitter.com/1.1/search/tweets.json', params=payload, headers=headers)
tweets = twitter.json()
# tweets = json.dumps(twitter.json())

# print(tweets)
# tweets = r.json()

# print(tweets['statuses'][1]['text'])
# print(tweets['statuses'][1]['user']['name'])
# print(tweets['statuses'][1]['user']['screen_name'])
# print(tweets['statuses'][1]['retweet_count'])
# print(tweets['statuses'][1]['favorite_count'])





# tweets =[
#     {
#     'name': 'MrBeast',
#     'userName': '@MrBeastsYT',
#     'tweet': 'I see your tweets and I’m trying to double and triple the amount of restaurants asap! I want you all to be able to try a MrBeast Burgers 🥺',
#     'comments': '11.2k',
#     'retweets': '908',
#     'likes': '46K',
#     'image': '',
#     'id': '1',
#     },
#     {
#     'name': 'Elon Musk',
#     'userName': '@elonmusk',
#     'tweet': 'Bitcoin is my safe word',
#     'comments': '5.5K',
#     'retweets': '18.5k',
#     'likes': '178.5K',
#     'image': '',
#     'id': '2',
#     },
#     {
#     'name': 'Ninja',
#     'userName': '@Ninja',
#     'tweet': 'Ninja skins available today in @FallGuysGame',
#     'comments': '552',
#     'retweets': '681',
#     'likes': '27.6K',
#     'image': '',
#     'id': '3',
#     },
#     {
#     'name': 'Playstation',
#     'userName': '@Playstation',
#     'tweet': 'See how PlayStation celebrated PS5’s global launch with iconic buildings and popular sites around the world: http://play.st/2ISNItz',
#     'comments': '4K',
#     'retweets': '5K',
#     'likes': '19.1K',
#     'image': '',
#     'id': '4',
#     }
# ]


# @app.route('/')
# def index():
#     return jsonify(tweets)


class Twitter(Resource):
    def get(self):
        return jsonify(tweets)

class Tweets(Resource):
    def get(self, name):
        return tweets

class TweetUser(Resource):
    def get(self, name):
        for tweet in tweets:
            if(name == tweet['name']):
                return tweet, 200
        return 'User not found', 404

api.add_resource(Twitter, '/api/twitter')

api.add_resource(Tweets, '/api/tweets/<string:name>')

api.add_resource(TweetUser, '/api/tweetUser/<string:name>')

if __name__=="__main__":
    app.run(debug=True)


