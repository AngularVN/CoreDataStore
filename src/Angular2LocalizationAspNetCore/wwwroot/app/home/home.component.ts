import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Observable }       from 'rxjs/Observable';
import { Http } from '@angular/http';


@Component({
    selector: 'homecomponent',
    templateUrl: 'app/home/home.component.html',
    directives: [CORE_DIRECTIVES]
})

export class HomeComponent implements OnInit {

    public message: string;

    constructor() {
        this.message = "home.component";
    }

    ngOnInit() {
        console.log("ngOnInit HomeComponent");
    }
}
