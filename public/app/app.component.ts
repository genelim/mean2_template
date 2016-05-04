import {Component} from 'angular2/core';


@Component({
    selector: 'pm-app',
    template:
    `
        <div>
            <h1>{{pageTitle}}</h1>
        </div>
    `
})

export class AppComponent {
    pageTitle: string = 'Something Title'
}