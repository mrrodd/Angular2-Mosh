import {Component} from 'angular2/core'
import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'
import {VoterComponent} from './voter.component'

@Component({
    selector: 'my-app',
    template: `<h1>Hello Angular</h1>
        <voter></voter>
        <courses></courses>
        <authors></authors>
    `,
    directives: [CoursesComponent, AuthorsComponent, VoterComponent]
})
export class AppComponent { }