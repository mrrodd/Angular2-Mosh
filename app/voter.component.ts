import { Component, Input, Output } from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
        <div class='vote'>
            <i class='glyphicon glyphicon-menu-up' 
               (click)='onVoteUp()'
               [class.orange]='vote > baseVote'>
            </i>
            <span>{{vote}}</span>
            <i class='glyphicon glyphicon-menu-down' 
               (click)='onVoteDown()'
               [class.orange]='vote < baseVote'>
            </i>
        </div>
    `,
    styles: [`
        .vote {
            font-size: 25px;
            width: 20px;
        }
        .glyphicon {
            cursor: hand;
        }
        .orange {
            color: orange;
        }
    `]
})
export class VoterComponent {
    title = 'Voter';
    @Input() voteCount = 10;
    baseVote = this.voteCount; 

    onVoteUp(): void {
        if(this.voteCount == this.baseVote || this.voteCount == this.baseVote - 1) 
            this.voteCount += 1;
    }

    onVoteDown(): void {
        if(this.voteCount == this.baseVote || this.voteCount == this.baseVote + 1) 
            this.voteCount -= 1;
    }

}
