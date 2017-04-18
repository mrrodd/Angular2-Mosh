import { Component } from 'angular2/core'
import { LikeComponent } from './like.component'

@Component({
    selector: 'tweet',
    template: `
        <div class="media" *ngFor="#tweet of tweets; #i=index">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="http://lorempixel.com/100/100/people?{{i}}" alt="Lorem Pixel">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{tweet.name}} {{tweet.handle}}</h4>
                <h5 class="media-heading">{{tweet.description}}</h5>
                <like></like>
            </div>
            
        </div>    
    `,
    directives: [LikeComponent]
})
export class TweetComponent {
    tweets = [
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
    ]
}
