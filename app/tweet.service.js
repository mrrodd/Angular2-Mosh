System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            "name": "Windward",
                            "handle": "@windwardstudios",
                            "description": "Looking for a better company reporting or docgen app?"
                        },
                        {
                            "name": "AngularJS News",
                            "handle": "@angularjs_news",
                            "description": "Right Relevance: Infuencers, Articles and Conversations"
                        },
                        {
                            "name": "UX & Bootstrap",
                            "handle": "@3rdwave",
                            "description": "10 Reasons Why Web Projects Fail"
                        }
                    ];
                };
                ;
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map