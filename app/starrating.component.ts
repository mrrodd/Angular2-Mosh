import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector: 'star-rating',
    template: `
        <i class='glyphicon' 
           [class.glyphicon-star-empty]='!isFavorite'
           [class.glyphicon-star]='isFavorite'
           (click)='onStarClick()' >
        </i>
    `
})
export class StarRatingComponent {
    @Input() isFavorite = false;
    @Output() change = new EventEmitter();

    onStarClick(): void {
        this.isFavorite = !this.isFavorite;
        this.change.emit({value: this.isFavorite});
    }
}