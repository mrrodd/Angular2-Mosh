import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
import {StarRatingComponent} from './starrating.component'

@Component({
    selector: 'courses',
    template: `
        <h2>
            Courses
            <star-rating [isFavorite]="isFavorite" (change)="onFavoriteChange($event)" ></star-rating>
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
        directives: [AutoGrowDirective, StarRatingComponent]
})

export class CoursesComponent {
    title = "The title of courses page";
    courses: string[];
    isFavorite: true;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }

    onFavoriteChange($event) {
        console.log($event);
    }
}