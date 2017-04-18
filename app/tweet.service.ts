
export class TweetService {
    getTweets() {   // TODO: add type
        return [
            {
                "name": "Windward",
                "handle": "@windwardstudios",
                "description": "Looking for a better company reporting or docgen app?",
                "totalLikes": 1,
                "iLike": false,
                "imageUrl": "http://lorempixel.com/100/100/people"
            },
            {
                "name": "AngularJS News",
                "handle": "@angularjs_news",
                "description": "Right Relevance: Infuencers, Articles and Conversations",
                "totalLikes": 5,
                "iLike": true,
                "imageUrl": "http://lorempixel.com/100/100/people"
            },
            {
                "name": "UX & Bootstrap",
                "handle": "@3rdwave",
                "description": "10 Reasons Why Web Projects Fail",
                "totalLikes": 3,
                "iLike": true,
                "imageUrl": "http://lorempixel.com/100/100/people"
            }
        ]
    };
}