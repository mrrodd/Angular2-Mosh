import { Component } from 'angular2/core'
import { LikeComponent } from './like.component'
import { TweetService } from './tweet.service'

@Component({
    selector: 'tweet',
    template: `
        <div class="media" *ngFor="#tweet of tweets; #i=index">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="{{tweet.imageUrl}}?{{i}}" alt="Random Image">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{tweet.name}} <span class="handle">{{tweet.handle}}</span></h4>
                {{tweet.description}}
                <div>
                    <like [totalLikes]='tweet.totalLikes' [iLike]="tweet.iLike"></like>
                </div>
            </div>
            
        </div>    
    `,
    styles: [`
        .handle {
            color: #ccc;
        }
        
        .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }
    `],    
    providers: [TweetService],
    directives: [LikeComponent]
})
export class TweetComponent {
    tweets: any[];
    constructor(service: TweetService) {
        this.tweets = service.getTweets();
    }
}
