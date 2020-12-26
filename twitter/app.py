from flask import Flask, jsonify
from flask_restful import Api, Resource, reqparse
app = Flask(__name__)
api = Api(app)

users =[
    {
    'name': 'MrBeast',
    'userName': '@MrBeastsYT',
    'tweet': 'I see your tweets and I’m trying to double and triple the amount of restaurants asap! I want you all to be able to try a MrBeast Burgers 🥺',
    'comments': '11.2k',
    'retweets': '908',
    'likes': '46K',
    'image': '',
    },
    {
    'name': 'Elon Musk',
    'userName': '@elonmusk',
    'tweet': 'Bitcoin is my safe word',
    'comments': '5.5K',
    'retweets': '18.5k',
    'likes': '178.5K',
    'image': '',
    },
    {
    'name': 'Ninja',
    'userName': '@Ninja',
    'tweet': 'Ninja skins available today in @FallGuysGame',
    'comments': '552',
    'retweets': '681',
    'likes': '27.6K',
    'image': '',
    },
    {
    'name': 'Playstation',
    'userName': '@Playstation',
    'tweet': 'See how PlayStation celebrated PS5’s global launch with iconic buildings and popular sites around the world: http://play.st/2ISNItz',
    'comments': '4K',
    'retweets': '5K',
    'likes': '19.1K',
    'image': '',
    }
]

class User(Resource):
    def get(self, name):
        for user in users:
            if (name == user['name']):
                return user, 200
        return 'User not found', 404

api.add_resource(User, '/user/<string:name>')
app.run(debug=True)


