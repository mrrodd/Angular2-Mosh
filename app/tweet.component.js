System.register(['angular2/core', './like.component', './tweet.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, like_component_1, tweet_service_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(service) {
                    this.tweets = service.getTweets();
                }
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweet',
                        template: "\n        <div class=\"media\" *ngFor=\"#tweet of tweets; #i=index\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                    <img class=\"media-object\" src=\"{{tweet.imageUrl}}?{{i}}\" alt=\"Random Image\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{tweet.name}} <span class=\"handle\">{{tweet.handle}}</span></h4>\n                {{tweet.description}}\n                <div>\n                    <like [totalLikes]='tweet.totalLikes' [iLike]=\"tweet.iLike\"></like>\n                </div>\n            </div>\n            \n        </div>    \n    ",
                        styles: ["\n        .handle {\n            color: #ccc;\n        }\n        \n        .media {\n            margin-bottom: 20px;\n        }\n        \n        .media-object {\n            border-radius: 10px;\n        }\n    "],
                        providers: [tweet_service_1.TweetService],
                        directives: [like_component_1.LikeComponent]
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map