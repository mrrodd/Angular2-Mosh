import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
import {FavoriteComponent} from './favorite.component'
import {LikeComponent} from './like.component'

@Component({
    selector: 'courses',
    template: `
        <h2>
            Courses
            <favorite [isFavorite]="isFavorite" (change)="onFavoriteChange($event)" ></favorite>
            <like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
        </h2>
        {{title}}
        <input type="text" autoGrow />
        <ul>
            <li *ngFor="#course of courses">
                {{course}}
            </li>
        </ul>
        `,
        providers: [CourseService],
        directives: [AutoGrowDirective, FavoriteComponent, LikeComponent]
})

export class CoursesComponent {
    title = "The title of courses page";
    courses: string[];
    isFavorite: true;
    tweet = {
        totalLikes: 10,
        iLike: false
    }
    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }

    onFavoriteChange($event) {
        console.log($event);
    }
}