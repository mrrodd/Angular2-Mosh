import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'voter',
    template: `
        <div class='voter'>
            <i class='glyphicon glyphicon-menu-up vote-button' 
                [class.highlighted]='myVote == 1'
                (click)='onVoteUp()'>
            </i>
            <span class='vote-count'>{{voteCount + myVote}}</span>
            <i class='glyphicon glyphicon-menu-down vote-button' 
                [class.highlighted]='myVote == -1'
                (click)='onVoteDown()'>
            </i>
        </div>
    `,
    styles: [`
        .voter {
            width: 20px;
            text-align: center;
            color: #999;
        }
        .vote-count {
            font-size: 1.2em;
        }
        .vote-button {
            cursor: pointer;
        }
        .highlighted {
            font-weight: bold;
            color: orange;
        }
    `]
})
export class VoterComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;
    @Output() vote = new EventEmitter();

    onVoteUp(): void {
        if(this.myVote == 1) return;
            
        this.myVote++;
        this.vote.emit({myVote: this.myVote});
    }

    onVoteDown(): void {
        if(this.myVote == -1) return;
            
        this.myVote--;
        this.vote.emit({myVote: this.myVote});
    }
}
