import { Component } from 'angular2/core';

@Component({
    selector: 'star-rating',
    template: `
        <i class='glyphicon' 
           [class.glyphicon-star-empty]='isEmpty'
           [class.glyphicon-star]='!isEmpty'
           (click)='onStarClick()' >
        </i>
    `
})
export class StarRatingComponent {
    isEmpty: boolean  = true;

    onStarClick(): void {
        this.isEmpty = !this.isEmpty;
    }
}